import type { Meta, StoryObj } from '@storybook/react';
import { ParameterCard } from './ParameterCard';

const darkWrapper = (Story: React.ComponentType) => (
  <div style={{ background: 'var(--atlas-background-primary)', padding: '32px', display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'flex-start' }}>
    <Story />
  </div>
);

const SparklineGraph = () => (
  <svg width="100%" height="60" viewBox="0 0 200 60" preserveAspectRatio="none" fill="none">
    <defs>
      <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F5A336" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#F5A336" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path d="M0 45 L25 38 L50 42 L75 30 L100 35 L125 20 L150 25 L175 15 L200 10" stroke="#F5A336" strokeWidth="2" fill="none" />
    <path d="M0 45 L25 38 L50 42 L75 30 L100 35 L125 20 L150 25 L175 15 L200 10 L200 60 L0 60 Z" fill="url(#sparkGrad)" />
  </svg>
);

const meta: Meta<typeof ParameterCard> = {
  title: 'Components/ParameterCard',
  component: ParameterCard,
  decorators: [darkWrapper],
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ParameterCard>;

export const Default: Story = {
  args: {
    label: 'Total Users',
    value: '2,847',
    unit: 'users',
  },
};

export const WithTrendUp: Story = {
  args: {
    label: 'Revenue',
    value: '84.2',
    unit: 'K',
    trend: 'up',
    trendLabel: '+12.4%',
  },
};

export const WithTrendDown: Story = {
  args: {
    label: 'Churn Rate',
    value: '3.2',
    unit: '%',
    trend: 'down',
    trendLabel: '-0.8%',
  },
};

export const GraphVariant: Story = {
  args: {
    label: 'Active Sessions',
    value: '1,204',
    unit: 'sessions',
    variant: 'graph',
    trend: 'up',
    trendLabel: '+5.1%',
    graph: <SparklineGraph />,
  },
};

export const Dashboard: Story = {
  render: () => (
    <>
      <ParameterCard label="Total Users" value="2,847" unit="users" trend="up" trendLabel="+8.3%" />
      <ParameterCard label="Revenue" value="84.2" unit="K" trend="up" trendLabel="+12.4%" />
      <ParameterCard label="Churn Rate" value="3.2" unit="%" trend="down" trendLabel="-0.8%" />
      <ParameterCard
        label="Active Sessions"
        value="1,204"
        unit="sessions"
        variant="graph"
        trend="up"
        trendLabel="+5.1%"
        graph={<SparklineGraph />}
      />
    </>
  ),
};
