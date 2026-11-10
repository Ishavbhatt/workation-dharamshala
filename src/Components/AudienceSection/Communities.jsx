
"use client";
import Image from "next/image";
import Button from "../Button/Button";
import Icons from "../Icons/Icons";
import styles from "./AudienceSection.module.scss";
import { useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";

export default function Communities() {
  const [activeIndex, setActiveIndex] = useState(0);

  const audienceData = [
    {
      title: "Startup founders & teams",
      description1:
        "Founders and small teams come to Dharamshala for focused sprints and offsites, far from the noise of the city.",
      description2:
        "Plan the next quarter in the mornings, then clear your head on a trek or a sunset at Naddi.",
    },
    {
      title: "IT professionals",
      description1:
        "Developers and engineers work from Dharamshala's cafés and long stays, with high-speed Wi-Fi for calls and deployments.",
      description2:
        "A calm workday in the mountains, with evenings free for café hopping and fresh air.",
    },
    {
      title: "Freelancers",
      description1:
        "Flexible long stays for creators, developers, consultants and independent professionals.",
      description2:
        "Work at your own pace while staying connected with nature and like-minded people.",
    },
    {
      title: "Designers & writers",
      description1:
        "The calm, the views and the slower pace make Dharamshala a favourite with designers, writers and other creatives.",
      description2:
        "Find inspiration on a forest walk, then settle in at a café table with your laptop.",
    },
    {
      title: "Digital nomads",
      description1:
        "Dharamshala, McLeodganj and Dharamkot have a growing community of remote workers from India and around the world.",
      description2:
        "Experience the Himalayas while keeping your daily workflow.",
    },
  ];

  return (
    <section className={styles.audience_section}>
      <div className="container">
        <SectionHeading
          label="DHARAMSHALA COMMUNITIES"
          title="Work alongside like-minded people"
          description="Dharamshala's cafés and co-working spaces attract remote workers, creators and founders, so you're never the only one with a laptop."
        />
        <div className={styles.audience_grid}>

          {/* LEFT IMAGE */}
          <div className={styles.audience_image_wrapper}>
            <Image
              src="/images/mountain-stay.webp"
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