import React from 'react';
import './Badge.css';

export type BadgeVariant = 'brand' | 'gray' | 'error' | 'success' | 'warning';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  count?: number;
  dot?: boolean;
  max?: number;
  className?: string;
  children?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'brand',
  size = 'md',
  count,
  dot = false,
  max = 99,
  className = '',
  children,
}) => {
  if (dot) {
    return <span className={`atlas-badge atlas-badge--dot atlas-badge--${variant} ${className}`} role="status" />;
  }

  const display = count !== undefined ? (count > max ? `${max}+` : String(count)) : undefined;

  return (
    <span
      className={`atlas-badge atlas-badge--${size} atlas-badge--${variant} ${className}`}
      role={count !== undefined ? 'status' : undefined}
      aria-label={count !== undefined ? `${count} notifications` : undefined}
    >
      {display ?? children}
    </span>
  );
};
