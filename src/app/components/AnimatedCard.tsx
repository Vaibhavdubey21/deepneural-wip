import React from 'react';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
}) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
