import clsx from "clsx";
import styles from "./Button.module.scss";

export default function Button({
  children,
  variant = "primary",
  href,
  target,
  onClick,
  className,
  icon,
  iconPosition = "right",
}) {
  const buttonClass = clsx(
    styles.btn,
    styles[variant],
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className={styles.icon}>
          {icon}
        </span>
      )}

      <span className={styles.label}>
        {children}
      </span>

      {icon && iconPosition === "right" && (
        <span className={styles.icon}>
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target || ""}
        className={buttonClass}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={buttonClass}
    >
      {content}
    </button>
  );
}