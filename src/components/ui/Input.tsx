import React from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label?: string;
  error?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ 
  label, 
  error, 
  placeholder,
  type = 'text',
  className = '',
  name,
  value,
  onChange
}, ref) => {
  const inputClasses = `
    w-full px-4 py-3 rounded-lg border-2 transition-colors duration-300
    focus:outline-none focus:ring-2 focus:ring-forest-600 focus:border-transparent
    ${error ? 'border-red-300 focus:ring-red-500' : 'border-gray-200 focus:border-forest-600'}
    ${className}
  `.trim();
  
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <motion.input
        ref={ref}
        className={inputClasses}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        whileFocus={{ scale: 1.01 }}
      />
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm text-red-600"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;