import styles from "./FormField.module.scss";

/**
 * Labelled form control matching the Figma sticker sheet (Input Fields).
 * Wrap any <input>, <select> or <textarea>:
 *
 * <FormField label="Full name" required>
 *   <input name="name" />
 * </FormField>
 */
export default function FormField({ label, required = false, className = "", children }) {
    return (
        <label className={`${styles.field} ${className}`}>
            {label && (
                <span className={`font_body fw_500 body_1 ${styles.label}`}>
                    {label}
                    {required && <span className={styles.required}> *</span>}
                </span>
            )}
            {children}
        </label>
    );
}
