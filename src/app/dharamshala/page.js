import BookingSteps from "@/Components/BookingSteps/BookingSteps";
import { packages, packageFeatures, PRICE_NOTE, formatPrice } from "@/Data/pricingData";
import BestAreas from "@/Components/BestAreas/BestAreas";
import Icons from '@/Components/Icons/Icons';
import styles from '../../styles/Pages/Dharamshala.module.scss';
import SectionHeading from '@/Components/SectionHeading/SectionHeading';
import Link from "next/link";
import Image from 'next/image';
import Button from '@/Components/Button/Button';
import Communities from '@/Components/AudienceSection/Communities';
import BestTimeToVisit from '@/Components/Season/BestTimeToVisit';
import FaqSection from '@/Components/FaqSection/FaqSection';

const pageTitle = "Workation in Dharamshala | Stays, Prices & Best Areas";
const pageDescription =
  "Plan a workation in Dharamshala: work-friendly stays with fast WiFi, 1-week to 1-month packages, best areas, how to reach and the best time to visit.";

export const metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://workationdharamshala.in/dharamshala",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://workationdharamshala.in/dharamshala",
    images: [
      {
        url: "https://workationdharamshala.in/images/workation-dharamshala.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Dharamshala() {

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
      "answer": "Every package includes a private room, high-speed WiFi and a work area. Premium stays also include 3 meals a day and power backup. Laundry, airport pickup and weekend tours can be arranged on request, where the property offers them."
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

  return (


    <>
      <section className={styles.dharamshala_intro_section}>
        <div className="container">
          <div className={styles.intro_banner}>
            <Image
              src="/images/workation-dharamshala.webp"
              alt="Workation in Dharamshala with Himalayan mountain views"
              fill
              priority
              sizes="(max-width: 1100px) 100vw, 1100px"
              className={styles.banner_image}
            />
            <div className={styles.banner_overlay}></div>
            <div className={styles.banner_content}>
              <div className={styles.sub_heading_wrapper}>
                <span className={`font_mono fw_500 body_2 ${styles.sub_heading}`}>
                  DHARAMSHALA
                </span>
                <span className={styles.line}></span>
              </div>
              <h1 className={`font_heading fw_400 title_2 ${styles.banner_title}`}>
                Escape the noise. Work from Dharamshala
              </h1>

              <div className={styles.banner_cta}>
                <Button
              href="/contact-us"
                  variant="primary"
                  icon={
                    <Icons
                      name="arrowTopRight"
                      size={18}
                      color="#fff"
                    />
                  }
                  iconPosition="right"
                >
                  Plan your escape
                </Button>

                <Button
              href="#pricing"
                  variant="white"
                  icon={
                    <Icons
                      name="arrowTopRight"
                      size={18}
                    />
                  }
                  iconPosition="right"
                >
                  View plans
                </Button>

              </div>
            </div>
          </div>

          <div className={styles.intro_text}>
            <p className={`font_body fw_400 heading_5`}>
              Dharamshala has quietly become one of India’s most peaceful destinations for remote workers, freelancers, founders, and creatives seeking a better balance between work and life.
            </p>
            <p className={`font_body fw_400 heading_5`}>
              Surrounded by mountains, cafés, forests, and slower routines, the town offers an environment where productivity feels calmer and everyday life feels lighter.
            </p>
            <p className={`font_body fw_400 heading_5`}>
              From reliable WiFi and long-stay accommodations to co-working spaces and weekend escapes, Dharamshala makes remote living feel simple, inspiring, and deeply refreshing.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.why_dharamshala_section}>
        <div className="container">

          <div className={styles.why_dharamshala_content}>
            <div className={styles.sub_heading_wrapper}>
              <span className={`font_mono fw_500 body_2 ${styles.sub_heading}`}>
                WHY DHARAMSHALA
              </span>

              <span className={styles.line}></span>
            </div>
            <h2 className={`font_heading fw_400 title_2 ${styles.why_dharamshala_title}`}>
              Workation in Dharamshala, most loved place by remote workers
            </h2>
            <p className={`font_body fw_400 heading_5 ${styles.why_dharamshala_description}`}>
              Mountains, cafés and a slower pace of life, with everything you need to work well.
              Here's why remote workers keep choosing Dharamshala for long stays.
            </p>
          </div>

          <div className={styles.features_grid}>
            {[
              {
                icon: "featureWifi",
                title: "Fast, reliable Wi-Fi",
                description:
                  "High-speed Wi-Fi at every stay we recommend, checked by us first, so video calls and uploads run smoothly.",
              },
              {
                icon: "featurePower",
                title: "Power backup",
                description:
                  "Our premium stays have power backup, so short power cuts in the hills don't interrupt your workday.",
              },
              {
                icon: "featureMountain",
                title: "Mountain views",
                description:
                  "Wake up to the snow line of the Dhauladhars and step out into fresh mountain air between meetings.",
              },
              {
                icon: "featureCafe",
                title: "Café culture",
                description:
                  "McLeodganj, Bhagsu and Dharamkot are full of laptop-friendly cafés for a change of scene.",
              },
              {
                icon: "featureClimate",
                title: "Cool climate",
                description:
                  "Pleasant summers and crisp winters make it easy to stay focused, far from the city heat.",
              },
              {
                icon: "featureSupport",
                title: "Local trust & support",
                description:
                  "We live in Dharamshala and are a WhatsApp message away for pickups, plans and anything you need.",
              },
            ].map((item, index) => (
              <div key={index} className={styles.feature_card}>

                <Icons
                  name={item.icon}
                  size={44}
                  strokeWidth={1.6}
                  color="#3D7745"
                />

                <h3 className={`font_heading fw_400 heading_3 ${styles.feature_title}`}>
                  {item.title}
                </h3>

                <p className={`font_body fw_400 body_1 ${styles.feature_description}`}>
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      <BestAreas />

      <Communities />

      <section className={styles.process_section}>
        <div className="container">

          <SectionHeading
            label="HOW WE PLAN IT"
            title="We carefully plan your workation in Dharamshala"
          />

          <div className={styles.process_wrapper}>

            {[
              {
                number: "01",
                title: "Discovery call",
                description:
                  "30 minutes on WhatsApp to understand your work hours, budget, dietary needs and travel dates.",
              },
              {
                number: "02",
                title: "Stay matchmaking",
                description:
                  "We match you with the stay that fits your work setup, budget and vibe, from a cosy homestay to a premium property with meals included.",
              },
              {
                number: "03",
                title: "Arrival & onboarding",
                description:
                  "A warm welcome at your stay plus local tips on cafés, SIM cards and getting around. Airport or station pickup on request.",
              },
              {
                number: "04",
                title: "Weekend planning",
                description:
                  "Help planning your weekends: Triund, paragliding, sightseeing and Naddi sunsets. Tours and activities on request.",
              },
              {
                number: "05",
                title: "Slow exit",
                description:
                  "Easy check-out, laundry where the property offers it and an airport or station drop on request. Want to stay longer? We'll help you extend.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={styles.process_item}
              >

                <div className={styles.process_number}>
                  <span className={`font_mono fw_500 body_1`}>
                    {item.number}
                  </span>
                </div>

                <div className={styles.process_content}>

                  <div className={styles.process_title_wrapper}>

                    <h3 className={`font_heading fw_400 heading_3 ${styles.process_title}`}>
                      {item.title}
                    </h3>

                    <Icons
                      name="phone"
                      size={18}
                      color="#171717"
                    />

                  </div>

                  <p className={`font_body fw_400 heading_5 ${styles.process_description}`}>
                    {item.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      <section className={styles.included_section}>
        <div className="container">

          <SectionHeading
            label="EVERYTHING INCLUDED"
            title="No spreadsheets, no surprises"
            description="Your stay, work setup and local support in one package. Meals, laundry, pickups and weekend trips are arranged where the property offers them, so the only decision left is which café to write from."
          />

          <div className={styles.included_grid}>

            <div className={styles.image_wrapper}>

              <Image
                src="/images/mountain-stay.webp"
                alt="Workation community"
                fill
                sizes="(max-width: 768px) 100vw, 550px"
                className={styles.included_image}
              />

            </div>

            <div className={styles.included_content}>

              {[
                { text: "Private room in a peaceful mountain stay" },
                { text: "Work area & high-speed Wi-Fi" },
                { text: "3 healthy meals a day", note: "At premium stays" },
                { text: "Power backup", note: "At premium stays" },
                { text: "Laundry", note: "On request, where the property offers it" },
                { text: "Weekend trips & activities", note: "On request", href: "/tours" },
                { text: "Airport / bus station pickup & drop", note: "On request" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={styles.included_item}
                >

                  <Icons
                    name="check"
                    size={24}
                    color="#171717"
                  />

                  <span className={styles.item_body}>
                    <span className={`font_body fw_400 heading_3 ${styles.item_text}`}>
                      {item.href ? <Link href={item.href}>{item.text}</Link> : item.text}
                    </span>
                    {item.note && (
                      <span className={`font_mono fw_500 ${styles.item_note}`}>
                        {item.note.toUpperCase()}
                      </span>
                    )}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      <section id="pricing" className={styles.pricing_section}>
        <div className="container">

          <SectionHeading
            label="PRICING"
            title="Stay a week. or stay the season"
          />

          <div className={styles.pricing_grid}>

            {packages.map((item) => (
              <div
                key={item.id}
                className={`${styles.pricing_card} ${item.featured ? styles.featured_card : ""}`}
              >

                <div className={styles.card_top}>

                  <div className={styles.card_heading}>

                    <span className={`font_mono fw_500 body_2 ${styles.card_tag}`}>
                      {item.tag}
                    </span>

                    {item.featured && (
                      <span className={`font_mono fw_500 ${styles.popular_badge}`}>
                        POPULAR
                      </span>
                    )}

                  </div>

                  <h3 className={`font_heading fw_400 heading_3 ${styles.card_title}`}>
                    {item.title}
                  </h3>

                  <h4 className={`font_heading fw_700 heading_1 ${styles.card_price}`}>
                    {formatPrice(item.from)} – {formatPrice(item.to)}
                  </h4>

                </div>

                <div className={styles.card_features}>

                  {packageFeatures.map((feature, idx) => (
                    <div
                      key={idx}
                      className={styles.feature_item}
                    >

                      <Icons
                        name="check"
                        size={18}
                        color={item.featured ? "#ffffff" : "#171717"}
                      />

                      <span className={`font_body fw_400 heading_5`}>
                        {feature}
                      </span>

                    </div>
                  ))}

                </div>

                <div className={styles.note_box}>
                  <p className={`font_body fw_400 body_2`}>
                    {item.note}
                  </p>
                </div>

                <Button
              href="/contact-us"
                  variant={item.featured ? "white" : "primary"}
                  icon={
                    <Icons
                      name="arrowTopRight"
                      size={18}
                      color={item.featured ? "#171717" : "#ffffff"}
                    />
                  }
                  iconPosition="right"
                >
                  Plan your escape
                </Button>

              </div>
            ))}

          </div>

          <p className={`font_body fw_400 body_2 ${styles.pricing_note}`}>
            {PRICE_NOTE}
          </p>


          <div className={styles.custom_experience_section}>
            <div className="container">
              <div className={styles.custom_experience}>

                <div className={styles.custom_content}>
                  <h3 className={`font_heading fw_400 title_2 ${styles.custom_title}`}>
                    Build your own experience
                  </h3>

                  <p className={`font_body fw_400 heading_4 ${styles.custom_description}`}>
                    Flexible stays, custom durations, workspace preferences, and local
                    experiences - tailored around your remote lifestyle.
                  </p>
                </div>

                <div className={styles.custom_actions}>

                  <Button
                    href="/contact-us"
                    variant="white"
                    icon={
                      <Icons
                        name="arrowTopRight"
                        size={20}
                      />
                    }
                    iconPosition="right"
                  >
                    Customize your workation
                  </Button>

                  <Button
                    href="tel:+918219703715"
                    variant="white_outline"
                    icon={
                      <Icons
                        name="phone"
                        size={18}
                      />
                    }
                    iconPosition="left"
                  >
                    (+91) 82197-03715
                  </Button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingSteps />

      <section className={styles.reach_section}>
        <div className="container">

          <div className={styles.reach_heading}>
            <div className={styles.sub_heading_wrapper}>
              <span className={`font_mono fw_500 body_2 ${styles.sub_heading}`}>
                HOW TO REACH
              </span>

              <span className={styles.line}></span>
            </div>

            <h2 className={`font_heading fw_400 title_2 ${styles.reach_title}`}>
              How to reach Dharamshala
            </h2>
          </div>

          <div className={styles.reach_grid}>

            {/* By Bus */}
            <div className={styles.reach_card}>
              <h3 className={`font_heading fw_400 heading_2 ${styles.card_title}`}>
                By bus
              </h3>

              <div className={`font_body fw_400 heading_5 ${styles.card_description}`}>
                <p>
                  Dharamshala is well connected to major North Indian cities
                  including Delhi and Chandigarh through overnight Volvo and
                  private buses. Most travelers prefer buses for their convenience,
                  affordability, and direct connectivity to the mountains.
                </p>

                <p>
                  Volvo buses from Delhi usually take around 10–12 hours and arrive
                  at McLeodganj or Dharamshala bus stand early in the morning.
                  Private taxis are also available from nearby cities for a more
                  comfortable journey.
                </p>
              </div>
            </div>

            {/* By Train */}
            <div className={styles.reach_card}>
              <h3 className={`font_heading fw_400 heading_2 ${styles.card_title}`}>
                By train
              </h3>

              <div className={`font_body fw_400 heading_5 ${styles.card_description}`}>
                <p>
                  The nearest major railway station is Pathankot, located around
                  85 km from Dharamshala. From Pathankot, you can continue your
                  journey by taxi or local bus, which usually takes around 3–4 hours.
                </p>

                <p>
                  For travelers coming from different parts of India, trains to
                  Pathankot offer a convenient and budget-friendly option before
                  heading into the Himalayas.
                </p>
              </div>
            </div>

            {/* By Air */}
            <div className={styles.reach_card}>
              <h3 className={`font_heading fw_400 heading_2 ${styles.card_title}`}>
                By air
              </h3>

              <div className={`font_body fw_400 heading_5 ${styles.card_description}`}>
                <p>
                  The nearest airport is Kangra Airport (DHM), also known as Gaggal
                  Airport, located approximately 15 km from Dharamshala. Regular
                  flights operate from Delhi and a few other major cities.
                </p>

                <p>
                  After landing, taxis are easily available to reach Dharamshala,
                  McLeodganj, or nearby villages. For international travelers,
                  Delhi serves as the primary connecting airport before flying to
                  Dharamshala.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      <BestTimeToVisit />

      <FaqSection faqs={faqsData} />

    </>
  );
}
