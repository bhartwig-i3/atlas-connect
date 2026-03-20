import type { Meta, StoryObj } from '@storybook/react';
import { SegmentedControl } from './SegmentedControl';

const darkWrapper = (Story: React.ComponentType) => (
  <div style={{ background: 'var(--atlas-background-primary)', padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
    <Story />
  </div>
);

const meta: Meta<typeof SegmentedControl> = {
  title: 'Components/SegmentedControl',
  component: SegmentedControl,
  decorators: [darkWrapper],
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof SegmentedControl>;

export const TwoOptions: Story = {
  args: {
    name: 'two',
    options: [
      { value: 'list', label: 'List' },
      { value: 'grid', label: 'Grid' },
    ],
  },
};

export const ThreeOptions: Story = {
  args: {
    name: 'three',
    options: [
      { value: 'day', label: 'Day' },
      { value: 'week', label: 'Week' },
      { value: 'month', label: 'Month' },
    ],
    defaultValue: 'week',
  },
};

export const FourOptions: Story = {
  args: {
    name: 'four',
    options: [
      { value: '1h', label: '1H' },
      { value: '6h', label: '6H' },
      { value: '24h', label: '24H' },
      { value: '7d', label: '7D' },
    ],
    defaultValue: '24h',
  },
};

export const WithDisabledOption: Story = {
  args: {
    name: 'disabled',
    options: [
      { value: 'a', label: 'Option A' },
      { value: 'b', label: 'Option B' },
      { value: 'c', label: 'Option C', disabled: true },
    ],
  },
};
