import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';
import type { TagVariant } from './Tag';

const darkWrapper = (Story: React.ComponentType) => (
  <div style={{ background: 'var(--atlas-background-primary)', padding: '32px', display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
    <Story />
  </div>
);

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  decorators: [darkWrapper],
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: { children: 'Label', variant: 'gray' },
};

const variants: TagVariant[] = ['gray', 'blue', 'purple', 'red', 'green', 'yellow', 'brand', 'orange'];

export const AllVariants: Story = {
  render: () => (
    <>
      {variants.map((v) => (
        <Tag key={v} variant={v}>{v}</Tag>
      ))}
    </>
  ),
};

export const WithRemove: Story = {
  render: () => (
    <>
      {variants.map((v) => (
        <Tag key={v} variant={v} onRemove={() => alert(`Removed ${v}`)}>{v}</Tag>
      ))}
    </>
  ),
};
