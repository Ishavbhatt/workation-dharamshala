import Image from "next/image";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./BestAreas.module.scss";

const areas = [
    {
        name: "McLeodganj",
        bestFor: "Community, cafés, first-time visitors, social atmosphere",
        image: "/images/tours/dharamshala-sightseeing.webp",
    },
    {
        name: "Dharamkot",
        bestFor: "Quiet focus, yoga, forest walks, creative long stays",
        image: "/images/dharamshala-view.jpeg",
    },
    {
        name: "Bhagsu",
        bestFor: "Cafés, waterfall walks, easy access to McLeodganj",
        image: "/images/areas/bhagsu.webp",
    },
    {
        name: "Naddi",
        bestFor: "Peaceful village life, sunsets, uninterrupted mountain views",
        image: "/images/areas/naddi.webp",
    },
];

export default function BestAreas() {
    return (
        <section className={styles.best_areas_section}>
            <div className="container">
                <SectionHeading
                    label="BEST AREAS"
                    title="Best areas for workation in Dharamshala"
                    description="Dharamshala offers different experiences depending on how you like to work and live. From lively café culture to peaceful mountain villages, each area has its own atmosphere for remote workers and long-stay travelers."
                    className={styles.heading}
                />

                <div className={styles.areas_grid}>
                    {areas.map((area) => (
                        <div className={styles.area_card} key={area.name}>
                            <Image
                                src={area.image}
                                alt={`${area.name}, Dharamshala`}
                                fill
                                sizes="(max-width: 768px) 70vw, 270px"
                                className={styles.area_image}
                            />
                            <span className={styles.image_overlay}></span>

                            <div className={styles.area_content}>
                                <h3 className={`font_heading fw_400 heading_3`}>
                                    {area.name}
                                </h3>
                                <p className={`font_body fw_400 body_1`}>
                                    <strong className="fw_700">Best for:</strong> {area.bestFor}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.recommended}>
                    <h3 className={`font_heading fw_400 heading_3`}>Recommended Area:</h3>
                    <p className={`font_body fw_400 heading_5`}>
                        For first-time remote workers, McLeodganj and Dharamkot usually offer the
                        best balance of community, cafés, work-friendly spaces, and peaceful living.
                    </p>
                </div>

                <div className={styles.infra_card}>
                    <SectionHeading
                        label="WORK INFRASTRUCTURE"
                        title="Internet & remote work infrastructure"
                        className={styles.infra_heading}
                    />
                    <p className={`font_body fw_400 heading_5`}>
                        Dharamshala offers the right balance between peaceful mountain living and
                        reliable remote work infrastructure. Most workation-friendly stays provide
                        stable WiFi, dedicated workspaces, and power backup suitable for meetings
                        and daily remote work.
                        <br />
                        The town also has a growing culture of co-working spaces, work-friendly
                        cafés, and strong mobile connectivity, making long stays comfortable for
                        remote professionals, freelancers, and digital nomads.
                    </p>
                </div>
            </div>
        </section>
    );
}
