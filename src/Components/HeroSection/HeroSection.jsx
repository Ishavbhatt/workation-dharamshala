import Image from "next/image";
import Button from "../Button/Button";
import Icons from "../Icons/Icons";

import styles from "./HeroSection.module.scss";

export default function HeroSection() {
  return (
    <section className={styles.hero_section}>
    <div className={styles.hero_grid}>
  
      {/* LEFT CONTENT */}
      <div className={styles.hero_content}>
  
        <div className="container">
  
          <div className={styles.hero_content_inner}>
  
            <div className={styles.sub_heading_wrapper}>
              <span className={`font_body fw_500 caption ${styles.sub_heading}`}>
                WORK FROM MOUNTAINS
              </span>
  
              <span className={styles.line}></span>
            </div>
  
            <h1 className={`font_heading fw_400 title_1 ${styles.hero_title}`}>
              Co-working & co-
              {/* <br /> */}
              living in the lap of
              {/* <br /> */}
             {' '} himalayas
            </h1>
  
            <p className={`font_body fw_400 body_1 ${styles.hero_description}`}>
              Remote work & stays in Dharamshala with fast WiFi,
              power backup, and peaceful mountain views.
            </p>
  
            <Button
              variant="primary"
              icon={
                <Icons
                  name="arrowTopRight"
                  color="#fff"
                  size={20}
                />
              }
              iconPosition="right"
            >
              Plan your escape
            </Button>
  
          </div>
  
        </div>
  
      </div>
  
      {/* RIGHT IMAGE */}
      <div className={styles.hero_image_wrapper}>
        <Image
          src="/images/workation-dharamshala.webp"
          alt="Workation Dharamshala"
          fill
          priority
          className={styles.hero_image}
        />
      </div>
  
    </div>
  </section>
  );
}