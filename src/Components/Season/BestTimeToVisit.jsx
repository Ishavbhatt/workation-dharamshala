"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./BestTimeToVisit.module.scss";

const seasons = [
  {
    id: "spring",
    title: "Spring & summer",
    months: "March - June",
    icon: "☼",
    description: (
      <>
        <p>
          The most preferred time for workations in Dharamshala.
          Pleasant weather, clear mountain views, and comfortable
          temperatures make it ideal for remote work, café hopping, and
          weekend treks.
        </p>

        <p>
          This season is perfect for people looking to escape city heat
          while maintaining a productive routine in the mountains.
        </p>
      </>
    ),
  },
  {
    id: "monsoon",
    title: "Monsoon",
    months: "July - September",
    icon: "☁",
    description: (
      <p>
        Monsoon brings lush green landscapes, misty mountains, and a
        slower rhythm to Dharamshala. It is ideal for those who enjoy
        peaceful stays and working surrounded by nature.
      </p>
    ),
  },
  {
    id: "winter",
    title: "Autumn & winter",
    months: "October - February",
    icon: "☼",
    description: (
      <p>
        Autumn and winter offer crisp mountain air, beautiful views, and
        cooler temperatures. It is a great season for cosy workation
        stays, cafés, and exploring the surrounding mountains.
      </p>
    ),
  },
];

export default function BestTimeToVisit() {
  const [activeSeason, setActiveSeason] = useState("spring");

  const active = seasons.find(
    (season) => season.id === activeSeason
  );

  return (
    <section className={styles.best_time_section}>
      <div className="container">

        {/* Heading */}
        <div className={styles.best_time_heading}>

          <div className={styles.sub_heading_wrapper}>
            <span
              className={`font_mono fw_500 body_2 ${styles.sub_heading}`}
            >
              BEST TIME TO VISIT
            </span>

            <span className={styles.line}></span>
          </div>

          <h2
            className={`font_heading fw_400 title_2 ${styles.best_time_title}`}
          >
            Best time to visit Dharamshala
          </h2>

          <p
            className={`font_body fw_400 heading_5 ${styles.best_time_description}`}
          >
            Dharamshala is a year-round destination, but the experience
            changes beautifully with every season. Whether you’re planning
            a short workation or a long mountain stay, each season offers a
            different rhythm of living and working.
          </p>

        </div>

        {/* Content */}
        <div className={styles.best_time_grid}>

          {/* Seasons */}
          <div className={styles.seasons}>

            {seasons.map((season) => {
              const isActive = activeSeason === season.id;

              return (
                <div
                  key={season.id}
                  className={`${styles.season_item} ${
                    isActive ? styles.active : ""
                  }`}
                >

                  <button
                    type="button"
                    className={styles.season_header}
                    onClick={() => setActiveSeason(season.id)}
                    aria-expanded={isActive}
                  >

                    <div className={styles.season_name}>
                      <span className={styles.season_icon}>
                        {season.icon}
                      </span>

                      <span
                        className={`font_heading fw_400 heading_2 ${styles.season_title}`}
                      >
                        {season.title}
                      </span>
                    </div>

                    <span
                      className={`font_body fw_500 body_2 ${styles.months}`}
                    >
                      • {season.months}
                    </span>

                  </button>

                  {isActive && (
                    <div
                      className={`font_body fw_400 heading_5 ${styles.season_description}`}
                    >
                      {season.description}
                    </div>
                  )}

                </div>
              );
            })}

          </div>

          {/* Image */}
          <div className={styles.image_wrapper}>
            <Image
              src="/images/workation-dharamshala.webp"
              alt="People working together in Dharamshala"
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

        </div>

      </div>
    </section>
  );
}