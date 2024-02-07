import React from 'react'

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

export const NavButton: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};
