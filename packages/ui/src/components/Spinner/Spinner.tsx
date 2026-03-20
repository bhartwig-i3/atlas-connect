import React from 'react';
import './Spinner.css';

export type SpinnerSize = 'sm' | 'md' | 'lg';
export type SpinnerVariant = 'brand' | 'white' | 'muted';

export interface SpinnerProps {
  size?: SpinnerSize;
  variant?: SpinnerVariant;
  label?: string;
  className?: string;
}

const sizePx: Record<SpinnerSize, number> = { sm: 16, md: 24, lg: 40 };

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  variant = 'brand',
  label = 'Loading…',
  className = '',
}) => {
  const px = sizePx[size];
  return (
    <span
      className={`atlas-spinner atlas-spinner--${size} atlas-spinner--${variant} ${className}`}
      role="status"
      aria-label={label}
      style={{ width: px, height: px }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ width: '100%', height: '100%' }}
      >
        <circle
          cx="12"
          cy="12"
          r="9"
          stroke="currentColor"
          strokeOpacity="0.2"
          strokeWidth="3"
        />
        <path
          d="M12 3a9 9 0 0 1 9 9"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
};
