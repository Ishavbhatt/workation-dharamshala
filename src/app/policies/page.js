import Link from "next/link";
import styles from "../../styles/Pages/Policies.module.scss";
import SectionHeading from "@/Components/SectionHeading/SectionHeading";
import CtaBanner from "@/Components/CtaBanner/CtaBanner";
import { SITE_URL } from "@/lib/blogs";

const LAST_UPDATED = "9 November 2026";

const pageTitle = "Booking, Cancellation & Privacy Policy | Workation Dharamshala";
const pageDescription =
  "Booking, payment, cancellation and privacy terms for Workation Dharamshala. 30% advance to confirm, full refund of advance up to 14 days before check-in.";

export const metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${SITE_URL}/policies` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${SITE_URL}/policies`,
    images: [{ url: `${SITE_URL}/images/workation-dharamshala.webp`, width: 1200, height: 630 }],
  },
};

const cancellationSummary = [
  { when: "14 days or more before check-in", refund: "Full refund of advance" },
  { when: "7 – 13 days before check-in", refund: "50% of advance refunded" },
  { when: "Less than 7 days, or no-show", refund: "No refund" },
];

const sections = [
  {
    id: "booking-payment",
    title: "Booking & payment",
    content: (
      <>
        <p>
          Sending an enquiry is free and doesn&apos;t commit you to anything. Once we&apos;ve
          matched you with a stay and you&apos;re happy with it, here&apos;s how payment works:
        </p>
        <ul>
          <li>
            <strong>30% advance</strong> confirms and blocks your stay.
          </li>
          <li>
            The <strong>remaining 70%</strong> is due 7 days before your check-in date.
          </li>
          <li>
            Package prices are <strong>per person on twin sharing</strong>. Solo and couple
            options are available on request and quoted separately.
          </li>
          <li>
            You&apos;ll receive a written confirmation on WhatsApp or email with your property,
            dates, inclusions and amount paid.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "cancellation-refunds",
    title: "Cancellation & refunds",
    content: (
      <>
        <p>
          Plans change. We keep cancellation simple and based on how many days before check-in
          you tell us:
        </p>
        <ul>
          <li>
            <strong>14 days or more before check-in:</strong> full refund of your advance.
          </li>
          <li>
            <strong>7 to 13 days before check-in:</strong> 50% of your advance is refunded.
          </li>
          <li>
            <strong>Less than 7 days before check-in, or a no-show:</strong> no refund.
          </li>
        </ul>
        <p>
          To cancel, message us on WhatsApp or email us. The date we receive your message is
          used to calculate the refund. Approved refunds are sent to your original payment
          method within 7–10 working days.
        </p>
      </>
    ),
  },
  {
    id: "date-changes",
    title: "Changing your dates",
    content: (
      <>
        <p>
          You can change your dates <strong>once, free of charge</strong>, if you tell us at
          least 7 days before check-in. New dates depend on availability, and any difference in
          price (for example, a longer stay or peak season) is adjusted.
        </p>
        <p>
          If you leave earlier than planned, unused nights are not refunded, but let us know and
          we&apos;ll always try to help.
        </p>
      </>
    ),
  },
  {
    id: "if-we-cancel",
    title: "If we need to cancel",
    content: (
      <p>
        In the rare case that we or a partner property can&apos;t host you, we&apos;ll offer
        you an alternative stay of the same or better standard. If that doesn&apos;t work for
        you, you get a <strong>full refund of everything you&apos;ve paid</strong>.
      </p>
    ),
  },
  {
    id: "weather-travel",
    title: "Weather & travel disruptions",
    content: (
      <p>
        The Himalayas can be unpredictable, especially during the monsoon. If heavy rain,
        landslides or road closures make it unsafe or impossible to reach Dharamshala on your
        dates, we&apos;ll work with you to move your stay to new dates without any change
        fee.
      </p>
    ),
  },
  {
    id: "wifi-power",
    title: "WiFi & power",
    content: (
      <p>
        Every stay we work with has high-speed WiFi and power backup, and we check them before
        recommending a property. Occasional outages caused by the service provider or weather
        are outside our control, but if one affects your work we&apos;ll help you find a
        nearby co-working space or café to keep you going.
      </p>
    ),
  },
  {
    id: "house-rules",
    title: "Check-in & house rules",
    content: (
      <ul>
        <li>
          A valid government photo ID is required at check-in for every guest. Foreign
          nationals need a passport and valid visa.
        </li>
        <li>
          Each property has its own check-in / check-out times and house rules. We share these
          with your confirmation.
        </li>
        <li>
          Please respect the property, neighbours and quiet hours. Any damage caused during your
          stay may be charged.
        </li>
        <li>
          Our stays are shared with other remote workers and local hosts, so we ask everyone to
          help keep them calm, clean and friendly.
        </li>
      </ul>
    ),
  },
  {
    id: "privacy",
    title: "Privacy",
    content: (
      <>
        <p>
          When you send an enquiry we collect your name, phone number, email (optional), travel
          dates, group size, budget and any message you write.
        </p>
        <ul>
          <li>We use it only to reply to you and arrange your stay.</li>
          <li>
            We share the details needed for your booking only with the partner property you
            choose.
          </li>
          <li>We never sell your information or use it for unrelated marketing.</li>
          <li>
            You can ask us to see, correct or delete your information at any time by emailing{" "}
            <a href="mailto:ishavbhattkhaniyara@gmail.com">ishavbhattkhaniyara@gmail.com</a>.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "contact",
    title: "Questions?",
    content: (
      <p>
        If anything here is unclear, just ask before you book. WhatsApp or call us on{" "}
        <a href="https://wa.me/918219703715" target="_blank" rel="noopener noreferrer">
          (+91) 82197-03715
        </a>{" "}
        or use our <Link href="/contact-us">contact page</Link>.
      </p>
    ),
  },
];

export default function PoliciesPage() {
  return (
    <>
      <section className={styles.policies_section}>
        <div className="container">
          <SectionHeading
            as="h1"
            titleSize="title_1"
            label="POLICIES"
            title="Booking, cancellation & privacy"
            description="Simple, honest terms so you know exactly what to expect before you pay anything."
          />
          <p className={`font_mono fw_500 body_2 ${styles.updated}`}>
            LAST UPDATED: {LAST_UPDATED.toUpperCase()}
          </p>

          {/* Cancellation at a glance */}
          <div className={styles.summary_card}>
            <h2 className={`font_heading fw_400 heading_3 ${styles.summary_title}`}>
              Cancellation at a glance
            </h2>
            <div className={styles.summary_grid}>
              {cancellationSummary.map((row) => (
                <div className={styles.summary_item} key={row.when}>
                  <span className={`font_mono fw_500 body_2 ${styles.summary_when}`}>
                    {row.when.toUpperCase()}
                  </span>
                  <span className={`font_heading fw_400 heading_4 ${styles.summary_refund}`}>
                    {row.refund}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.policies_layout}>
            <nav className={styles.toc} aria-label="On this page">
              <span className={`font_mono fw_500 body_2 ${styles.toc_label}`}>ON THIS PAGE</span>
              <ul>
                {sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="font_body fw_400 body_1">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.policies_content}>
              {sections.map((s) => (
                <section id={s.id} key={s.id} className={styles.policy_block}>
                  <h2 className="font_heading fw_400 heading_2">{s.title}</h2>
                  {s.content}
                </section>
              ))}

              <CtaBanner
                className={styles.cta}
                title="Happy with the terms? Let's plan your stay."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
