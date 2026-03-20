import React from 'react';
import './Select.css';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string;
  options: SelectOption[];
  placeholder?: string;
  error?: boolean;
  hint?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, placeholder, error, hint, className = '', disabled, ...props }, ref) => {
    const wrapperClass = [
      'atlas-select-wrapper',
      error ? 'atlas-select-wrapper--error' : '',
      disabled ? 'atlas-select-wrapper--disabled' : '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={`atlas-select-field ${className}`}>
        {label && <label className="atlas-select-label">{label}</label>}
        <div className={wrapperClass}>
          <select
            ref={ref}
            className="atlas-select"
            disabled={disabled}
            aria-invalid={error}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            ))}
          </select>
          <span className="atlas-select-chevron" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
        {hint && (
          <span className={`atlas-select-hint ${error ? 'atlas-select-hint--error' : ''}`}>
            {hint}
          </span>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
