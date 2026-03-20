import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'destructive', 'success'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    buttonType: {
      control: 'select',
      options: ['filled', 'outlined'],
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

const darkWrapper = (children: React.ReactNode) => (
  <div
    data-theme="dark"
    style={{
      background: 'var(--atlas-background-primary)',
      padding: '24px',
      borderRadius: '8px',
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap',
      alignItems: 'center',
    }}
  >
    {children}
  </div>
);

export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    buttonType: 'filled',
    children: 'Placeholder',
  },
  decorators: [(Story) => darkWrapper(<Story />)],
};

export const FilledVariants: Story = {
  render: () =>
    darkWrapper(
      <>
        <Button variant="primary" buttonType="filled">Primary</Button>
        <Button variant="secondary" buttonType="filled">Secondary</Button>
        <Button variant="destructive" buttonType="filled">Destructive</Button>
        <Button variant="success" buttonType="filled">Success</Button>
      </>,
    ),
};

export const OutlinedVariants: Story = {
  render: () =>
    darkWrapper(
      <>
        <Button variant="primary" buttonType="outlined">Primary</Button>
        <Button variant="secondary" buttonType="outlined">Secondary</Button>
        <Button variant="destructive" buttonType="outlined">Destructive</Button>
        <Button variant="success" buttonType="outlined">Success</Button>
      </>,
    ),
};

export const Sizes: Story = {
  render: () =>
    darkWrapper(
      <>
        <Button size="sm">Small</Button>
        <Button size="md">Default</Button>
        <Button size="lg">Large</Button>
      </>,
    ),
};

export const States: Story = {
  render: () =>
    darkWrapper(
      <>
        <Button variant="primary">Active</Button>
        <Button variant="primary" disabled>Disabled</Button>
        <Button variant="primary" buttonType="outlined">Outlined Active</Button>
        <Button variant="primary" buttonType="outlined" disabled>Outlined Disabled</Button>
      </>,
    ),
};

export const LightMode: Story = {
  render: () => (
    <div
      style={{
        background: 'var(--atlas-background-primary)',
        padding: '24px',
        borderRadius: '8px',
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
    >
      <Button variant="primary" buttonType="filled">Primary</Button>
      <Button variant="secondary" buttonType="filled">Secondary</Button>
      <Button variant="primary" buttonType="outlined">Outlined</Button>
    </div>
  ),
};
