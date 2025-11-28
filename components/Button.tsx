import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex justify-center items-center px-6 py-3 border text-base font-medium rounded-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200";
  
  const variants = {
    primary: "border-transparent shadow-sm text-white bg-brand-600 hover:bg-brand-700 focus:ring-brand-500",
    secondary: "border-transparent text-brand-700 bg-brand-100 hover:bg-brand-200 focus:ring-brand-500",
    outline: "border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-brand-500",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};