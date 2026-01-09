import HeroSection from "@/Components/HeroSection/HeroSection";
import styles from '../styles/Pages/Home.module.scss'
import {
  LuWifi,
  LuPlug,
  LuLaptop,
  LuMountain,
  LuBadgePercent,
  LuHeadphones,
} from 'react-icons/lu'
import Image from "next/image";

export const metadata = {
  title: "Workation Dharamshala | Work From the Himalayas with Fast WiFi",
  description:
    "Looking for a workation in Dharamshala? Stay in work-friendly mountain accommodations with fast WiFi, power backup, and peaceful surroundings. Book your remote work stay today.",
  alternates: {
    canonical: "https://workationdharamshala.in/",
  },
  openGraph: {
    title: "Workation Dharamshala | Work From the Himalayas with Fast WiFi",
    description:
      "Looking for a workation in Dharamshala? Stay in work-friendly mountain accommodations with fast WiFi, power backup, and peaceful surroundings. Book your remote work stay today.",
    url: "https://dharamshalaretreat.com/",
    images: [
      {
        url: "https://workationdharamshala.in/images/workation-dharamshala.JPG",
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {

  const whyItems = [
    {
      icon: LuWifi,
      title: 'Fast & Reliable WiFi',
      desc: 'Stable internet suitable for office work and video meetings.',
    },
    {
      icon: LuPlug,
      title: 'Power Backup',
      desc: 'Uninterrupted work even during occasional power cuts.',
    },
    {
      icon: LuLaptop,
      title: 'Work-Friendly Rooms',
      desc: 'Quiet spaces with proper desks designed for focus.',
    },
    {
      icon: LuMountain,
      title: 'Mountain Surroundings',
      desc: 'Calm Himalayan views that help you slow down and reset.',
    },
    {
      icon: LuBadgePercent,
      title: 'Long-Stay Pricing',
      desc: 'Special rates for 7–14 day remote work stays.',
    },
    {
      icon: LuHeadphones,
      title: 'Local Support',
      desc: 'On-ground assistance throughout your workation.',
    },
  ];

  const audienceItems = [
    'Software developers & IT professionals',
    'Remote employees & freelancers',
    'Startup founders',
    'Digital nomads',
    'Professionals seeking focused work',
  ]

  return (
    <div>
      <HeroSection />

      <section className={`${styles.editorial} common_margin`}>
        <div className="container">
          <div className={styles.editorialInner}>
            <span className={styles.kicker}>Work from the Himalayas</span>

            <p className={styles.lead}>
              Workation Dharamshala curates peaceful, long-stay accommodations for remote
              professionals who want to work with focus, comfort, and mountain calm.
            </p>

            <p className={styles.subText}>
              Whether you’re planning a 7-day or 14-day workation in Dharamshala, we ensure
              reliable WiFi, power backup, and thoughtfully selected stays — so you stay
              productive while living slowly.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.why} common_margin`}>
        <div className="container">
          <h2>Why Remote Workers Choose Us</h2>

          <div className={styles.whyGrid}>
            {whyItems.map(({ icon: Icon, title, desc }) => (
              <div key={title} className={styles.whyCard}>
                <div className={styles.iconWrap}>
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.audience} common_margin`}>
        <div className="container">
          <div className={styles.audienceWrapper}>
            {/* Image Side */}
            <div className={styles.audienceImage}>
              <Image
                src="/images/working-remotely.avif"
                alt="Professional working remotely with a laptop in mountains and nature landscape"
                fill
                priority={false}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Content Side */}
            <div className={styles.audienceContent}>
              <h2>Designed For</h2>

              <p>
                Workation Dharamshala is thoughtfully created for professionals who want
                to work with clarity, comfort, and calm — surrounded by the Himalayas.
              </p>

              <ul>
                {audienceItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.ctaSection} common_margin`}>
        <div className="container">
          <div className={styles.ctaCard}>
            {/* Background Image */}
            <div className={styles.ctaBg}>
              <Image
                src="/images/mountain-view.webp"
                alt="Work from the Himalayas"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Content */}
            <div className={styles.ctaInner}>
              <h2>Your Workday, Reimagined</h2>

              <p>
                Join professionals choosing calm Himalayan stays designed for focus,
                comfort, and meaningful work.
              </p>

              <div className={styles.ctaActions}>
                <a
                  href="https://wa.me/+918219703715"
                  className={styles.primaryBtn}
                >
                  Check Availability on WhatsApp
                </a>

                <span className={styles.helperText}>
                  Limited stays • Long-stay friendly • No commitment
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
