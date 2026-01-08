import PageBanner from '@/Components/Banners/PageBanner';
import styles from '../../styles/Pages/Contact.module.scss';

export default function ContactUs() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        description={'5-day Art Retreats Dharamshala, Himachal Pradesh'}
      />

      <section className={styles.contact_info}>
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
            <p>+91 XXXXX XXXXX</p>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              ✉️
            </div>
            <h3>Our Email</h3>
            <p>hello@workationdharamshala.in</p>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              ⏰
            </div>
            <h3>Opening Hours</h3>
            <p>Mon – Fri, 9 AM to 6 PM</p>
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
