"use client";

import { useState } from "react";

import styles from "./FaqSection.module.scss";

import Icons from "../Icons/Icons";

export default function FaqSection({ faqs }) {

    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <section className={styles.faq_section}>
            <div className="container">

                <div className={styles.faq_heading}>

                    <div className={styles.sub_heading_wrapper}>

                        <span className={`font_mono fw_500 body_2 ${styles.sub_heading}`}>
                            FAQS
                        </span>

                        <span className={styles.line}></span>

                    </div>

                    <h2 className={`font_heading fw_400 title_2 ${styles.faq_title}`}>
                        General Asked Questions
                    </h2>

                </div>

                <div className={styles.faq_list}>

                    {faqs.map((faq, index) => {

                        const isActive = openIndex === index;

                        return (
                            <div
                                key={index}
                                className={`${styles.faq_item} ${isActive ? styles.active : ""}`}
                            >

                                <button
                                    className={styles.faq_question}
                                    onClick={() => toggleFAQ(index)}
                                >

                                    <span className={`font_body fw_400 heading_3 ${styles.question_text}`}>
                                        {faq.question}
                                    </span>

                                    <span className={styles.icon}>
                                        <Icons
                                            name={isActive ? "close" : "plus"}
                                            size={22}
                                        />
                                    </span>

                                </button>

                                {isActive && (
                                    <div className={styles.faq_answer}>

                                        <p className={`font_body fw_400 heading_5`}>
                                            {faq.answer}
                                        </p>

                                    </div>
                                )}

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}