import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Top */}
        <div className={styles.footerTop}>

          {/* Brand */}
          <div className={styles.brand}>
            <h3>Workation Dharamshala</h3>
            <p>
              Curated long-stay workation experiences in the Himalayas for
              professionals who value focus, comfort, and calm.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.links}>
            <span>Quick Links</span>
            <a href="/">Home</a>
            <a href="/workation-packages">Workation Packages</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>

          {/* Address + Contact */}
          <div className={styles.contact}>
            <span>Our Address</span>
            <p>
              Dharamshala <br />
              Himachal Pradesh, India
            </p>

            <span className={styles.contactTitle}>Our Contact</span>
            <a href="https://wa.me/919418249045">+91 9418249045</a>
            <a href="mailto:hello@workationdharamshala.in">
              hello@workationdharamshala.in
            </a>
          </div>

          {/* Social */}
          <div className={styles.social}>
            <span>Follow Us On</span>
            <p>
              Slow travel, mindful work, and Himalayan living.
            </p>

            {/* <div className={styles.socialIcons}>
              <a href="#" aria-label="Facebook">Fb</a>
              <a href="#" aria-label="Twitter">Tw</a>
              <a href="#" aria-label="Instagram">Ig</a>
              <a href="#" aria-label="Website">Web</a>
            </div> */}
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom */}
        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} Workation Dharamshala</p>
          <p>Designed for slow work & meaningful stays</p>
        </div>

      </div>
    </footer>
  )
}
