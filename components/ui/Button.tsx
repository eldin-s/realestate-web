import { ChevronRight } from "lucide-react";
import { ReactNode } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  buttonStyle?: "light" | "primary" | "secondary" | "danger";
  className?: string;
  showArrow?: boolean;
  children: ReactNode;
}

const Button = ({ type = "button", buttonStyle, className, children, showArrow }: ButtonProps) => {
  const buttonStyles = {
    light: "bg-foreground hover:bg-primary text-card font-semibold transition-colors duration-300",
    primary: "bg-card hover:bg-card/80 text-foreground font-semibold transition-colors duration-300",
    secondary: "bg-foreground hover:bg-foreground/80",
    danger: "bg-destructive hover:bg-destructive/80",
  };

  return (
    <button
      type={type}
      className={`rounded-full lg:px-6 px-4 lg:py-4 py-2 text-sm lg:text-base flex items-center group cursor-pointer gap-4 ${
        buttonStyle ? buttonStyles[buttonStyle] : buttonStyles.primary
      } ${className}`}
    >
      {children}
      {showArrow && <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </button>
  );
};

export default Button;
