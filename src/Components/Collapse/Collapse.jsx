import styles from "./Collapse.module.scss";

/**
 * Smoothly opens / closes its content (no height measuring needed).
 * Content always stays in the HTML, so search engines can read closed answers too.
 */
export default function Collapse({ open, id, children }) {
    return (
        <div id={id} className={`${styles.collapse} ${open ? styles.open : ""}`} aria-hidden={!open}>
            <div className={styles.inner}>{children}</div>
        </div>
    );
}

/** "+" that rotates into "×" when open. */
export function ToggleIcon({ open, children }) {
    return <span className={`${styles.toggle} ${open ? styles.toggle_open : ""}`}>{children}</span>;
}
