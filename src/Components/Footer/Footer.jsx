import Image from 'next/image'
import styles from './Footer.module.scss'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Top */}
        <div className={styles.footerTop}>

          {/* Brand */}
          <div className={styles.brand}>
            <h3>Workation Dharamshala</h3>

            {/* <Image src='/logo/logo-vertical.png' height={100} width={200} alt='log' /> */}

            <Link href='/' >
              <Image src='/logo/logo-vertical.png' height={66} width={220} alt='Workation Dharamshala logo' />
            </Link>

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
            <a href="/contact-us">Contact</a>
          </div>

          {/* Address + Contact */}
          <div className={styles.contact}>
            <span>Our Address</span>
            <p>
              Dharamshala <br />
              Himachal Pradesh, India
            </p>

            <span className={styles.contactTitle}>Our Contact</span>
            <a href="tel:+918219703715">+91 8219703715</a>
            <a href="mailto:ishavbhattkhaniyara@gmail.com">
              ishavbhattkhaniyara@gmail.com
            </a>
          </div>

          {/* Social */}
          <div className={styles.social}>
            <span>Follow Us On</span>
            <p>
              Slow travel, mindful work, and Himalayan living.
            </p>

            <div className={styles.socialIcons}>
              <a href="https://www.facebook.com/workationdharamshala" aria-label="Facebook">Fb</a>
              <a href="https://www.instagram.com/workationdharamshala/" aria-label="Instagram">Ig</a>
            </div>
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
