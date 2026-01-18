import PageBanner from '@/Components/Banners/PageBanner';
import styles from '../../styles/Pages/Contact.module.scss';
import Image from 'next/image';
import ContactForm from '@/Components/Forms/ContactForm';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import Link from 'next/link';

export const metadata = {
  title: "Contact Workation Dharamshala | Book Your Workation Stay",
  description:
    "Get in touch with Workation Dharamshala to check availability, pricing, and bookings for work-from-mountains stays in Dharamshala. WhatsApp us today.",
  alternates: {
    canonical: "https://workationdharamshala.in/workation-packages",
  },
  openGraph: {
    title: "Contact Workation Dharamshala | Book Your Workation Stay",
    description:
      "Get in touch with Workation Dharamshala to check availability, pricing, and bookings for work-from-mountains stays in Dharamshala. WhatsApp us today.",
    url: "https://workationdharamshala.in/",
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

export default function ContactUs() {
  return (
    <>
      <PageBanner
        title="Contact Us"
      // description={'5-day Art Retreats Dharamshala, Himachal Pradesh'}
      />

      <section className={`${styles.contact_info} common_margin`}>
        <div className='container'>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <FaMapMarkerAlt />
              </div>
              <h3>Our Address</h3>
              <p>Dharamshala, Himachal Pradesh</p>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>
                <FaPhoneAlt />
              </div>
              <h3>Our Phone</h3>
              <p><Link href="tel:+918219703715">+91 8219703715</Link></p>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>
                <FaEnvelope />
              </div>
              <h3>Our Email</h3>
              <p><Link href="mailto:ishavbhattkhaniyara@gmail.com">ishavbhattkhaniyara@gmail.com</Link></p>

            </div>

            <div className={styles.card}>
              <div className={styles.icon}>
                <FaClock />
              </div>
              <h3>Opening Hours</h3>
              <p>Mon – Sun, 9 AM to 6 PM</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.contact_main} common_margin`}>
        <div className={styles.container}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/mountain-stay.webp"
              alt="Get in touch with Workation Dharamshala"
              fill
              className={styles.image}
            />
          </div>
          <div className={styles.formWrapper}>
            <h2>Let's Get In Touch</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <div className={styles.map_wrapper}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27004.27448710275!2d76.298565690255!3d32.21677687975214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b50df65bd7311%3A0x3e08bdb100c6dc10!2sDharamshala%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1768397153316!5m2!1sen!2sin" style={{ border: 0 }}
          allowFullScreen
          loading="lazy">
        </iframe>
      </div>
    </>
  );
}
