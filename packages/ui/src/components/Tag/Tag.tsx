import React from 'react';
import './Tag.css';

export type TagVariant = 'gray' | 'blue' | 'purple' | 'red' | 'green' | 'yellow' | 'brand' | 'orange';

export interface TagProps {
  variant?: TagVariant;
  children: React.ReactNode;
  onRemove?: () => void;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  variant = 'gray',
  children,
  onRemove,
  className = '',
}) => {
  return (
    <span className={`atlas-tag atlas-tag--${variant} ${className}`}>
      {children}
      {onRemove && (
        <button
          type="button"
          className="atlas-tag-remove"
          onClick={onRemove}
          aria-label="Remove"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path d="M8 2L2 8M2 2l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </span>
  );
};
