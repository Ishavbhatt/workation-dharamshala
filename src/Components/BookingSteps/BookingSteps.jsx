import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./BookingSteps.module.scss";

const defaultSteps = [
    {
        number: "01",
        title: "Send a message",
        description: "WhatsApp us your dates, work hours and what kind of stay you'd like.",
    },
    {
        number: "02",
        title: "Quick discovery call",
        description: "30-minute call to lock the right property and finalise add-ons.",
    },
    {
        number: "03",
        title: "Confirm with 30%",
        description: "Pay 30% to block your stay. Balance is due 7 days before check-in.",
    },
    {
        number: "04",
        title: "Arrive & unpack",
        description: "We meet you at the airport / station and walk you in.",
    },
];

export default function BookingSteps({
    label = "HOW TO BOOK",
    title = "Booked in 4 easy steps",
    steps = defaultSteps,
}) {
    return (
        <section className={styles.booking_steps_section}>
            <div className="container">
                <SectionHeading label={label} title={title} />

                <div className={styles.booking_steps}>
                    {steps.map((step) => (
                        <div className={styles.booking_step} key={step.number}>
                            <div className={styles.step_number}>
                                <span className="font_mono fw_500 body_2">{step.number}</span>
                            </div>

                            <div className={styles.step_content}>
                                <h3 className={`font_heading fw_400 heading_3 ${styles.step_title}`}>
                                    {step.title}
                                </h3>
                                <p className={`font_body fw_400 heading_5 ${styles.step_description}`}>
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
