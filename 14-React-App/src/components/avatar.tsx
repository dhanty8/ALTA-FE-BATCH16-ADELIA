import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  onClick?: () => void;
}

const Avatar = (props: AvatarProps) => {
  const { src, alt, onClick } = props
  return (
    <div className="relative">
      <button className="flex items-center focus:outline-none" onClick={onClick}>
        <img
          src={src}
          alt={alt}
          className="w-8 h-8 rounded-full object-cover"
        />
      </button>
    </div>
  );
};

export default Avatar;
