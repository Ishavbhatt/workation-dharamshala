import Button from '@/Components/Button/Button';
import styles from '../../styles/Pages/WorkationPackages.module.scss';
import packagesData from '../../Data/packagesData'
import FaqSection from '@/Components/FaqSection/FaqSection';

export const metadata = {
  title: "Workation Packages in Dharamshala | 7-Day, 14-Day & 1-Month Remote Work Stays",
  description:
    "Discover workation packages in Dharamshala including 7-day, 14-day and 1-month remote work stays. Fast WiFi, work-friendly rooms, mountain views and long-stay pricing for digital nomads and remote workers.",
  alternates: {
    canonical: "https://workationdharamshala.in/workation-packages",
  },
  openGraph: {
    title: "Workation Packages in Dharamshala | 7-Day, 14-Day & 1-Month Remote Work Stays",
    description:
      "Discover workation packages in Dharamshala including 7-day, 14-day and 1-month remote work stays. Fast WiFi, work-friendly rooms, mountain views and long-stay pricing for digital nomads and remote workers.",
    url: "https://workationdharamshala.in/workation-packages/",
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

  const faqsData = [
    {
      "question": "Is WiFi reliable for remote work?",
      "answer": " Yes, all workation stays include high-speed WiFi suitable for video meetings, coding work and remote office tasks."
    },
    {
      "question": "Can I stay for more than a month?",
      "answer": " Yes, we can arrange extended long-stay workation packages in Dharamshala depending on availability."
    },
    {
      "question": "Are meals included in workation packages",
      "answer": "Some properties offer meal plans and we can customise packages depending on your stay duration."
    },
    {
      "question": "Are there other remote workers staying?",
      "answer": " Many guests are freelancers, developers and digital nomads looking for peaceful work environments in the Himalayas."
    },
  ]
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

          <p>
            Our workation packages in Dharamshala are designed for remote workers,
            freelancers, and digital nomads who want to work from the mountains
            without compromising productivity.
          </p>

          <p>
            Each stay includes high-speed WiFi, dedicated workspace, power backup,
            and comfortable long-stay rooms with views of the Himalayas.
            Choose between short 7-day workation stays or extended 14-day remote
            work packages.
          </p>
        </section>

        {/* Packages */}
        <section className={styles.packagesGrid}>
          {packagesData.map((pkg, index) => (
            <article
              key={index}
              className={`${styles.packageCard} ${pkg.highlight ? styles.highlight : ""}`}
            >
              <header className={styles.cardHeader}>
                <h2>{pkg.title}</h2>

                {pkg.badge && (
                  <span
                    className={
                      pkg.badgeType === "primary"
                        ? styles.badgePrimary
                        : styles.badge
                    }
                  >
                    {pkg.badge}
                  </span>
                )}
              </header>

              <p className={styles.description}>{pkg.description}</p>

              <ul className={styles.features}>
                {pkg.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <div className={styles.priceSection}>
                <span className={styles.price}>{pkg.price}</span>
                <span className={styles.note}>Per person</span>
              </div>

              <Button
                href="https://wa.me/+918219703715"
                variant="primary"
                target="_blank"
              >
                Check Availability on WhatsApp
              </Button>
            </article>
          ))}
        </section>

        <FaqSection faqs={faqsData} />
      </div>
    </main>
  );
}
