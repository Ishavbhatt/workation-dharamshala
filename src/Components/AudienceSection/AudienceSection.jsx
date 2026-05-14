
"use client";
import Image from "next/image";
import Button from "../Button/Button";
import Icons from "../Icons/Icons";
import styles from "./AudienceSection.module.scss";
import { useState } from "react";

export default function AudienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const audienceData = [
    {
      title: "IT professionals",
      description1:
        "Lorem ipsum dolor sit amet consectetur. Diam enim pellentesque a a nam eu. Lectus placerat vitae amet nisi mi aliquet lectus.",
      description2:
        "Ut bibendum malesuada aliquet sem turpis nisl tristique imperdiet. Pharetra aliquam vestibulum mi feugiat non felis.",
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
        <div className={styles.audience_heading}>
          <div className={styles.sub_heading_wrapper}>
            <span className={`font_mono fw_500 body_2 ${styles.sub_heading}`}>
              WHO SHOULD CONSIDER
            </span>

            <span className={styles.line}></span>
          </div>

          <h2 className={`font_heading fw_400 title_2 ${styles.audience_title}`}>
            Thoughtfully created for
          </h2>
        </div>

        <div className={styles.audience_grid}>

          {/* LEFT IMAGE */}
          <div className={styles.audience_image_wrapper}>
            <Image
              src="/images/working-remotely.avif"
              alt="Workation Dharamshala"
              fill
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