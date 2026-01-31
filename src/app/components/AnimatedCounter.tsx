'use client';

import { animate, useInView, useMotionValue } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface AnimatedCounterProps {
    value: number;
    duration?: number;
}

export default function AnimatedCounter({ value, duration = 2 }: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: false, margin: "0px" });
    const count = useMotionValue(0);

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, value, {
                duration: duration,
                ease: "easeOut",
                onUpdate: (latest) => {
                    if (ref.current) {
                        ref.current.textContent = Math.round(latest).toString();
                    }
                }
            });
            return () => controls.stop();
        } else {
            // Reset to 0 when it leaves view
            count.set(0);
            if (ref.current) {
                ref.current.textContent = "0";
            }
        }
    }, [isInView, count, value, duration]);

    return <span ref={ref}>0</span>;
}
