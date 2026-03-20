import React from 'react';
import './ParameterCard.css';

export type ParameterCardVariant = 'default' | 'graph';

export interface ParameterCardProps {
  label: string;
  value: string | number;
  unit?: string;
  variant?: ParameterCardVariant;
  trend?: 'up' | 'down' | 'neutral';
  trendLabel?: string;
  graph?: React.ReactNode;
  className?: string;
}

const TrendIcon: React.FC<{ direction: 'up' | 'down' | 'neutral' }> = ({ direction }) => {
  if (direction === 'up') {
    return (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M7 11V3M7 3l-3.5 3.5M7 3l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (direction === 'down') {
    return (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M7 3v8M7 11l-3.5-3.5M7 11l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return null;
};

export const ParameterCard: React.FC<ParameterCardProps> = ({
  label,
  value,
  unit,
  variant = 'default',
  trend,
  trendLabel,
  graph,
  className = '',
}) => {
  const trendClass =
    trend === 'up'
      ? 'atlas-parameter-card__trend--up'
      : trend === 'down'
        ? 'atlas-parameter-card__trend--down'
        : '';

  return (
    <div className={`atlas-parameter-card atlas-parameter-card--${variant} ${className}`}>
      <div className="atlas-parameter-card__header">
        <span className="atlas-parameter-card__label">{label}</span>
        {trend && trendLabel && (
          <span className={`atlas-parameter-card__trend ${trendClass}`}>
            <TrendIcon direction={trend} />
            {trendLabel}
          </span>
        )}
      </div>
      <div className="atlas-parameter-card__body">
        <div className="atlas-parameter-card__value-group">
          <span className="atlas-parameter-card__value">{value}</span>
          {unit && <span className="atlas-parameter-card__unit">{unit}</span>}
        </div>
        {variant === 'graph' && graph && (
          <div className="atlas-parameter-card__graph">{graph}</div>
        )}
      </div>
    </div>
  );
};
