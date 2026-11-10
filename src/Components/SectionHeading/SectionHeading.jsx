import styles from "./SectionHeading.module.scss";

export default function SectionHeading({
    label,
    title,
    description,
    className = "",
    as: Tag = "h2",
    titleSize = "title_2",
}) {
    return (
        <div className={`${styles.section_heading} ${className}`}>
            <div className={styles.sub_heading_wrapper}>

                <span className={`font_mono fw_500 body_2 ${styles.sub_heading}`}>
                    {label}
                </span>

                <span className={styles.line}></span>

            </div>

            <Tag className={`font_heading fw_400 ${titleSize} ${styles.title}`}>
                {title}
            </Tag>

            {description && <p className={`font_body fw_400 heading_5 ${styles.description}`}>{description}</p>}
        </div>
    );
}