import React from 'react';
import './Avatar.css';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: AvatarSize;
  className?: string;
}

const sizeMap: Record<AvatarSize, number> = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64,
};

function getInitials(text: string): string {
  return text
    .split(' ')
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = '',
  initials,
  size = 'md',
  className = '',
}) => {
  const [imgError, setImgError] = React.useState(false);
  const px = sizeMap[size];
  const displayInitials = initials ? getInitials(initials) : alt ? getInitials(alt) : '?';

  const showImage = src && !imgError;

  return (
    <div
      className={`atlas-avatar atlas-avatar--${size} ${className}`}
      style={{ width: px, height: px }}
      aria-label={alt || initials}
      role="img"
    >
      {showImage ? (
        <img
          src={src}
          alt={alt}
          className="atlas-avatar__image"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="atlas-avatar__initials">{displayInitials}</span>
      )}
    </div>
  );
};
