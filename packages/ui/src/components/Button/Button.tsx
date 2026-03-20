import React from 'react';
import './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'destructive' | 'success';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonType = 'filled' | 'outlined';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  buttonType?: ButtonType;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      buttonType = 'filled',
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const classes = [
      'atlas-btn',
      `atlas-btn--${variant}`,
      `atlas-btn--${size}`,
      `atlas-btn--${buttonType}`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
