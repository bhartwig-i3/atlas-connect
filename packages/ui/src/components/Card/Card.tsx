import React from 'react';
import './Card.css';

export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  padding?: CardPadding;
  as?: React.ElementType;
}

export const Card: React.FC<CardProps> = ({
  children,
  header,
  footer,
  padding = 'md',
  className = '',
  as: Tag = 'div',
  ...rest
}) => {
  return (
    <Tag className={`atlas-card ${className}`} {...rest}>
      {header && <div className="atlas-card__header">{header}</div>}
      <div className={`atlas-card__body atlas-card__body--${padding}`}>{children}</div>
      {footer && <div className="atlas-card__footer">{footer}</div>}
    </Tag>
  );
};
