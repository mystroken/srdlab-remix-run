interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    name: string
    click?: () => Function
}

export const Button = ({ name, click, ...props }: ButtonProps) => {
    return <button className="bg-orange rounded-full text-[.9rem] text-primary px-[30px] py-[10px] md:py-[16px] md:px-[48px] w-full font-semibold">{name}</button>
} 