import { ChevronRight } from "lucide-react";
import { ReactNode } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  buttonStyle?: "light" | "primary" | "secondary" | "danger" | "outline";
  className?: string;
  showArrow?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "rounded-xs" | "rounded-sm" | "rounded-md" | "rounded-lg";
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ type = "button", buttonStyle, className, children, size, showArrow, onClick, disabled }: ButtonProps) => {
  const buttonStyles = {
    light: "bg-foreground hover:bg-primary text-card font-semibold transition-colors duration-300",
    primary: "bg-card hover:bg-card/80 text-foreground font-semibold transition-colors duration-300",
    secondary: "bg-foreground text-card hover:bg-foreground/80",
    danger: "bg-destructive hover:bg-destructive/80",
    outline: "border border-gray-600 text-white hover:bg-card/80 transition-colors duration-300",
  };

  const sizes = {
    xs: "px-2 py-1 text-xs",
    sm: "px-4 py-1 text-sm",
    md: "lg:px-6 lg:py-4 px-4 py-2 text-sm",
    lg: "px-8 py-5 text-base lg:text-lg lg:px-6 lg:py-4",
    "rounded-xs": "p-1 text-xs",
    "rounded-sm": "p-2 text-sm",
    "rounded-md": "p-4 text-base",
    "rounded-lg": "p-5 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-full flex items-center group cursor-pointer gap-4 text-nowrap font-primary ${
        buttonStyle ? buttonStyles[buttonStyle] : buttonStyles.primary
      } 
      ${size ? sizes[size] : sizes.md}
      ${className}`}
      disabled={disabled}
    >
      {children}
      {showArrow && <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </button>
  );
};

export default Button;
