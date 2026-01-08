'use client'

import { useState } from 'react'
import styles from './Header.module.scss'
import Button from '../Button/Button'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            Workation <span>Dharamshala</span>
          </div>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav}>
            <a href="/">Home</a>
            <a href="/workation-packages">Workation</a>
            <a href="/about">About</a>
            <a href="/contact-us">Contact</a>
          </nav>

          <Button
            href="https://wa.me/91XXXXXXXXXX"
            variant="primary"
          >
            WhatsApp Us
          </Button>

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
          <a href="/contact" onClick={() => setOpen(false)}>Contact</a>
        </nav>

        <Button
          href="https://wa.me/91XXXXXXXXXX"
          variant="primary"
        >
          WhatsApp Us
        </Button>
      </aside>
    </>
  )
}
