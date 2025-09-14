import React from 'react';
import { motion } from 'framer-motion';

interface SelectProps {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
  className?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({ 
  label, 
  error, 
  options, 
  className = '',
  name,
  value,
  onChange
}, ref) => {
  const selectClasses = `
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
      <motion.select
        ref={ref}
        className={selectClasses}
        name={name}
        value={value}
        onChange={onChange}
        whileFocus={{ scale: 1.01 }}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </motion.select>
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

Select.displayName = 'Select';

export default Select;