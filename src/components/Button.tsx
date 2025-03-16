type ButtonProps = {
    id: string;
    child: string;
    theme :string;
    onClick: () => void;
}

export default function Button ({child, theme, onClick, ...props}:ButtonProps) {
    const className = `todos-button ${theme}`
    return (
        <button className={className}>{child}</button>
    )
}