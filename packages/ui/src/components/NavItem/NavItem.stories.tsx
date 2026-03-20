import type { Meta, StoryObj } from '@storybook/react';
import { NavItem } from './NavItem';

const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M3 8.5L10 2l7 6.5V17a1 1 0 01-1 1H4a1 1 0 01-1-1V8.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M7 18v-6h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const ChartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M3 14l4-5 4 3 4-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 17h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const UsersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="8" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M2 17c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M14 5a3 3 0 010 6M18 17c0-2.5-1.5-4.5-4-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const darkWrapper = (Story: React.ComponentType) => (
  <div style={{ background: 'var(--atlas-background-primary)', padding: '16px', width: '240px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
    <Story />
  </div>
);

const meta: Meta<typeof NavItem> = {
  title: 'Components/NavItem',
  component: NavItem,
  decorators: [darkWrapper],
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof NavItem>;

export const Default: Story = {
  args: { label: 'Dashboard', icon: <HomeIcon /> },
};

export const Active: Story = {
  args: { label: 'Dashboard', icon: <HomeIcon />, active: true },
};

export const WithBadge: Story = {
  args: { label: 'Notifications', icon: <ChartIcon />, badge: 5 },
};

export const Sidebar: Story = {
  render: () => (
    <>
      <NavItem label="Dashboard" icon={<HomeIcon />} active />
      <NavItem label="Analytics" icon={<ChartIcon />} />
      <NavItem label="Users" icon={<UsersIcon />} badge={12} />
      <NavItem label="Settings" icon={<SettingsIcon />} />
    </>
  ),
};

export const CollapsedSidebar: Story = {
  render: () => (
    <div style={{ width: '56px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
      <NavItem label="Dashboard" icon={<HomeIcon />} collapsed active />
      <NavItem label="Analytics" icon={<ChartIcon />} collapsed />
      <NavItem label="Users" icon={<UsersIcon />} collapsed badge={12} />
      <NavItem label="Settings" icon={<SettingsIcon />} collapsed />
    </div>
  ),
};
