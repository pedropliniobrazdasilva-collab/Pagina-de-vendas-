import React from 'react';
import { CHECKOUT_URL } from '../constants';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  text: string;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ text, className = "", variant = 'primary' }) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-emerald-600 hover:bg-emerald-500 text-white focus:ring-emerald-600 shadow-lg shadow-emerald-600/30",
    secondary: "bg-slate-900 hover:bg-slate-800 text-white focus:ring-slate-900 shadow-lg shadow-slate-900/30"
  };

  return (
    <a 
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {text}
      <ArrowRight className="w-5 h-5" />
    </a>
  );
};

export default Button;