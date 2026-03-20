import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const darkWrapper = (Story: React.ComponentType) => (
  <div style={{ background: 'var(--atlas-background-primary)', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '320px' }}>
    <Story />
  </div>
);

const regionOptions = [
  { value: 'us-east', label: 'US East (N. Virginia)' },
  { value: 'us-west', label: 'US West (Oregon)' },
  { value: 'eu-west', label: 'EU West (Ireland)' },
  { value: 'ap-south', label: 'AP South (Singapore)' },
];

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  decorators: [darkWrapper],
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: 'Region',
    options: regionOptions,
    placeholder: 'Select a region',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Region',
    options: regionOptions,
    defaultValue: 'us-east',
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Region',
    options: regionOptions,
    placeholder: 'Select a region',
    error: true,
    hint: 'Please select a region to continue.',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Region',
    options: regionOptions,
    defaultValue: 'us-east',
    disabled: true,
  },
};

export const AllFormControls: Story = {
  render: () => (
    <>
      <Select label="Environment" options={[{ value: 'prod', label: 'Production' }, { value: 'staging', label: 'Staging' }, { value: 'dev', label: 'Development' }]} defaultValue="prod" />
      <Select label="Region" options={regionOptions} placeholder="Select a region" />
      <Select label="Disabled" options={regionOptions} defaultValue="us-east" disabled />
    </>
  ),
};
