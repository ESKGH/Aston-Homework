import React, { type ForwardedRef, type ButtonHTMLAttributes } from 'react';
import styles from './button.module.css'; 


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode; 
  className?: string; 
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = '', ...props }, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <button ref={ref} className={`${styles.btn} ${className}`} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;