import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button';
import { Tag } from '../Tag';

const darkWrapper = (Story: React.ComponentType) => (
  <div style={{ background: 'var(--atlas-background-primary)', padding: '32px', display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'flex-start' }}>
    <Story />
  </div>
);

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  decorators: [darkWrapper],
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: 'Card content goes here.',
  },
  render: (args) => <Card {...args} style={{ width: '280px' } as React.CSSProperties} />,
};

export const WithHeader: Story = {
  render: () => (
    <Card header="Card Title" style={{ width: '320px' } as React.CSSProperties}>
      <p style={{ fontFamily: 'var(--font-manrope), Manrope, sans-serif', fontSize: 'var(--atlas-font-size-md)', color: 'var(--atlas-text-secondary)', margin: 0 }}>
        This card has a header section that separates it from the body content.
      </p>
    </Card>
  ),
};

export const WithHeaderAndFooter: Story = {
  render: () => (
    <Card
      header="Confirm Action"
      footer={
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
          <Button variant="secondary" buttonType="outlined" size="sm">Cancel</Button>
          <Button variant="primary" buttonType="filled" size="sm">Confirm</Button>
        </div>
      }
      style={{ width: '360px' } as React.CSSProperties}
    >
      <p style={{ fontFamily: 'var(--font-manrope), Manrope, sans-serif', fontSize: 'var(--atlas-font-size-md)', color: 'var(--atlas-text-secondary)', margin: 0 }}>
        Are you sure you want to continue? This action cannot be undone.
      </p>
    </Card>
  ),
};

export const WithTags: Story = {
  render: () => (
    <Card header="Recent Activity" style={{ width: '320px' } as React.CSSProperties}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {[
          { label: 'Deploy succeeded', tag: { variant: 'green' as const, text: 'Success' } },
          { label: 'Tests failed on branch', tag: { variant: 'red' as const, text: 'Error' } },
          { label: 'PR review requested', tag: { variant: 'blue' as const, text: 'Pending' } },
        ].map((item) => (
          <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-manrope), Manrope, sans-serif', fontSize: 'var(--atlas-font-size-sm)', color: 'var(--atlas-text-primary)' }}>
              {item.label}
            </span>
            <Tag variant={item.tag.variant}>{item.tag.text}</Tag>
          </div>
        ))}
      </div>
    </Card>
  ),
};
