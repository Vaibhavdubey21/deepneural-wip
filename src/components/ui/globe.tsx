'use client';

import createGlobe, { COBEOptions } from 'cobe';
import { useMotionValue, useSpring } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG_LIGHT: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [0.85, 0.9, 0.95],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [0.7, 0.8, 0.9],
  markers: [
    { location: [51.5074, -0.1278], size: 0.1 },
    { location: [48.8566, 2.3522], size: 0.08 },
    { location: [52.52, 13.405], size: 0.07 },
    { location: [59.9139, 10.7522], size: 0.06 },
    { location: [60.1699, 24.9384], size: 0.08 },
    { location: [55.7558, 37.6173], size: 0.09 },
    { location: [64.1466, -21.9426], size: 0.07 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [51.2277, 6.7735], size: 0.06 },
    { location: [53.3498, -6.2603], size: 0.07 },
  ],
};

const GLOBE_CONFIG_DARK: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 0.8,
  baseColor: [0.25, 0.3, 0.35],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [0.5, 0.55, 0.6],
  markers: [
    { location: [51.5074, -0.1278], size: 0.1 },
    { location: [48.8566, 2.3522], size: 0.08 },
    { location: [52.52, 13.405], size: 0.07 },
    { location: [59.9139, 10.7522], size: 0.06 },
    { location: [60.1699, 24.9384], size: 0.08 },
    { location: [55.7558, 37.6173], size: 0.09 },
    { location: [64.1466, -21.9426], size: 0.07 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [51.2277, 6.7735], size: 0.06 },
    { location: [53.3498, -6.2603], size: 0.07 },
  ],
};

export function Globe({
  className,
  config,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [isDark, setIsDark] = useState(false);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  // Detect dark mode on mount and listen for changes
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  // Use provided config or select based on theme
  const effectiveConfig =
    config || (isDark ? GLOBE_CONFIG_DARK : GLOBE_CONFIG_LIGHT);

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? 'grabbing' : 'grab';
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener('resize', onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...effectiveConfig,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phi += 0.005;
        state.phi = phi + rs.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => (canvasRef.current!.style.opacity = '1'), 0);
    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, [rs, effectiveConfig, isDark]);

  return (
    <div
      id="GlobeWrapper"
      className={cn(
        'absolute inset-0 mx-auto aspect-square w-full max-w-[600px]',
        className
      )}
    >
      <canvas
        className={cn(
          'size-full opacity-0 transition-opacity duration-500 contain-[layout_paint_size]'
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}
