import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

const darkWrapper = (Story: React.ComponentType) => (
  <div style={{ background: 'var(--atlas-background-primary)', padding: '32px', display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
    <Story />
  </div>
);

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  decorators: [darkWrapper],
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: { size: 'md', variant: 'brand' },
};

export const Sizes: Story = {
  render: () => (
    <>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </>
  ),
};

export const Variants: Story = {
  render: () => (
    <>
      <Spinner variant="brand" />
      <Spinner variant="muted" />
      <div style={{ background: 'var(--atlas-surface-brand)', padding: '8px', borderRadius: '8px' }}>
        <Spinner variant="white" />
      </div>
    </>
  ),
};
