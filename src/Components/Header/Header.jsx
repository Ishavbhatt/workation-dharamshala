'use client'
import { useState } from 'react'
import styles from './Header.module.scss'
import Button from '../Button/Button'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link href='/' >
              <Image src='/logo/logo-vertical.png' height={66} width={220} alt='Workation Dharamshala logo' />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav}>
            <a href="/">Home</a>
            <a href="/workation-packages">Workation</a>
            <a href="/about">About</a>
            <a href="/contact-us">Contact</a>
          </nav>

<div className={styles.whatsapp_btn}>

          <Button
            href="https://wa.me/+918219703715"
            variant="primary"
            target={"_blank"}
          >
            WhatsApp Us
          </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={styles.menuBtn}
            onClick={() => setOpen(true)}
            aria-label="Open Menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Overlay */}
      {open && (
        <div
          className={styles.overlay}
          onClick={() => setOpen(false)}
        />
      )}

      {/* Slide Menu */}
      <aside className={`${styles.mobileMenu} ${open ? styles.show : ''}`}>
        <button
          className={styles.closeBtn}
          onClick={() => setOpen(false)}
          aria-label="Close Menu"
        >
          ✕
        </button>

        <nav>
          <a href="/" onClick={() => setOpen(false)}>Home</a>
          <a href="/workation-packages" onClick={() => setOpen(false)}>Workation</a>
          <a href="/about" onClick={() => setOpen(false)}>About</a>
          <a href="/contact-us" onClick={() => setOpen(false)}>Contact</a>
        </nav>

        <Button
          href="https://wa.me/+918219703715"
          variant="primary"
          target={"_blank"}
        >
          WhatsApp Us
        </Button>
      </aside>
    </>
  )
}
