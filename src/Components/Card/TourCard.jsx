import Image from "next/image";
import Button from "../Button/Button";
import Icons from "../Icons/Icons";
import styles from "./TourCard.module.scss";

/** Tour / activity card – the Figma "Weekend experiences" card. Whole card is clickable. */
export default function TourCard({ tour, className = "" }) {
    return (
        <div className={`${styles.tour_card} ${className}`}>
            <Image
                src={tour.image}
                alt={tour.imageAlt || tour.title}
                fill
                sizes="(max-width: 768px) 100vw, 550px"
                className={styles.tour_image}
            />
            <span className={styles.image_overlay}></span>

            <div className={styles.tour_content}>
                <div className={styles.tour_info}>
                    <h3 className={`font_heading fw_400 heading_3 ${styles.tour_title}`}>
                        {tour.cardTitle}
                    </h3>
                    <span className={`font_mono fw_500 body_2 ${styles.tour_tag}`}>{tour.tags}</span>
                </div>

                <Button
                    href={`/tours/${tour.slug}`}
                    variant="white_outline"
                    className={styles.discover}
                    icon={<Icons name="arrowTopRight" size={20} />}
                    iconPosition="right"
                >
                    Discover<span className="visually_hidden"> {tour.cardTitle}</span>
                </Button>
            </div>
        </div>
    );
}
