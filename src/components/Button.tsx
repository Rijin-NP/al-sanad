import React from 'react';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'solid', 
  size = 'md',
  className = '', 
  href,
  ...props 
}) => {
  const classes = `btn btn-${variant} btn-${size} ${className}`;
  
  if (href) {
    return (
      <a 
        href={href} 
        className={classes}
        {...(props as any)}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={classes} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
