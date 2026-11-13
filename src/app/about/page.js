import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Pages/About.module.scss";
import { SITE_URL } from "@/lib/blogs";
import SectionHeading from "@/Components/SectionHeading/SectionHeading";
import CtaBanner from "@/Components/CtaBanner/CtaBanner";
import Icons from "@/Components/Icons/Icons";

const pageTitle = "About Workation Dharamshala | Remote Work in the Himalayas";
const pageDescription =
  "Locally run in Dharamshala, we help remote workers work from the Himalayas with checked work-friendly stays, honest pricing, local tours and support.";

export const metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${SITE_URL}/about`,
    images: [{ url: `${SITE_URL}/images/workation-dharamshala.webp`, width: 1200, height: 630 }],
  },
};

const services = [
  {
    icon: "wifi",
    title: "Workation stays",
    description:
      "Long stays of a week to a month in work-friendly rooms with fast Wi-Fi, a work area and a peaceful mountain setting.",
    href: "/dharamshala",
    linkText: "See stays & pricing",
  },
  {
    icon: "mapPin",
    title: "Tours & activities",
    description:
      "Dharamshala sightseeing by taxi, the Triund trek, paragliding and camping, arranged with trusted local partners.",
    href: "/tours",
    linkText: "Explore things to do",
  },
  {
    icon: "whatsappOutline",
    title: "Local support",
    description:
      "From your first message to your last day, we're a WhatsApp away for pickups, plans and anything you need.",
    href: "/contact-us",
    linkText: "Talk to us",
  },
];

const values = [
  {
    title: "Honest pricing",
    description:
      "Our package prices are on the website, and our booking and cancellation terms are written down clearly before you pay anything.",
  },
  {
    title: "Stays we know",
    description:
      "We only recommend properties we work with directly, and we check the room, the work setup and the Wi-Fi before suggesting them to you.",
  },
  {
    title: "Trusted local partners",
    description:
      "Taxis, guides and adventure activities are arranged through licensed local operators we know and trust.",
  },
  {
    title: "Built for remote work",
    description:
      "Everything we do starts with one question: can you do your best work here? Calm, connectivity and comfort come first.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: pageTitle,
  url: `${SITE_URL}/about`,
  mainEntity: {
    "@type": "TravelAgency",
    name: "Workation Dharamshala",
    url: SITE_URL,
    email: "hello@workationdharamshala.in",
    telephone: "+91-8219703715",
    areaServed: { "@type": "City", name: "Dharamshala" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dharamshala",
      addressRegion: "Himachal Pradesh",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.facebook.com/workationdharamshala/",
      "https://www.instagram.com/workationdharamshala/",
    ],
  },
};

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* INTRO */}
      <section className={styles.section}>
        <div className="container">
          <SectionHeading
            as="h1"
            titleSize="title_1"
            label="ABOUT US"
            title="Work from the Himalayas, without the guesswork"
            description="Workation Dharamshala helps remote workers, freelancers and IT professionals swap the city for the mountains, without compromising on productivity."
          />

          <div className={styles.hero_image}>
            <Image
              src="/images/tours/dharamshala-sightseeing.webp"
              alt="McLeodganj and the Dhauladhar hills in Dharamshala, Himachal Pradesh"
              fill
              priority
              sizes="(max-width: 1100px) 100vw, 1100px"
            />
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.story_grid}>
            <SectionHeading label="OUR STORY" title="Why we started Workation Dharamshala" />

            <div className={styles.story_text}>
              <p className="font_body fw_400 heading_5">
                Remote work made it possible to live and work from almost anywhere, and
                Dharamshala quietly became one of the places people wanted to be: mountain air,
                cafés, monasteries and a slower pace of life.
              </p>
              <p className="font_body fw_400 heading_5">
                But from the outside, it&apos;s hard to know which stays actually work for remote
                work. Will the Wi-Fi hold up on a video call? Is there a proper place to sit and
                work? What happens when the power goes out?
              </p>
              <p className="font_body fw_400 heading_5">
                <strong>Workation Dharamshala</strong> was created to answer those questions for
                you. Based in Dharamshala, Himachal Pradesh, we work closely with trusted local
                properties to offer work-friendly stays that meet real remote work needs, and we
                help you plan everything around them, from pickups to weekend treks.
              </p>
              <p className="font_body fw_400 heading_5">
                Our goal is simple: make <strong>working from Dharamshala</strong> easy, reliable
                and stress-free, so you can focus on your work while enjoying a calmer mountain
                lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className={styles.section}>
        <div className="container">
          <SectionHeading label="WHAT WE DO" title="Everything for your time in the mountains" />

          <div className={styles.services_grid}>
            {services.map((service) => (
              <div className={styles.service_card} key={service.title}>
                <span className={styles.icon_circle}>
                  <Icons name={service.icon} size={24} strokeWidth={1.6} color="#3d6a43" />
                </span>
                <h3 className="font_heading fw_400 heading_3">{service.title}</h3>
                <p className="font_body fw_400 body_1">{service.description}</p>
                <Link href={service.href} className={`font_body fw_500 body_1 ${styles.card_link}`}>
                  {service.linkText}
                  <Icons name="arrowTopRight" size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className={styles.section}>
        <div className="container">
          <SectionHeading label="HOW WE WORK" title="What you can count on" />

          <ol className={styles.values_list}>
            {values.map((value, i) => (
              <li className={styles.value_item} key={value.title}>
                <span className={`font_mono fw_500 body_2 ${styles.value_number}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font_heading fw_400 heading_3">{value.title}</h3>
                  <p className="font_body fw_400 heading_5">{value.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.section}>
        <div className="container">
          <CtaBanner title="Ready to plan your workation?" />
        </div>
      </section>
    </>
  );
}
