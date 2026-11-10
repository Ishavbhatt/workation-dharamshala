
"use client";
import Image from "next/image";
import Button from "../Button/Button";
import Icons from "../Icons/Icons";
import styles from "./AudienceSection.module.scss";
import { useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";

export default function AudienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const audienceData = [
    {
      title: "IT professionals",
      description1:
        "High-speed Wi-Fi and quiet work areas for video calls, stand-ups and long, focused coding sessions.",
      description2:
        "Swap the commute for mountain views and end your workday with a walk through the pine forests.",
    },
    {
      title: "Remote employees",
      description1:
        "Reliable WiFi, peaceful stays, and focused environments for remote employees seeking balance.",
      description2:
        "Designed for professionals who want productivity without city chaos.",
    },
    {
      title: "Freelancers",
      description1:
        "Flexible long stays for creators, designers, developers, and independent professionals.",
      description2:
        "Work peacefully while staying connected with nature and community.",
    },
    {
      title: "Startup founders & teams",
      description1:
        "Ideal for founders looking for strategic retreats, deep work, and creative clarity.",
      description2:
        "Perfect for small teams seeking focus away from fast-paced city life.",
    },
    {
      title: "Digital nomads",
      description1:
        "Curated stays built for slow travel and productive remote lifestyles.",
      description2:
        "Experience Dharamshala while maintaining your daily workflow.",
    },
  ];

  return (
    <section className={styles.audience_section}>
      <div className="container">
        <SectionHeading
          label="WHO SHOULD CONSIDER"
          title="Thoughtfully created for"
        />
        <div className={styles.audience_grid}>

          {/* LEFT IMAGE */}
          <div className={styles.audience_image_wrapper}>
            <Image
              src="/images/working-remotely.avif"
              alt="Workation Dharamshala"
              fill
              sizes="(max-width: 768px) 100vw, 550px"
              className={styles.audience_image}
            />
          </div>
          <div className={styles.audience_content}>

            {audienceData.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={index}
                  className={`${styles.audience_item} ${isActive ? styles.active : ""}`}
                >
                  <button
                    className={styles.audience_button}
                    onClick={() =>
                      setActiveIndex(isActive ? null : index)
                    }
                  >

                    <span className={`font_body fw_400 heading_3`}>
                      {item.title}
                    </span>

                    <Icons
                      name={isActive ? "close" : "plus"}
                      size={24}
                    />

                  </button>

                  {isActive && (
                    <div className={styles.audience_body}>

                      <p className={`font_body fw_400 heading_5`}>
                        {item.description1}
                      </p>

                      <p className={`font_body fw_400 heading_5`}>
                        {item.description2}
                      </p>

                    </div>
                  )}

                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}