'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import styles from './Header.module.scss'
import Button from '../Button/Button'
import Image from 'next/image'
import Link from 'next/link'
import Icons from '../Icons/Icons'

import { NAV_LINKS } from '@/Data/navLinks'

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close the mobile menu after navigating, and lock page scroll while it's open.
  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const isActive = (href) => {
    if (href.includes('#')) return false
    return pathname === href || pathname.startsWith(href + '/')
  }

  const renderLinks = (onClick) =>
    NAV_LINKS.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        onClick={onClick}
        className={isActive(link.href) ? styles.active : undefined}
        aria-current={isActive(link.href) ? 'page' : undefined}
      >
        {link.label}
      </Link>
    ))

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

            <nav className={styles.desktop_nav} aria-label="Main">
              {renderLinks()}
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

        <nav className={styles.mobile_nav} aria-label="Main">
          {renderLinks(() => setOpen(false))}
        </nav>

        <div className={styles.mobile_ctas}>
          <Button
            href="/contact-us"
            variant="white"
            icon={<Icons name="arrowTopRight" size={20} />}
            iconPosition="right"
          >
            Plan your stay
          </Button>
          <Button
            href="https://wa.me/918219703715"
            target="_blank"
            variant="white_outline"
            icon={<Icons name="whatsappOutline" size={20} />}
            iconPosition="left"
          >
            WhatsApp us
          </Button>
        </div>

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
