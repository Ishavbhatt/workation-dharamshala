import Script from "next/script";
import Link from "next/link";
import styles from "../../styles/Pages/Contact.module.scss";
import EnquiryForm from "@/Components/Forms/EnquiryForm";
import BookingSteps from "@/Components/BookingSteps/BookingSteps";
import FaqSection from "@/Components/FaqSection/FaqSection";
import Icons from "@/Components/Icons/Icons";
import SectionHeading from "@/Components/SectionHeading/SectionHeading";

const pageTitle = "Contact Us | Book a Workation in Dharamshala";
const pageDescription =
  "Plan your workation in Dharamshala. Share your dates and we'll match you with a work-friendly mountain stay with fast WiFi. We reply within a few hours.";

export const metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://workationdharamshala.in/contact-us",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://workationdharamshala.in/contact-us",
    images: [
      {
        url: "https://workationdharamshala.in/images/workation-dharamshala.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const contactItems = [
  {
    icon: <Icons name="whatsappOutline" size={22} />,
    label: "WhatsApp / call",
    value: "(+91) 82197-03715",
    href: "https://wa.me/918219703715",
  },
  {
    icon: <Icons name="mail" size={22} strokeWidth={1.6} />,
    label: "Email",
    value: "hello@workationdharamshala.in",
    href: "mailto:hello@workationdharamshala.in",
  },
  {
    icon: <Icons name="mapPin" size={22} strokeWidth={1.6} />,
    label: "Location",
    value: "Dharamshala, Himachal Pradesh",
  },
  {
    icon: <Icons name="clock" size={22} strokeWidth={1.6} />,
    label: "Response time",
    value: "Within a few hours · Mon – Sun, 9 AM – 6 PM",
  },
];

const faqsData = [
  {
    question: "Is there any charge to send an enquiry?",
    answer:
      "No. Enquiring is completely free. We'll share available stays, photos and a quote, and you decide only when you're happy with the match.",
  },
  {
    question: "How much do I pay to confirm my stay?",
    answer:
      "You pay 30% to block your stay. The balance is due 7 days before check-in.",
  },
  {
    question: "Can I stay for less than a week or customise my package?",
    answer:
      "Our packages start at 7 days, but we're flexible. Tell us your dates, workspace needs and preferred experiences and we'll tailor a stay around you.",
  },
  {
    question: "Can I come with my partner, friends or team?",
    answer:
      "Yes. Prices are per person on twin sharing, and solo, couple and small team options are available on request. Mention the number of people in your enquiry.",
  },
  {
    question: "Will I know the property and WiFi speed before I pay?",
    answer:
      "Yes. Before you confirm, we share the property details, real photos and the work setup, so you know exactly where you'll be staying and working.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqsData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function ContactUs() {
  return (
    <>
      <Script
        id="contact-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className={styles.contact_section}>
        <div className="container">
          <div className={styles.contact_grid}>
            <div className={styles.contact_info}>
              <SectionHeading
                as="h1"
                titleSize="title_1"
                label="CONTACT US"
                title="Plan your workation in Dharamshala"
                description="Tell us your dates and how you like to work. We'll match you with a vetted mountain stay with fast WiFi, meals and a proper workspace, and send you a quote within a few hours."
                className={styles.heading}
              />

              <ul className={styles.contact_list}>
                {contactItems.map((item) => {
                  const content = (
                    <>
                      <span className={styles.contact_icon}>{item.icon}</span>
                      <span className={styles.contact_text}>
                        <span className={`font_mono fw_500 body_2 ${styles.contact_label}`}>
                          {item.label.toUpperCase()}
                        </span>
                        <span className={`font_body fw_400 heading_5 ${styles.contact_value}`}>
                          {item.value}
                        </span>
                      </span>
                    </>
                  );

                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className={styles.contact_item}
                        >
                          {content}
                        </a>
                      ) : (
                        <div className={styles.contact_item}>{content}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className={styles.form_card}>
              <h2 className={`font_heading fw_400 heading_2 ${styles.form_title}`}>
                Send us an enquiry
              </h2>
              <p className={`font_body fw_400 body_1 ${styles.form_note}`}>
                Free, no commitment. Fields marked <span>*</span> are required. See our{" "}
                <Link href="/policies">booking &amp; cancellation policy</Link>.
              </p>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      <BookingSteps />

      <FaqSection faqs={faqsData} label="BOOKING FAQS" title="Before you book" />
    </>
  );
}
