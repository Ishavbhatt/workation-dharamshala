import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "../../../styles/Pages/Tours.module.scss";
import toursData, { getTour, getOtherTours } from "@/Data/toursData";
import { SITE_URL } from "@/lib/blogs";
import SectionHeading from "@/Components/SectionHeading/SectionHeading";
import TourCard from "@/Components/Card/TourCard";
import EnquiryForm from "@/Components/Forms/EnquiryForm";
import FaqSection from "@/Components/FaqSection/FaqSection";
import Button from "@/Components/Button/Button";
import Icons from "@/Components/Icons/Icons";

export const dynamicParams = false;

export function generateStaticParams() {
  return toursData.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) return {};

  const url = `${SITE_URL}/tours/${tour.slug}`;
  return {
    title: tour.metaTitle,
    description: tour.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: tour.metaTitle,
      description: tour.metaDescription,
      url,
      images: [{ url: `${SITE_URL}${tour.image}`, width: 1200, height: 630 }],
    },
  };
}

export default async function TourPage({ params }) {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) notFound();

  const url = `${SITE_URL}/tours/${tour.slug}`;
  const otherTours = getOtherTours(slug);
  const whatsappHref = `https://wa.me/918219703715?text=${encodeURIComponent(
    `Hi! I'd like more info about: ${tour.title}.`
  )}`;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      name: tour.title,
      description: tour.metaDescription,
      image: `${SITE_URL}${tour.image}`,
      url,
      touristType: ["Remote workers", "Travellers", "Families"],
      itinerary: {
        "@type": "ItemList",
        itemListElement: tour.itinerary.map((stop, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: stop.title,
          description: stop.description,
        })),
      },
      provider: {
        "@type": "TravelAgency",
        name: "Workation Dharamshala",
        url: SITE_URL,
        telephone: "+91-8219703715",
        areaServed: { "@type": "City", name: "Dharamshala" },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: tour.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Tours & Activities", item: `${SITE_URL}/tours` },
        { "@type": "ListItem", position: 3, name: tour.title, item: url },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HEADER */}
      <section className={styles.tour_header}>
        <div className="container">
          <nav aria-label="Breadcrumb" className={`font_mono fw_500 body_2 ${styles.breadcrumb}`}>
            <Link href="/">HOME</Link>
            <span aria-hidden="true">/</span>
            <Link href="/tours">TOURS & ACTIVITIES</Link>
          </nav>

          <SectionHeading
            as="h1"
            titleSize="title_1"
            label={tour.category}
            title={tour.title}
            description={tour.summary}
            className={styles.tour_heading}
          />

          <div className={styles.header_actions}>
            <Button
              href="#enquire"
              variant="primary"
              icon={<Icons name="arrowTopRight" size={20} />}
              iconPosition="right"
            >
              Check availability
            </Button>
            <Button
              href={whatsappHref}
              target="_blank"
              variant="black"
              icon={<Icons name="whatsappOutline" size={20} />}
              iconPosition="left"
            >
              Ask on WhatsApp
            </Button>
          </div>

          <div className={styles.hero_image}>
            <Image src={tour.image} alt={tour.imageAlt || tour.title} fill priority sizes="(max-width: 1100px) 100vw, 1100px" />
          </div>

          <dl className={styles.facts}>
            {tour.facts.map((fact) => (
              <div className={styles.fact} key={fact.label}>
                <dt className="font_mono fw_500 body_2">{fact.label.toUpperCase()}</dt>
                <dd className="font_body fw_400 heading_5">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* OVERVIEW + ITINERARY */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.overview}>
            <h2 className="font_heading fw_400 title_2">{tour.overviewTitle}</h2>
            {tour.overview.map((para, i) => (
              <p key={i} className="font_body fw_400 heading_5">
                {para}
              </p>
            ))}
          </div>

          <SectionHeading
            label={tour.slug === "dharamshala-sightseeing-taxi" ? "ROUTE" : "ITINERARY"}
            title={tour.itineraryTitle}
          />

          <ol className={styles.itinerary}>
            {tour.itinerary.map((stop, i) => (
              <li className={styles.stop} key={stop.title}>
                <span className={`font_mono fw_500 body_2 ${styles.stop_number}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className={styles.stop_content}>
                  <div className={styles.stop_head}>
                    <h3 className="font_heading fw_400 heading_3">{stop.title}</h3>
                    {stop.time && (
                      <span className={`font_mono fw_500 ${styles.stop_time}`}>{stop.time.toUpperCase()}</span>
                    )}
                  </div>
                  <p className="font_body fw_400 heading_5">{stop.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* EXTRA CONTENT (vehicles, distance, best season…) */}
      {tour.extraSections?.length > 0 && (
        <section className={styles.section}>
          <div className="container">
            <div className={styles.extra_sections}>
              {tour.extraSections.map((block) => (
                <div className={styles.extra_block} key={block.heading}>
                  <h2 className="font_heading fw_400 heading_1">{block.heading}</h2>
                  {block.paragraphs?.map((para, i) => (
                    <p key={i} className="font_body fw_400 heading_5">
                      {para}
                    </p>
                  ))}
                  {block.list?.length > 0 && (
                    <dl className={styles.extra_list}>
                      {block.list.map((item) => (
                        <div key={item.label} className={styles.extra_item}>
                          <dt className="font_heading fw_400 heading_4">{item.label}</dt>
                          <dd className="font_body fw_400 body_1">{item.text}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* INCLUDED */}
      <section className={styles.section}>
        <div className="container">
          <SectionHeading label="GOOD TO KNOW" title={`What's included in your ${tour.shortName}`} />

          <div className={styles.info_grid}>
            <InfoList title="Included" items={tour.included} icon="check" />
            <InfoList title="Not included" items={tour.notIncluded} icon="close" iconColor="#9b6f33" />
            <InfoList title="Things to carry" items={tour.thingsToCarry} icon="plus" />
          </div>
        </div>
      </section>

      {/* ENQUIRY */}
      <section className={styles.section} id="enquire">
        <div className="container">
          <div className={styles.enquiry_grid}>
            <div>
              <SectionHeading
                label="CHECK AVAILABILITY"
                title={`Book your ${tour.shortName}`}
                description="Tell us your preferred date and group size. We'll reply with availability, timings and everything you need to know, usually within a few hours."
              />
              <Button
                href={whatsappHref}
                target="_blank"
                variant="primary"
                icon={<Icons name="whatsappOutline" size={20} />}
                iconPosition="left"
              >
                Ask on WhatsApp
              </Button>
            </div>

            <div className={styles.form_card}>
              <EnquiryForm service={tour.serviceName} />
            </div>
          </div>
        </div>
      </section>

      <FaqSection faqs={tour.faqs} label="FAQS" title={`${tour.cardTitle} FAQs`} />

      {/* MORE TOURS */}
      {otherTours.length > 0 && (
        <section className={styles.section}>
          <div className="container">
            <SectionHeading label="YOU MAY ALSO LIKE" title="More things to do in Dharamshala" />
            <div className={styles.related_grid}>
              {otherTours.map((t) => (
                <TourCard key={t.slug} tour={t} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function InfoList({ title, items, icon, iconColor = "#3d6a43" }) {
  if (!items?.length) return null;
  return (
    <div className={styles.info_card}>
      <h3 className="font_heading fw_400 heading_4">{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item} className="font_body fw_400 body_1">
            <Icons name={icon} size={18} color={iconColor} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
