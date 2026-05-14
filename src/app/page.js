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
import Button from "@/Components/Button/Button";
import blogsData from '@/Data/blogsData.json'
import BlogCard from "@/Components/Card/BlogCard";
import LocalBusinessSchema from "@/Components/Schema/LocalBusinessSchema";
import FaqSection from "@/Components/FaqSection/FaqSection";
import Script from "next/script";
import Icons from "@/Components/Icons/Icons";
import AudienceSection from "@/Components/AudienceSection/AudienceSection";
import NearbyPlaces from "@/Components/NearbyPlaces/NearbyPlaces";

export const metadata = {
  title: "Workation Dharamshala | Work From the Himalayas with Fast WiFi",
  description:
    "Looking for a workation in Dharamshala? Stay in work-friendly mountain accommodations with fast WiFi, power backup, and peaceful surroundings. Book your remote work stay today.",
  alternates: {
    canonical: "https://workationdharamshala.in/",
  },
  verification: {
    google: "TfbGSCuflrVQVaP56dZjPKBqKgvv6ERvsJkoFogjgp8",
  },
  openGraph: {
    title: "Workation Dharamshala | Work From the Himalayas with Fast WiFi",
    description:
      "Looking for a workation in Dharamshala? Stay in work-friendly mountain accommodations with fast WiFi, power backup, and peaceful surroundings. Book your remote work stay today.",
    url: "https://workationdharamshala.in",
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
  keywords: [
    "workation dharamshala",
    "work from dharamshala",
    "work from mountains india",
    "digital nomad dharamshala",
    "long stay dharamshala",
    "remote work himalayas",
    "workation in himachal pradesh"
  ],
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

  const faqsData = [
    {
      "question": "Is WiFi reliable for remote work in Dharamshala?",
      "answer": "Yes. All our workation stays provide high-speed WiFi suitable for video calls, meetings, and daily remote work."
    },
    {
      "question": "Are there other remote workers staying at the property?",
      "answer": "Many guests staying with us are remote workers, freelancers, and digital nomads. It’s a great place to meet like-minded professionals."
    },
    {
      "question": "What is included in the workation package?",
      "answer": "Our packages typically include accommodation, 3 meals a day, high-speed WiFi, workspace access, housekeeping, and laundry facilities."
    },
    {
      "question": "Can I stay for 2 weeks or longer?",
      "answer": "Yes. We offer flexible workation stays including 7-day, 14-day, and 1-month long-stay packages."
    },
    {
      "question": "Is Dharamshala a good place for remote work?",
      "answer": "Dharamshala is one of the best destinations for remote work in India thanks to peaceful surroundings, mountain views, cafes, and reliable internet."
    },
    {
      "question": "How do I book a workation stay?",
      "answer": "You can check availability directly through WhatsApp on our website or send us your preferred dates and duration."
    }
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
    <div>
      <LocalBusinessSchema />

      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroSection />

      <section className={styles.editorial_section}>
        <div className="container">
          <div className={styles.editorial_content}>

            <div className={styles.sub_heading_wrapper}>
              <span className={`font_mono fw_500 body_2 ${styles.sub_heading}`}>
                PEACEFUL LONG STAYS
              </span>

              <span className={styles.line}></span>
            </div>

            <h2 className={`font_heading fw_400 title_2 ${styles.editorial_title}`}>
              We curate peaceful long stays for remote professionals to work, focus, and live with mountain calm
            </h2>

            <p className={`font_body fw_400 heading_5 ${styles.editorial_description}`}>
              Planning a workation in Dharamshala? We ensure reliable WiFi,
              power backup, and curated stays, so you can work productively
              and live slow.
            </p>

          </div>
          <div className={styles.editorial_cta}>
            <Button
              variant="black"
              icon={
                <Icons
                  name="arrowTopRight"
                  size={20}
                />
              }
              iconPosition="right"
            >
              Discover more
            </Button>
          </div>
        </div>

      </section>

      <AudienceSection />

      <section className={styles.features_section}>
        <div className="container">

          <div className={styles.features_heading}>

            <div className={styles.sub_heading_wrapper}>
              <span className={`font_mono fw_500 body_2 ${styles.sub_heading}`}>
                WHY CHOOSE US
              </span>

              <span className={styles.line}></span>
            </div>

            <h2 className={`font_heading fw_400 title_2 ${styles.features_title}`}>
              We Care all that you need
            </h2>

          </div>

          <div className={styles.features_grid}>

            {[
              {
                title: "Fast Wi-Fi",
                description:
                  "Stable internet suitable for office work and video meetings.",
              },
              {
                title: "Power backup",
                description:
                  "Uninterrupted work even during occasional power cuts.",
              },
              {
                title: "Dedicated work space",
                description:
                  "Quiet spaces with proper desks designed for focus.",
              },
              {
                title: "Rooms with views",
                description:
                  "Calm himalayan views that help you slow down and reset.",
              },
              {
                title: "Nature surroundings",
                description:
                  "Calm nature surroundings that help you slow down and reset.",
              },
              {
                title: "Backed by locals",
                description:
                  "On-ground assistance throughout your workation.",
              },
            ].map((item, index) => (
              <div className={styles.feature_card} key={index}>

                <div className={styles.feature_icon}>
                  <Icons
                    name="spark"
                    size={44}
                  />
                </div>

                <div className={styles.feature_content}>

                  <h3 className={`font_heading fw_400 heading_3 ${styles.feature_title}`}>
                    {item.title}
                  </h3>

                  <p className={`font_body fw_400 heading_5 ${styles.feature_description}`}>
                    {item.description}
                  </p>

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      <section className={styles.experiences_section}>
        <div className="container">

          <div className={styles.experiences_heading}>

            <div className={styles.sub_heading_wrapper}>
              <span className={`font_mono fw_500 body_2 ${styles.sub_heading}`}>
                WEEKEND EXPERIENCES
              </span>

              <span className={styles.line}></span>
            </div>

            <h2 className={`font_heading fw_400 title_2 ${styles.experiences_title}`}>
              Recharge yourself on weekends
            </h2>

          </div>

          <div className={styles.experiences_grid}>

            {[
              {
                title: "Triund Trek",
                image: "/images/mountain-view.webp",
              },
              {
                title: "Paragliding",
                image: "/images/mountain-view.webp",
              },
              {
                title: "Day Tour 01",
                image: "/images/mountain-view.webp",
              },
              {
                title: "Day Tour 02",
                image: "/images/mountain-view.webp",
              },
            ].map((item, index) => (
              <div className={styles.experience_card} key={index}>

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={styles.experience_image}
                />

                <div className={styles.image_overlay}></div>

                <div className={styles.experience_content}>

                  <div className={styles.experience_info}>
                    <h3 className={`font_heading fw_400 heading_3 ${styles.experience_title}`}>
                      {item.title}
                    </h3>
                    <span className={`font_mono fw_500 body_2 ${styles.experience_tag}`}>
                      ADVENTURE, THRILL, VIEWS
                    </span>
                  </div>

                  <Button
                    variant="white_outline"
                    icon={
                      <Icons
                        name="arrowTopRight"
                        size={20}
                      />
                    }
                    iconPosition="right"
                  >
                    Discover
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NearbyPlaces />

      {/* <section className={`${styles.blogs_sec} common_margin`}>
        <div className="container">
          <span>Travel & Workation Insights</span>
          <h2>Workation Tips, Remote Work & Travel Guides</h2>

          <div className={styles.blogs_lisitng}>
            {blogsData?.map((blog) => (
              <BlogCard
                key={blog.id}
                title={blog.title}
                date={blog.date}
                image={blog.featuredImage}
                slug={blog.slug}
              />
            ))}
          </div>
        </div>
      </section> */}

      <FaqSection faqs={faqsData} />

    </div>
  );
}

// <section className={`${styles.why} common_margin`}>
// <div className="container">
//   <h2>Why Remote Workers Choose Us</h2>

//   <div className={styles.whyGrid}>
//     {whyItems.map(({ icon: Icon, title, desc }) => (
//       <div key={title} className={styles.whyCard}>
//         <div className={styles.iconWrap}>
//           <Icon />
//         </div>
//         <h3>{title}</h3>
//         <p>{desc}</p>
//       </div>
//     ))}
//   </div>
// </div>
// </section>

// <section className={`${styles.audience} common_margin`}>
// <div className="container">
//   <div className={styles.audienceWrapper}>
//     {/* Image Side */}
//     <div className={styles.audienceImage}>
//       <Image
//         src="/images/working-remotely.avif"
//         alt="Remote worker enjoying a workation in Dharamshala with Himalayan mountain view"
//         fill
//         priority={false}
//         sizes="(max-width: 768px) 100vw, 50vw"
//         style={{ objectFit: 'cover' }}
//       />
//     </div>

//     {/* Content Side */}
//     <div className={styles.audienceContent}>
//       <h2>Designed For</h2>

//       <p>
//         Workation Dharamshala is thoughtfully created for professionals who want
//         to work with clarity, comfort, and calm — surrounded by the Himalayas.
//       </p>

//       <ul>
//         {audienceItems.map((item) => (
//           <li key={item}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   </div>
// </div>
// </section>

{/* <section className={`${styles.ctaSection} common_margin`}>
<div className="container">
  <div className={styles.ctaCard}>
    <div className={styles.ctaBg}>
      <Image
        src="/images/mountain-view.webp"
        alt="Work from the Himalayas"
        fill
        sizes="(max-width: 768px) 100vw, 1200px"
        style={{ objectFit: 'cover' }}
      />
    </div>

    <div className={styles.ctaInner}>
      <h2>Your Workday, Reimagined</h2>

      <p>
        Join professionals choosing calm Himalayan stays designed for focus,
        comfort, and meaningful work.
      </p>

      <div className={styles.ctaActions}>
        <Button
          href="https://wa.me/+918219703715"
          target={"_blank"}
          variant="ternary"
        >
          Check Availability on WhatsApp
        </Button>

        <span className={styles.helperText}>
          Limited stays • Long-stay friendly • No commitment
        </span>
      </div>
    </div>
  </div>
</div>
</section> */}