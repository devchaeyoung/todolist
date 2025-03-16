import { ButtonHTMLAttributes, Children } from "react";

type ButtonProps = {
    child: string;
    theme :string;
    props: ButtonHTMLAttributes<HTMLButtonElement>
}

export default function Button ({child, theme, ...props}:ButtonProps) {
    const className = `todos-button ${theme}`
    return (
        <button className={className} {...props}>{child}</button>
    )
}