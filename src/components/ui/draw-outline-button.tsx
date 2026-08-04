'use client';

import React from 'react';

import { cn } from '@/lib/utils';

type DrawOutlineButtonProps = {
  /** Render as a different element, e.g. next/link. Defaults to `button`. */
  as?: React.ElementType;
  children: React.ReactNode;
  href?: string;
} & Omit<React.ComponentPropsWithoutRef<'button'>, 'children'>;

export function DrawOutlineButton({
  as: Component = 'button',
  children,
  className,
  ...rest
}: DrawOutlineButtonProps) {
  return (
    <Component
      {...rest}
      className={cn(
        'group relative inline-block px-4 py-2 font-medium text-zinc-900 dark:text-white transition-colors duration-[400ms] hover:text-primary',
        className,
      )}
    >
      <span className="inline-flex items-center gap-2">{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-primary transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-primary transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-primary transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-primary transition-all delay-300 duration-100 group-hover:h-full" />
    </Component>
  );
}

export default DrawOutlineButton;
