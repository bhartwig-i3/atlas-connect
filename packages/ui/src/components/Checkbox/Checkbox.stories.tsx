import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const darkWrapper = (Story: React.ComponentType) => (
  <div style={{ background: 'var(--atlas-background-primary)', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Story />
  </div>
);

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  decorators: [darkWrapper],
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: { label: 'Accept terms and conditions' },
};

export const Checked: Story = {
  args: { label: 'Enabled option', defaultChecked: true },
};

export const Indeterminate: Story = {
  args: { label: 'Select all', indeterminate: true },
};

export const Disabled: Story = {
  args: { label: 'Disabled option', disabled: true },
};

export const DisabledChecked: Story = {
  args: { label: 'Disabled checked', disabled: true, defaultChecked: true },
};

export const ErrorState: Story = {
  args: { label: 'You must accept the terms', state: 'error' },
};

export const AllStates: Story = {
  render: () => (
    <>
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
      <Checkbox label="Error" state="error" />
    </>
  ),
};
