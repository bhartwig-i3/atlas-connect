import React from 'react';
import './SegmentedControl.css';

export interface SegmentOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SegmentedControlProps {
  options: SegmentOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  name?: string;
  className?: string;
}

export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  options,
  value,
  defaultValue,
  onChange,
  name = 'segmented-control',
  className = '',
}) => {
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? options[0]?.value);
  const activeValue = value ?? internalValue;

  const handleChange = (optionValue: string) => {
    setInternalValue(optionValue);
    onChange?.(optionValue);
  };

  return (
    <div className={`atlas-segmented-control ${className}`} role="group">
      {options.map((option) => {
        const isActive = activeValue === option.value;
        return (
          <label
            key={option.value}
            className={[
              'atlas-segmented-option',
              isActive ? 'atlas-segmented-option--active' : '',
              option.disabled ? 'atlas-segmented-option--disabled' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={isActive}
              disabled={option.disabled}
              onChange={() => handleChange(option.value)}
              className="atlas-segmented-input"
            />
            {option.label}
          </label>
        );
      })}
    </div>
  );
};
