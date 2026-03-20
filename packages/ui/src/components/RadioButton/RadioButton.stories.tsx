import type { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from './RadioButton';

const darkWrapper = (Story: React.ComponentType) => (
  <div style={{ background: 'var(--atlas-background-primary)', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Story />
  </div>
);

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  decorators: [darkWrapper],
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: { label: 'Option A', name: 'demo' },
};

export const Selected: Story = {
  args: { label: 'Option A', name: 'demo2', defaultChecked: true },
};

export const Disabled: Story = {
  args: { label: 'Unavailable option', disabled: true },
};

export const ErrorState: Story = {
  args: { label: 'Required selection', state: 'error' },
};

export const Group: Story = {
  render: () => (
    <>
      <RadioButton label="Option A" name="group" defaultChecked />
      <RadioButton label="Option B" name="group" />
      <RadioButton label="Option C" name="group" />
      <RadioButton label="Disabled" name="group" disabled />
      <RadioButton label="Error state" name="group" state="error" />
    </>
  ),
};
