import Script from "next/script";
import styles from "../../styles/Pages/Tours.module.scss";
import toursData from "@/Data/toursData";
import { SITE_URL } from "@/lib/blogs";
import SectionHeading from "@/Components/SectionHeading/SectionHeading";
import TourCard from "@/Components/Card/TourCard";
import EnquiryForm from "@/Components/Forms/EnquiryForm";
import FaqSection from "@/Components/FaqSection/FaqSection";
import Button from "@/Components/Button/Button";
import Icons from "@/Components/Icons/Icons";

const pageTitle = "Things to Do in Dharamshala | Tours, Treks & Activities";
const pageDescription =
  "Dharamshala local sightseeing by taxi, Triund trek, paragliding at Bir Billing and camping, arranged by locals with pickup from your stay. Enquire now.";

export const metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${SITE_URL}/tours` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${SITE_URL}/tours`,
    images: [{ url: `${SITE_URL}/images/workation-dharamshala.webp`, width: 1200, height: 630 }],
  },
};

const reasons = [
  {
    icon: "mapPin",
    title: "Local & verified",
    description: "We live here and only work with trusted, licensed local drivers, guides and pilots.",
  },
  {
    icon: "check",
    title: "Pickup from your stay",
    description: "Hotel, homestay or workation stay: we pick you up and drop you back.",
  },
  {
    icon: "clock",
    title: "Flexible plans",
    description: "Private tours at your pace. Change stops, timings or combine activities.",
  },
  {
    icon: "whatsappOutline",
    title: "Quick WhatsApp support",
    description: "Ask anything before and during your trip. We usually reply within hours.",
  },
];

const faqsData = [
  {
    question: "How do I book a tour or activity?",
    answer:
      "Send us an enquiry using the form or WhatsApp with your preferred date and group size. We'll confirm availability, share all the details and help you book.",
  },
  {
    question: "Do I need to stay with you to book a tour?",
    answer:
      "No. Anyone visiting Dharamshala can book our sightseeing taxi, treks, paragliding and camping. Workation guests also get help planning their weekends.",
  },
  {
    question: "Can I combine activities, like sightseeing and paragliding?",
    answer:
      "Yes. Tell us what you'd like to do and how many days you have, and we'll suggest a plan that fits your schedule.",
  },
  {
    question: "Do you arrange tours for groups and teams?",
    answer:
      "Yes. We arrange tours, treks and camping for families, friends and team offsites. Mention your group size in the enquiry.",
  },
];

const toursListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Tours & activities in Dharamshala",
  itemListElement: toursData.map((tour, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: tour.title,
    url: `${SITE_URL}/tours/${tour.slug}`,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqsData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function ToursPage() {
  return (
    <>
      <Script
        id="tours-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([toursListSchema, faqSchema]) }}
      />

      {/* ALL TOURS */}
      <section className={styles.section}>
        <div className="container">
          <SectionHeading
            as="h1"
            titleSize="title_1"
            label="TOURS & ACTIVITIES"
            title="Things to do in Dharamshala"
            description="From a relaxed day of sightseeing to treks, paragliding and nights under the stars, we arrange it all with trusted local partners and pickup from your stay."
          />

          <div className={styles.tours_grid}>
            {toursData.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY BOOK WITH US */}
      <section className={styles.section}>
        <div className="container">
          <SectionHeading label="WHY BOOK WITH US" title="Explore Dharamshala with locals" />

          <div className={styles.reasons_grid}>
            {reasons.map((reason) => (
              <div className={styles.reason_card} key={reason.title}>
                <span className={styles.reason_icon}>
                  <Icons name={reason.icon} size={24} strokeWidth={1.6} color="#3d6a43" />
                </span>
                <h3 className="font_heading fw_400 heading_4">{reason.title}</h3>
                <p className="font_body fw_400 body_1">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENQUIRY */}
      <section className={styles.section} id="enquire">
        <div className="container">
          <div className={styles.enquiry_grid}>
            <div>
              <SectionHeading
                label="PLAN YOUR DAY"
                title="Tell us what you'd like to do"
                description="Share your date and group size and we'll get back with availability and all the details, usually within a few hours."
              />
              <Button
                href={`https://wa.me/918219703715?text=${encodeURIComponent(
                  "Hi! I'd like to know more about tours & activities in Dharamshala."
                )}`}
                target="_blank"
                variant="primary"
                icon={<Icons name="whatsappOutline" size={20} />}
                iconPosition="left"
              >
                Ask on WhatsApp
              </Button>
            </div>

            <div className={styles.form_card}>
              <EnquiryForm defaultService={toursData[0].serviceName} />
            </div>
          </div>
        </div>
      </section>

      <FaqSection faqs={faqsData} label="FAQS" title="Dharamshala tours: good to know" />
    </>
  );
}
