/* eslint-disable no-constant-condition */
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactElement, ReactNode } from "react";

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  type: "button" | "submit";
  children: ReactNode;
  styles?: string;
  status: "primary" | "ghost";
  icon?: ReactElement;
}

export const Button = ({ type, children, styles, status, icon, ...props }: ButtonProps): JSX.Element => {
  const currentStyle =
    "w-[148px] h-9 text-sm p-[10px] mx-auto rounded-[5px] border-[1px] border-solid leading-[1] " +
    (status === "primary"
      ? "bg-primary text-white border-white hover:bg-primaryhover "
      : "bg-white text-main border-bordergrey hover:bg-primary hover:text-white ") +
    (icon && "flex gap-x-[10px] ") +
    (styles || "");

  return (
    <button type={type} className={currentStyle} {...props}>
      {children}
      {icon}
    </button>
  );
};
