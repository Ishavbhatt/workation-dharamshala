import Image from "next/image";
import Button from "../Button/Button";
import styles from "./HeroSection.module.scss";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/workation-dharamshala.JPG"
          alt="Workation Dharamshala – Remote work stays in the Himalayas"
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.overlay} />
      </div>

      {/* Content */}
      <div className={styles.heroContent}>
        <span className={styles.eyebrow}>Work. Stay. Slow down.</span>

        <h1>
          Workation <br /> Dharamshala
        </h1>

        <p>
          Remote work stays in the Himalayas with fast WiFi,
          power backup, and peaceful mountain views.
        </p>

        <Button
          href="https://wa.me/+918219703715"
          target={"_blank"}
          variant="ternary"
        >
          Check Availability
        </Button>
      </div>
    </section>
  );
}
