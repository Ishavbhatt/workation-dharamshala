import SectionHeading from "../SectionHeading/SectionHeading";
import Button from "../Button/Button";
import Icons from "../Icons/Icons";
import styles from "./CtaBanner.module.scss";

/** Light-green call-to-action card (same style as the Figma "work infrastructure" card). */
export default function CtaBanner({
    label = "PLAN YOUR WORKATION",
    title = "Ready to work from the mountains?",
    description = "Tell us your dates and we'll match you with a vetted stay with fast WiFi, meals and a proper workspace. Free, no commitment.",
    buttonText = "Plan your escape",
    buttonHref = "/contact-us",
    className = "",
}) {
    return (
        <div className={`${styles.cta_banner} ${className}`}>
            <SectionHeading
                label={label}
                title={title}
                description={description}
                titleSize="heading_1"
                className={styles.heading}
            />

            <div className={styles.actions}>
                <Button
                    href={buttonHref}
                    variant="primary"
                    icon={<Icons name="arrowTopRight" size={20} />}
                    iconPosition="right"
                >
                    {buttonText}
                </Button>

                <a
                    href="https://wa.me/918219703715"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font_body fw_500 body_1 ${styles.whatsapp_link}`}
                >
                    <Icons name="whatsappOutline" size={20} />
                    Chat on WhatsApp
                </a>
            </div>
        </div>
    );
}
