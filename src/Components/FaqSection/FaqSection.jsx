"use client";

import Collapse, { ToggleIcon } from "../Collapse/Collapse";
import { useState } from "react";

import styles from "./FaqSection.module.scss";

import Icons from "../Icons/Icons";
import SectionHeading from "../SectionHeading/SectionHeading";

export default function FaqSection({
    faqs,
    label = "FAQS",
    title = "General Asked Questions",
}) {

    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <section className={styles.faq_section}>
            <div className="container">

                <SectionHeading
                    label={label}
                    title={title}
                />

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
                                    aria-expanded={isActive}
                                    aria-controls={`faq-answer-${index}`}
                                >

                                    <span className={`font_body fw_400 heading_3 ${styles.question_text}`}>
                                        {faq.question}
                                    </span>

                                    <span className={styles.icon}>
                                        <ToggleIcon open={isActive}>
                                            <Icons name="plus" size={22} />
                                        </ToggleIcon>
                                    </span>

                                </button>

                                <Collapse open={isActive} id={`faq-answer-${index}`}>
                                    <div className={styles.faq_answer}>
                                        <p className={`font_body fw_400 heading_5`}>
                                            {faq.answer}
                                        </p>
                                    </div>
                                </Collapse>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}