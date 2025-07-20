

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  error?: string;
  className?: string;
  inputClassName?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  error,
  className = "",
  inputClassName = "",
  ...rest
}) => {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {label && (
        <label htmlFor={name} className="text-sm font-medium">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        className={`border rounded-md p-3 text-sm focus:outline-double focus:outline-yellow-700 focus:ring-0 focus:outline-offset-2 autofill:bg-yellow-200 ${inputClassName}`}
        {...rest}
      />
      {error && <p className="text-sm">{error}</p>}
    </div>
  );
};

export default InputField;
