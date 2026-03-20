import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const darkWrapper = (Story: React.ComponentType) => (
  <div style={{ background: 'var(--atlas-background-primary)', padding: '32px', minHeight: '100px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Story />
  </div>
);

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10.5 10.5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  decorators: [darkWrapper],
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { label: 'Label', placeholder: 'Placeholder text' },
};

export const WithPrefixIcon: Story = {
  args: { label: 'Search', placeholder: 'Search...', prefixIcon: <SearchIcon /> },
};

export const Filled: Story = {
  args: { label: 'Email', value: 'user@example.com', readOnly: true },
};

export const ErrorState: Story = {
  args: {
    label: 'Email',
    value: 'not-an-email',
    error: true,
    hint: 'Please enter a valid email address.',
  },
};

export const Disabled: Story = {
  args: { label: 'Disabled Field', placeholder: 'Not editable', disabled: true },
};

export const WithHint: Story = {
  args: { label: 'Password', type: 'password', placeholder: 'Enter password', hint: 'Must be at least 8 characters.' },
};
