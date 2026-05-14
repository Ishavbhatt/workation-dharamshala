'use client'
import { useState } from 'react'
import styles from './Header.module.scss'
import Button from '../Button/Button'
import Image from 'next/image'
import Link from 'next/link'
import Icons from '../Icons/Icons'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className={styles.header}>
        {/* TOP BAR */}
        <div className={styles.top_bar}>
          <div className="container">

            <div className={styles.top_bar_grid}>

              {/* LEFT */}
              <p className={`fw_400 body_1 ${styles.tagline}`}>
                Work, Stay, Slow Down
              </p>

              {/* CENTER LOGO */}
              <Link href="/" className={styles.logo}>
                <Image
                  src="/logo/workation-dharamshala-logo-new.svg"
                  alt="Workation Dharamshala"
                  width={197}
                  height={40}
                  priority
                />
              </Link>
              <div className={styles.whatsapp_btn}>
                <Button
                  href="https://wa.me/918219703715"
                  target="_blank"
                  variant="primary"
                  icon={
                    <Icons
                      name="whatsappOutline"
                      color="#fff"
                      size={20}
                    />
                  }
                  iconPosition="left"
                >
                  WhatsApp Us
                </Button>
              </div>

              {/* MOBILE MENU BTN */}
              <button
                className={styles.menu_btn}
                onClick={() => setOpen(true)}
                aria-label="Open Menu"
              >
                <span></span>
                <span></span>
              </button>

            </div>

          </div>
        </div>

        {/* BOTTOM NAV */}
        <div className={styles.bottom_bar}>
          <div className="container">

            <nav className={styles.desktop_nav}>
              <Link href="/">Dharamshala</Link>
              <Link href="/">Experiences</Link>
              <Link href="/">Guides</Link>
              <Link href="/">Pricing</Link>
              <Link href="/">Story</Link>
              <Link href="/">Contact</Link>
            </nav>

          </div>
        </div>

      </header>

      {/* MOBILE MENU */}
      <aside className={`${styles.mobile_menu} ${open ? styles.show : ""}`}>

        <div className={styles.mobile_menu_top}>

          <Link href="/" className={styles.mobile_logo}>
            <Image
              src="/logo/workation-dharamshala-logo-white.svg"
              alt="Workation Dharamshala"
              width={177}
              height={36}
            />
          </Link>

          <button
            className={styles.close_btn}
            onClick={() => setOpen(false)}
            aria-label="Close Menu"
          >
            ✕
          </button>

        </div>

        <nav className={styles.mobile_nav}>
          <Link href="/" onClick={() => setOpen(false)}>
            Dharamshala
          </Link>

          <Link href="/" onClick={() => setOpen(false)}>
            Experiences
          </Link>

          <Link href="/" onClick={() => setOpen(false)}>
            Guides
          </Link>

          <Link href="/" onClick={() => setOpen(false)}>
            Story
          </Link>

          <Link href="/" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </nav>

        <div className={styles.mobile_bottom}>
          <h4 className="font_body fw_400 heading_3">
            Connect
          </h4>

          <Link href="tel:+918219703715" style={{ marginBottom: '8px' }}>
            (+91) 82197-03715
          </Link>

          <Link href="mailto:ishavbhattkhaniyara@gmail.com">
            ishavbhattkhaniyara@gmail.com
          </Link>

          <div className={styles.mobile_socials}>

            <Link
              href="https://www.facebook.com/workationdharamshala/"
              target="_blank"
              aria-label="Facebook"
            >
              <Icons
                name="facebook"
                size={28}
                color="#fff"
              />
            </Link>

            <Link
              href="https://www.instagram.com/workationdharamshala/"
              target="_blank"
              aria-label="Instagram"
            >
              <Icons
                name="instagram"
                size={28}
                color="#fff"
              />
            </Link>

          </div>
        </div>
      </aside>
    </>
  )
}
