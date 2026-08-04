'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type CoverflowContextValue = {
  active: number;
  setActive: (i: number) => void;
  count: number;
  rotation: number;
};

const CoverflowContext = React.createContext<CoverflowContextValue | null>(null);

function useCoverflow() {
  const ctx = React.useContext(CoverflowContext);
  if (!ctx) {
    throw new Error('Coverflow components must be used within <Coverflow>.');
  }
  return ctx;
}

type CoverflowItemProps = {
  children: React.ReactNode;
  label?: string;
  /** Injected automatically by <Coverflow>. */
  index?: number;
};

export function CoverflowItem({ children, label, index = 0 }: CoverflowItemProps) {
  const { active, setActive, rotation } = useCoverflow();
  const offset = index - active;
  const abs = Math.abs(offset);
  const isActive = offset === 0;

  return (
    <motion.div
      role="group"
      aria-roledescription="slide"
      aria-label={label}
      onClick={() => !isActive && setActive(index)}
      animate={{
        x: `${-50 + offset * 56}%`,
        y: '-50%',
        rotateY: isActive ? 0 : offset < 0 ? rotation : -rotation,
        scale: isActive ? 1 : 0.82,
        opacity: abs > 2 ? 0 : abs === 2 ? 0.45 : 1,
        zIndex: 100 - abs,
      }}
      transition={{ type: 'spring', stiffness: 190, damping: 26 }}
      style={{ pointerEvents: abs > 2 ? 'none' : 'auto' }}
      className={cn(
        'absolute left-1/2 top-1/2 w-[85%] origin-center [transform-style:preserve-3d] sm:w-[68%] md:w-[52%] lg:w-[42%]',
        !isActive && 'cursor-pointer',
      )}
    >
      {children}
    </motion.div>
  );
}

type CoverflowProps = {
  items: React.ReactElement[];
  rotation?: number;
  className?: string;
  children?: React.ReactNode;
  'aria-label'?: string;
};

export function Coverflow({
  items,
  rotation = 22,
  className,
  children,
  'aria-label': ariaLabel,
}: CoverflowProps) {
  const [active, setActive] = React.useState(0);
  const count = items.length;

  const go = React.useCallback(
    (dir: number) => {
      setActive((a) => Math.min(Math.max(a + dir, 0), count - 1));
    },
    [count],
  );

  return (
    <CoverflowContext.Provider value={{ active, setActive, count, rotation }}>
      <div className={cn('w-full', className)}>
        <div
          role="region"
          aria-label={ariaLabel}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') {
              e.preventDefault();
              go(-1);
            } else if (e.key === 'ArrowRight') {
              e.preventDefault();
              go(1);
            }
          }}
          className="relative h-[320px] w-full overflow-hidden rounded-2xl outline-none [perspective:1400px] focus-visible:ring-2 focus-visible:ring-primary/50 md:h-[290px]"
        >
          {items.map((item, i) =>
            React.cloneElement(item, { index: i, key: item.key ?? i } as Partial<CoverflowItemProps>),
          )}
        </div>
        {children}
      </div>
    </CoverflowContext.Provider>
  );
}

type CoverflowControlsProps = {
  announce?: (index: number, total: number) => string;
  prevLabel?: string;
  nextLabel?: string;
  dotsLabel?: string;
};

export function CoverflowControls({
  announce,
  prevLabel = 'Previous',
  nextLabel = 'Next',
  dotsLabel = 'Choose an item',
}: CoverflowControlsProps) {
  const { active, setActive, count } = useCoverflow();

  const buttonBase =
    'flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-zinc-700 shadow-sm transition-all hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:bg-zinc-900 dark:text-zinc-300';

  return (
    <div className="mt-4 flex items-center justify-center gap-4">
      <button
        type="button"
        aria-label={prevLabel}
        disabled={active === 0}
        onClick={() => setActive(Math.max(active - 1, 0))}
        className={buttonBase}
      >
        <ChevronLeft size={20} />
      </button>

      <div role="tablist" aria-label={dotsLabel} className="flex items-center gap-2">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`Item ${i + 1} of ${count}`}
            onClick={() => setActive(i)}
            className={cn(
              'h-2 rounded-full transition-all duration-300',
              i === active
                ? 'w-6 bg-primary'
                : 'w-2 bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-600 dark:hover:bg-zinc-500',
            )}
          />
        ))}
      </div>

      <button
        type="button"
        aria-label={nextLabel}
        disabled={active === count - 1}
        onClick={() => setActive(Math.min(active + 1, count - 1))}
        className={buttonBase}
      >
        <ChevronRight size={20} />
      </button>

      <div aria-live="polite" className="sr-only">
        {announce?.(active, count)}
      </div>
    </div>
  );
}
