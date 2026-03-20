import React from 'react';
import './Checkbox.css';

export type CheckboxState = 'default' | 'error';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  indeterminate?: boolean;
  state?: CheckboxState;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, indeterminate, state = 'default', className = '', disabled, checked, ...props }, ref) => {
    const innerRef = React.useRef<HTMLInputElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLInputElement>) ?? innerRef;

    React.useEffect(() => {
      if (resolvedRef.current) {
        resolvedRef.current.indeterminate = indeterminate ?? false;
      }
    }, [indeterminate, resolvedRef]);

    const wrapperClass = [
      'atlas-checkbox-wrapper',
      state === 'error' ? 'atlas-checkbox-wrapper--error' : '',
      disabled ? 'atlas-checkbox-wrapper--disabled' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <label className={wrapperClass}>
        <div className="atlas-checkbox-control">
          <input
            ref={resolvedRef}
            type="checkbox"
            className="atlas-checkbox-input"
            disabled={disabled}
            checked={checked}
            {...props}
          />
          <div className="atlas-checkbox-box" aria-hidden="true">
            {indeterminate ? (
              <svg width="10" height="2" viewBox="0 0 10 2" fill="none">
                <path d="M1 1h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
        </div>
        {label && <span className="atlas-checkbox-label">{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
