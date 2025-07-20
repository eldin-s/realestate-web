import React from 'react'

interface SelectOption {
  value: string;
  label: string;
}

interface CustomSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  name: string;
  error?: string;
  className?: string;
  selectClassName?: string;
  options: SelectOption[];
  placeholder?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  name,
  error,
  className = "",
  selectClassName = "",
  options,
  placeholder = "Select an option",
  ...rest
}) => {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {label && (
        <label htmlFor={name} className="text-sm font-medium">
          {label}
        </label>
      )}
      <select
        id={name}
        name={name}
        className={`border rounded-md p-3 text-sm focus:outline-double focus:outline-yellow-700 focus:ring-0 focus:outline-offset-2 bg-white ${selectClassName}`}
        {...rest}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value} className='bg-background'>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-sm">{error}</p>}
    </div>
  );
};

export default CustomSelect