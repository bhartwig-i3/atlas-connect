import React from 'react';
import './Toggle.css';

export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string;
}

export const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  ({ label, className = '', disabled, ...props }, ref) => {
    const wrapperClass = [
      'atlas-toggle-wrapper',
      disabled ? 'atlas-toggle-wrapper--disabled' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <label className={wrapperClass}>
        <div className="atlas-toggle-control">
          <input
            ref={ref}
            type="checkbox"
            role="switch"
            className="atlas-toggle-input"
            disabled={disabled}
            {...props}
          />
          <div className="atlas-toggle-track" aria-hidden="true">
            <div className="atlas-toggle-thumb" />
          </div>
        </div>
        {label && <span className="atlas-toggle-label">{label}</span>}
      </label>
    );
  }
);

Toggle.displayName = 'Toggle';
