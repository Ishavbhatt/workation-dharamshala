'use client';

import Image from "next/image";
import Link from "next/link";

import styles from "./Footer.module.scss";

import Button from "../Button/Button";
import Icons from "../Icons/Icons";

export default function Footer() {

  return (
    <footer className={styles.footer}>

      <div className="container">

        {/* TOP */}
        <div className={styles.footer_top}>

          {/* LEFT */}
          <div className={styles.footer_cta}>

            <h2 className={`font_heading fw_400 title_2 ${styles.footer_title}`}>
              Ready to switch ? <br />
              work from <span>home</span> himalayas
            </h2>

            <Button
              variant="white"
              icon={
                <Icons
                  name="arrowTopRight"
                  size={20}
                />
              }
              iconPosition="right"
            >
              Plan your escape
            </Button>

            <div className={styles.footer_middle}>
              <p className={`font_body fw_400 body_1`}>
                © 2026 • Workation Dharamshala
              </p>

              <Link
                href="/policies"
                className={`font_body fw_400 body_1`}
              >
                Policies
              </Link>

            </div>

          </div>

          {/* CENTER */}
          <div className={styles.footer_links}>

            <Link href="/">Dharamshala</Link>
            <Link href="/">Experiences</Link>
            <Link href="/">Guides</Link>
            <Link href="/">Story</Link>
            <Link href="/">Contact</Link>

          </div>

          {/* RIGHT */}
          <div className={styles.footer_contact}>
            <h4 className={`font_body fw_400 heading_4`}>
              Connect
            </h4>

            <a href="tel:+918219703715">
              (+91) 82197-03715
            </a>

            <a href="mailto:ishavbhattkhaniyara@gmail.com">
              ishavbhattkhaniyara@gmail.com
            </a>

            <div className={styles.social_icons}>
              <a
                href="https://facebook.com"
                target="_blank"
              >
                <Icons
                  name="facebook"
                  size={26}
                />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
              >
                <Icons
                  name="instagram"
                  size={26}
                />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
              >
                <Icons
                  name="linkedin"
                  size={26}
                />
              </a>

              <a
                href="https://reddit.com"
                target="_blank"
              >
                <Icons
                  name="reddit"
                  size={26}
                />
              </a>

            </div>

          </div>

        </div>

        {/* COPYRIGHT */}


        {/* DIVIDER */}
        <div className={styles.divider}></div>

        {/* BOTTOM */}
        <div className={styles.footer_bottom}>

          <Link href="/" className={styles.footer_logo}>

            <Image
              src="/logo/footer-logo.svg"
              alt="Workation Dharamshala"
              width={197}
              height={40}
            />

          </Link>

          <p className={`font_mono fw_400 body_2 ${styles.footer_text}`}>
            CRAFTING LONG-STAY WORKATION EXPERIENCES IN THE HIMALAYAS
            FOR PROFESSIONALS WHO VALUE FOCUS, COMFORT, AND CALM.
          </p>

        </div>

      </div>

    </footer>
  );
}