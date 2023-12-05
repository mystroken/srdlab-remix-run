import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  click?: () => void;
}

const Button: React.FC<ButtonProps> = ({ name, click, ...props }) => (
  <button
    aria-label="search"
    className="bg-orange rounded-full text-[.9rem] text-primary px-[30px] py-[10px] md:py-[16px] md:px-[48px] w-full font-semibold"
    onClick={click}
    {...props}
  >
    {name}
  </button>
);

export default Button;
