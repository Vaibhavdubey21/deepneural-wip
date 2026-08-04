'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MovingBorder } from '@/components/ui/moving-border';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  /** Animates a light travelling around the button border. For CTAs. */
  movingBorder?: boolean;
  /** Milliseconds for one full trip around the border. */
  movingBorderDuration?: number;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  icon,
  iconPosition = 'left',
  movingBorder = false,
  movingBorderDuration = 2800,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none';

  const variantStyles = {
    primary: 'bg-primary hover:bg-primary-600 text-zinc-950 shadow-md hover:shadow-lg',
    secondary: 'bg-secondary hover:bg-secondary-600 text-zinc-950 shadow-md hover:shadow-lg',
    outline: 'border-2 border-primary text-primary hover:bg-primary/10',
    ghost: 'text-primary hover:bg-primary/10',
  } as const;

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3',
  } as const;

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );

  if (movingBorder) {
    const radius = '0.5rem';
    const innerRadius = `calc(${radius} * 0.9)`;

    return (
      <motion.button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={cn('relative overflow-hidden bg-transparent p-[1.5px]', disabledStyles)}
        style={{ borderRadius: radius }}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
      >
        <div
          className="absolute inset-0"
          style={{ borderRadius: innerRadius }}
          aria-hidden
        >
          <MovingBorder duration={movingBorderDuration} rx="30%" ry="30%">
            <div className="h-20 w-20 opacity-80 bg-[radial-gradient(#3B82F6_40%,transparent_60%)]" />
          </MovingBorder>
        </div>

        <div
          className={cn(
            baseStyles,
            variantStyles[variant],
            sizeStyles[size],
            'relative h-full w-full',
            className,
          )}
          style={{ borderRadius: innerRadius }}
        >
          {content}
        </div>
      </motion.button>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {content}
    </motion.button>
  );
};

export default Button;
