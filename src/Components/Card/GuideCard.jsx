import Image from "next/image";
import Link from "next/link";
import { formatBlogDate } from "@/lib/blogs";
import styles from "./GuideCard.module.scss";

/** Image card for a blog / guide, as in the Figma "travel guides" section. */
export default function GuideCard({ title, slug, image, date, className = "" }) {
    const formattedDate = formatBlogDate(date);

    return (
        <Link href={`/blogs/${slug}`} className={`${styles.guide_card} ${className}`}>
            <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 80vw, 360px"
                className={styles.guide_image}
            />
            <span className={styles.image_overlay}></span>

            {formattedDate && (
                <span className={`font_mono fw_500 ${styles.guide_date}`}>{formattedDate}</span>
            )}

            <h3 className={`font_heading fw_400 heading_4 ${styles.guide_title}`}>{title}</h3>
        </Link>
    );
}
