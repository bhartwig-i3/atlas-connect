import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';

const darkWrapper = (Story: React.ComponentType) => (
  <div style={{ background: 'var(--atlas-background-primary)', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Story />
  </div>
);

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  decorators: [darkWrapper],
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Toggle>;

export const Off: Story = {
  args: { label: 'Enable notifications' },
};

export const On: Story = {
  args: { label: 'Enable notifications', defaultChecked: true },
};

export const Disabled: Story = {
  args: { label: 'Disabled toggle', disabled: true },
};

export const DisabledOn: Story = {
  args: { label: 'Locked on', disabled: true, defaultChecked: true },
};

export const AllStates: Story = {
  render: () => (
    <>
      <Toggle label="Off" />
      <Toggle label="On" defaultChecked />
      <Toggle label="Disabled off" disabled />
      <Toggle label="Disabled on" disabled defaultChecked />
    </>
  ),
};
