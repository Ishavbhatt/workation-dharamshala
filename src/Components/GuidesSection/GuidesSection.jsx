import { getBlogs } from "@/lib/blogs";
import SectionHeading from "../SectionHeading/SectionHeading";
import GuideCard from "../Card/GuideCard";
import Button from "../Button/Button";
import Icons from "../Icons/Icons";
import styles from "./GuidesSection.module.scss";

export default function GuidesSection({
    label = "WORKATION & TRAVEL GUIDES",
    title = "Co-working, co-living & travel guides",
    limit = 3,
}) {
    const guides = getBlogs().slice(0, limit);

    return (
        <section className={styles.guides_section}>
            <div className="container">
                <SectionHeading label={label} title={title} />

                <div className={styles.guides_grid}>
                    {guides.map((guide) => (
                        <GuideCard
                            key={guide.slug}
                            title={guide.title}
                            slug={guide.slug}
                            image={guide.featuredImage}
                            date={guide.date}
                            className={styles.guide_card}
                        />
                    ))}
                </div>

                <div className={styles.guides_cta}>
                    <Button
                        href="/blogs"
                        variant="black"
                        icon={<Icons name="arrowTopRight" size={20} />}
                        iconPosition="right"
                    >
                        Discover more
                    </Button>
                </div>
            </div>
        </section>
    );
}
