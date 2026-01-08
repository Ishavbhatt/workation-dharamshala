import styles from './Button.module.scss'
import clsx from 'clsx'

export default function Button({
    children,
    variant = 'primary',
    href,
    onClick,
    className,
}) {
    const buttonClass = clsx(
        styles.btn,
        styles[variant],
        className
    )

    console.log(children, 'children');
    

    if (href) {
        return (
            <a href={href} className={buttonClass}>
                <span>{children}</span>
            </a>
        )
    }

    return (
        <button onClick={onClick} className={buttonClass}>
            <span>{children}</span>
        </button>
    )
}
