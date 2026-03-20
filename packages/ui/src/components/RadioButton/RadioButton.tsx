import React from 'react';
import './RadioButton.css';

export type RadioButtonState = 'default' | 'error';

export interface RadioButtonProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  state?: RadioButtonState;
}

export const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label, state = 'default', className = '', disabled, ...props }, ref) => {
    const wrapperClass = [
      'atlas-radio-wrapper',
      state === 'error' ? 'atlas-radio-wrapper--error' : '',
      disabled ? 'atlas-radio-wrapper--disabled' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <label className={wrapperClass}>
        <div className="atlas-radio-control">
          <input
            ref={ref}
            type="radio"
            className="atlas-radio-input"
            disabled={disabled}
            {...props}
          />
          <div className="atlas-radio-circle" aria-hidden="true">
            <div className="atlas-radio-dot" />
          </div>
        </div>
        {label && <span className="atlas-radio-label">{label}</span>}
      </label>
    );
  }
);

RadioButton.displayName = 'RadioButton';
