import React from 'react';
import './NavItem.css';
import { Badge } from '../Badge';

export interface NavItemProps {
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
  badge?: number | string;
  href?: string;
  onClick?: () => void;
  collapsed?: boolean;
  className?: string;
}

export const NavItem: React.FC<NavItemProps> = ({
  label,
  icon,
  active = false,
  badge,
  href,
  onClick,
  collapsed = false,
  className = '',
}) => {
  const Tag = href ? 'a' : 'button';
  const itemClass = [
    'atlas-nav-item',
    active ? 'atlas-nav-item--active' : '',
    collapsed ? 'atlas-nav-item--collapsed' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag
      className={itemClass}
      href={href}
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
      title={collapsed ? label : undefined}
      type={href ? undefined : 'button'}
    >
      {icon && <span className="atlas-nav-item__icon" aria-hidden="true">{icon}</span>}
      {!collapsed && <span className="atlas-nav-item__label">{label}</span>}
      {!collapsed && badge !== undefined && (
        <Badge variant="brand" size="sm" count={typeof badge === 'number' ? badge : undefined}>
          {typeof badge === 'string' ? badge : undefined}
        </Badge>
      )}
      {collapsed && badge !== undefined && (
        <span className="atlas-nav-item__dot">
          <Badge variant="brand" dot />
        </span>
      )}
    </Tag>
  );
};
