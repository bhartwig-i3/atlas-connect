import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const darkWrapper = (Story: React.ComponentType) => (
  <div style={{ background: 'var(--atlas-background-primary)', padding: '32px', display: 'flex', gap: '16px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
    <Story />
  </div>
);

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  decorators: [darkWrapper],
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithInitials: Story = {
  args: { initials: 'Ben Hartwig' },
};

export const Sizes: Story = {
  render: () => (
    <>
      <Avatar size="xs" initials="BH" />
      <Avatar size="sm" initials="BH" />
      <Avatar size="md" initials="BH" />
      <Avatar size="lg" initials="BH" />
      <Avatar size="xl" initials="BH" />
    </>
  ),
};

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=3',
    alt: 'User Avatar',
    size: 'md',
  },
};

export const ImageFallback: Story = {
  args: {
    src: 'https://broken-url.example/avatar.jpg',
    alt: 'Jane Doe',
    size: 'md',
  },
};
