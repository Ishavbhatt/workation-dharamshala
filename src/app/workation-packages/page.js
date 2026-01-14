import Button from '@/Components/Button/Button';
import styles from '../../styles/Pages/WorkationPackages.module.scss';

export const metadata = {
  title: "Workation Packages in Dharamshala | 7 & 14 Day Remote Work Stays",
  description:
    "Explore workation packages in Dharamshala including 7-day and 14-day remote work stays. High-speed WiFi, power backup, and peaceful mountain views included.",
  alternates: {
    canonical: "https://workationdharamshala.in/workation-packages",
  },
  openGraph: {
    title: "Workation Packages in Dharamshala | 7 & 14 Day Remote Work Stays",
    description:
      "Explore workation packages in Dharamshala including 7-day and 14-day remote work stays. High-speed WiFi, power backup, and peaceful mountain views included.",
    url: "https://workationdharamshala.in/",
    images: [
      {
        url: "https://workationdharamshala.in/images/workation-dharamshala.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function WorkationPackages() {
  return (
    <main className={styles.pageWrapper}>
      <div className='container'>

        {/* Page Header */}
        <section className={styles.header}>
          <h1>Workation Packages in Dharamshala</h1>
          <p>
            Premium long-stay work-from-mountains experiences with fast WiFi,
            power backup, and peaceful surroundings.
          </p>
        </section>

        {/* Packages */}
        <section className={styles.packagesGrid}>
          <article className={styles.packageCard}>
            <header className={styles.cardHeader}>
              <h2>7-Day Workation</h2>
              <span className={styles.badge}>Popular</span>
            </header>

            <p className={styles.description}>
              Ideal for professionals who want to experience remote work
              from the Himalayas without a long commitment.
            </p>

            <ul className={styles.features}>
              <li>Private work-friendly room</li>
              <li>High-speed WiFi</li>
              <li>Power backup</li>
              <li>Dedicated workspace</li>
              <li>Weekly housekeeping</li>
              <li>Peaceful mountain surroundings</li>
              <li>Local area orientation on arrival</li>
            </ul>

            <div className={styles.priceSection}>
              <span className={styles.price}>₹18,000 – ₹25,000</span>
              <span className={styles.note}>Per person</span>
            </div>

            <Button
              href="https://wa.me/+918219703715"
              variant="primary"
              target={"_blank"}
            >
              WhatsApp Us
            </Button>
          </article>

          {/* 14-Day */}
          <article className={`${styles.packageCard} ${styles.highlight}`}>
            <header className={styles.cardHeader}>
              <h2>14-Day Workation</h2>
              <span className={styles.badgePrimary}>Best Value</span>
            </header>

            <p className={styles.description}>
              Designed for deep work, slow living, and professionals
              planning extended remote stays.
            </p>

            <ul className={styles.features}>
              <li>Private long-stay room</li>
              <li>High-speed WiFi</li>
              <li>Reliable power backup</li>
              <li>Work desk & chair</li>
              <li>Laundry support</li>
              <li>Long-stay discounted pricing</li>
              <li>Local area assistance</li>
            </ul>

            <div className={styles.priceSection}>
              <span className={styles.price}>₹30,000 – ₹40,000</span>
              <span className={styles.note}>Per person</span>
            </div>

            <Button
              href="https://wa.me/+918219703715"
              variant="primary"
              target={"_blank"}
            >
              WhatsApp Us
            </Button>
          </article>
        </section>
      </div>
    </main>
  );
}
