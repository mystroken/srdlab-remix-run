import type { ReactNode } from "react";
import FooterComponent from "~/components/footer";

interface DefaultLayoutProps extends React.AllHTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

export const DefaultLayout = ({ children, className, ...props }: DefaultLayoutProps) => {

    return (
        <>
            {children}
            <FooterComponent />
        </>
    )
}