import React from 'react';
import './Input.css';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  prefixIcon?: React.ReactNode;
  error?: boolean;
  hint?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, prefixIcon, error, hint, className = '', disabled, ...props }, ref) => {
    const wrapperClass = [
      'atlas-input-wrapper',
      error ? 'atlas-input-wrapper--error' : '',
      disabled ? 'atlas-input-wrapper--disabled' : '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={`atlas-input-field ${className}`}>
        {label && <label className="atlas-input-label">{label}</label>}
        <div className={wrapperClass}>
          {prefixIcon && (
            <span className="atlas-input-prefix-icon" aria-hidden="true">
              {prefixIcon}
            </span>
          )}
          <input
            ref={ref}
            className="atlas-input"
            disabled={disabled}
            aria-invalid={error}
            {...props}
          />
        </div>
        {hint && (
          <span className={`atlas-input-hint ${error ? 'atlas-input-hint--error' : ''}`}>
            {hint}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
