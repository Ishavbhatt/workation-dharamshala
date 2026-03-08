import Button from '@/Components/Button/Button';
import styles from '../../styles/Pages/WorkationPackages.module.scss';
import packagesData from '../../Data/packagesData'
import FaqSection from '@/Components/FaqSection/FaqSection';
import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
  title: "Workation in Dharamshala | 7-Day, 14-Day & 1-Month Workation Packages",
  description:
    "Discover workation packages in Dharamshala including 7-day, 14-day and 1-month remote work stays. Fast WiFi, work-friendly rooms, mountain views and long-stay pricing for digital nomads and remote workers.",
  alternates: {
    canonical: "https://workationdharamshala.in/workation-packages",
  },
  openGraph: {
    title: "Workation in Dharamshala | 7-Day, 14-Day & 1-Month Workation Packages",
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
      "question": "Is Dharamshala good for workation?",
      "answer": "Yes, Dharamshala is one of the best destinations in India for workation because of its peaceful Himalayan environment, pleasant weather and reliable internet infrastructure."
    },
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className={styles.pageWrapper}>
        <div className='container'>

          {/* Page Header */}
          <section className={styles.header}>
            <h1>Workation in Dharamshala – Remote Work Stays in the Himalayas</h1>

            <p>
              Looking for a peaceful place to work remotely from the mountains?
              Our curated workation stays in Dharamshala are designed for
              freelancers, developers and remote professionals who want reliable
              WiFi, dedicated workspaces and calm Himalayan surroundings.
            </p>

            <p>
              Choose from flexible 7-day, 14-day or 1-month workation packages
              with high-speed internet, comfortable private rooms and long-stay
              friendly pricing.
            </p>

            <p className={styles.headerNote}>
              Explore our curated <Link href="/">workation stays in Dharamshala</Link>
              designed for remote professionals.
            </p>
          </section>

          <section className={styles.quickCheck}>
            <h2>Planning a Workation in Dharamshala?</h2>

            <p>
              Tell us your preferred dates and stay duration.
              We’ll suggest the best workation stay available.
            </p>

            <Button
              href="https://wa.me/+918219703715"
              target="_blank"
              variant="primary"
            >
              Ask About Available Dates
            </Button>
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
                  Check Workation Availability
                </Button>
              </article>
            ))}
          </section>

          <section className={styles.included}>
            <h2>What’s Included in Our Workation Stays in Dharamshala</h2>

            <ul>
              <li>High-speed WiFi suitable for video meetings</li>
              <li>Dedicated workspace setup</li>
              <li>Reliable power backup</li>
              <li>Comfortable private rooms</li>
              <li>Long-stay friendly pricing</li>
              <li>Support from local hosts</li>
            </ul>
          </section>

          <section className={styles.whyDharamshala}>
            <h2>Why Dharamshala is Perfect for a Workation</h2>

            <p>
              Dharamshala offers a unique mix of peaceful Himalayan
              surroundings and reliable remote work infrastructure.
              Many freelancers, startup founders and remote employees
              choose Dharamshala for long-stay workations.
            </p>

            <ul>
              <li>Stable WiFi for video calls and remote work</li>
              <li>Peaceful mountain environment</li>
              <li>Affordable long-stay accommodation</li>
              <li>Growing digital nomad community</li>
            </ul>
          </section>

          <section className={styles.community}>
            <h2>Workation Community</h2>

            <p>
              Many guests staying here are remote workers, freelancers
              and developers looking for a peaceful work environment.
              You may meet like-minded professionals during your stay
              in Dharamshala.
            </p>
          </section>

          <section className={styles.howItWorks}>
  <h2>How to Book Your Workation</h2>

  <div className={styles.steps}>
    <div className={styles.step}>
      <span className={styles.stepNumber}>1</span>
      <h3>Share Your Dates</h3>
      <p>
        Tell us your preferred workation dates and duration.
        We’ll check availability for the best stays.
      </p>
    </div>

    <div className={styles.step}>
      <span className={styles.stepNumber}>2</span>
      <h3>Choose Your Stay</h3>
      <p>
        We suggest suitable rooms based on your budget,
        workspace needs and stay duration.
      </p>
    </div>

    <div className={styles.step}>
      <span className={styles.stepNumber}>3</span>
      <h3>Confirm Your Booking</h3>
      <p>
        Secure your stay and start planning your peaceful
        workation in the Himalayas.
      </p>
    </div>
  </div>

  <Button
    href="https://wa.me/+918219703715"
    variant="primary"
    target="_blank"
  >
    Ask About Available Dates
  </Button>
</section>

          <FaqSection faqs={faqsData} />
        </div>
      </main>
    </>
  );
}
