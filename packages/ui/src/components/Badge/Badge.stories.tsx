import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const darkWrapper = (Story: React.ComponentType) => (
  <div style={{ background: 'var(--atlas-background-primary)', padding: '32px', display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
    <Story />
  </div>
);

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  decorators: [darkWrapper],
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: { count: 3 },
};

export const AllVariants: Story = {
  render: () => (
    <>
      <Badge variant="brand" count={3} />
      <Badge variant="gray" count={12} />
      <Badge variant="error" count={99} />
      <Badge variant="success" count={7} />
      <Badge variant="warning" count={1} />
    </>
  ),
};

export const Overflow: Story = {
  render: () => (
    <>
      <Badge variant="brand" count={100} max={99} />
      <Badge variant="error" count={999} max={99} />
    </>
  ),
};

export const Dots: Story = {
  render: () => (
    <>
      <Badge dot variant="brand" />
      <Badge dot variant="error" />
      <Badge dot variant="success" />
      <Badge dot variant="warning" />
    </>
  ),
};

export const Sizes: Story = {
  render: () => (
    <>
      <Badge size="sm" variant="brand" count={5} />
      <Badge size="md" variant="brand" count={5} />
    </>
  ),
};
