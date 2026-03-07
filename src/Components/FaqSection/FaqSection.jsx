"use client";

import { useState } from "react";
import styles from "./FaqSection.module.scss";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

export default function FaqSection({ faqs }) {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <section className={`${styles.faqSection} common_margin`}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        <span className={styles.kicker}>FAQs</span>
                        <h2>Your Questions Answered</h2>
                        <p>
                            Find quick answers to the most common questions about our
                            workation stays, remote work facilities, and long-stay experience
                            in Dharamshala.
                        </p>
                    </div>

                    <div className={styles.right}>
                        {faqs.map((faq, index) => (
                            <div key={index} className={styles.faqItem}>
                                <button
                                    className={`${styles.question} ${openIndex === index ? styles.activeQuestion : ''}`}
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <span>{faq.question}</span>
                                    {openIndex === index ? (
                                        <LuChevronUp />
                                    ) : (
                                        <LuChevronDown />
                                    )}
                                </button>

                                {openIndex === index && (
                                    <div className={styles.answer}>
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}