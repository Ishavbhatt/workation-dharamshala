import PageBanner from '@/Components/Banners/PageBanner';
import styles from '../../styles/Pages/Contact.module.scss';
import Image from 'next/image';
import ContactForm from '@/Components/Forms/ContactForm';

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
                📍
              </div>
              <h3>Our Address</h3>
              <p>Dharamshala, Himachal Pradesh</p>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                📞
              </div>
              <h3>Our Phone</h3>
              <p>+91 8219703715</p>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                ✉️
              </div>
              <h3>Our Email</h3>
              <p>ishavbhattkhaniyara@gmail.com</p>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                ⏰
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.98881639777!2d76.36683277589822!3d32.20453201302182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b537793813fd9%3A0x530ff4e5477468cc!2sDharamshala%20Retreat!5e0!3m2!1sen!2sin!4v1759852213223!5m2!1sen!2sin&maptype=satellite"

          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        >
        </iframe>
      </div>
    </>
  );
}
