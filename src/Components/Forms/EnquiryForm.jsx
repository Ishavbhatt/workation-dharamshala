"use client";

import { useState } from "react";
import Button from "../Button/Button";
import Icons from "../Icons/Icons";
import FormField from "./FormField";
import styles from "./Forms.module.scss";
import toursData from "@/Data/toursData";

const WHATSAPP_NUMBER = "918219703715";

export const WORKATION_SERVICE = "Workation stay";
const serviceOptions = [
    WORKATION_SERVICE,
    ...toursData.map((tour) => tour.serviceName),
    "Something else",
];

const durationOptions = ["1 week", "2 weeks", "1 month", "2+ months", "Not sure yet"];
const guestOptions = ["Just me", "2 people", "3–4 people", "5+ (team)"];
const budgetOptions = [
    "Under ₹15,000",
    "₹15,000 – ₹30,000",
    "₹30,000 – ₹50,000",
    "₹50,000+",
    "Not sure yet",
];

const initialData = {
    service: WORKATION_SERVICE,
    name: "",
    phone: "",
    email: "",
    guests: guestOptions[0],
    arrival: "",
    duration: "",
    budget: "",
    message: "",
    company: "", // honeypot – real users never see or fill this
};

const today = () => new Date().toISOString().split("T")[0];

/**
 * One enquiry form for workation stays and tours.
 * - `service` presets (and hides) the "What are you planning?" choice, e.g. on a tour page.
 * - Without it, the customer picks the service themselves (`defaultService` sets the first choice).
 */
export default function EnquiryForm({ service, defaultService = WORKATION_SERVICE }) {
    const startData = { ...initialData, service: service || defaultService };
    const [formData, setFormData] = useState(startData);
    const isWorkation = formData.service === WORKATION_SERVICE;
    const [status, setStatus] = useState("idle"); // idle | sending | success | error
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const whatsappLink = () => {
        const lines = [
            isWorkation
                ? "Hi! I'd like to plan a workation in Dharamshala."
                : `Hi! I'd like more info about: ${formData.service}.`,
            formData.name && `Name: ${formData.name}`,
            formData.arrival && `${isWorkation ? "Arrival" : "Date"}: ${formData.arrival}`,
            isWorkation && formData.duration && `Stay: ${formData.duration}`,
            formData.guests && `Guests: ${formData.guests}`,
            formData.budget && `Budget: ${formData.budget}`,
            formData.message && `Note: ${formData.message}`,
        ].filter(Boolean);
        return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        setError("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(
                    isWorkation ? formData : { ...formData, duration: "", budget: "" }
                ),
            });
            const result = await res.json().catch(() => ({}));

            if (!res.ok) throw new Error(result.error || "Something went wrong.");

            setStatus("success");
            setFormData(startData);
        } catch (err) {
            setStatus("error");
            setError(err.message);
        }
    };

    if (status === "success") {
        return (
            <div className={styles.success}>
                <span className={styles.success_icon}>
                    <Icons name="check" size={28} color="#3f6b43" />
                </span>
                <h3 className="font_heading fw_400 heading_2">Thank you, enquiry received!</h3>
                <p className="font_body fw_400 heading_5">
                    We usually reply within a few hours with availability and all the details. Want
                    a faster answer? Message us on WhatsApp.
                </p>
                <div className={styles.success_actions}>
                    <Button
                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                        target="_blank"
                        variant="primary"
                        icon={<Icons name="whatsappOutline" size={20} />}
                        iconPosition="left"
                    >
                        Chat on WhatsApp
                    </Button>
                    <button
                        type="button"
                        className={`font_body fw_500 body_1 ${styles.text_btn}`}
                        onClick={() => setStatus("idle")}
                    >
                        Send another enquiry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            {!service && (
                <FormField label="What are you planning?" required>
                    <select name="service" value={formData.service} onChange={handleChange}>
                        {serviceOptions.map((o) => (
                            <option key={o}>{o}</option>
                        ))}
                    </select>
                </FormField>
            )}

            <div className={styles.row}>
                <FormField label="Full name" required>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        autoComplete="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />
                </FormField>

                <FormField label="WhatsApp / phone" required>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="+91 98765 43210"
                        autoComplete="tel"
                        pattern="[0-9+\-\s()]{7,20}"
                        title="Please enter a valid phone number"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </FormField>
            </div>

            <div className={styles.row}>
                <FormField label="Email">
                    <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </FormField>

                <FormField label="Number of people">
                    <select name="guests" value={formData.guests} onChange={handleChange}>
                        {guestOptions.map((o) => (
                            <option key={o}>{o}</option>
                        ))}
                    </select>
                </FormField>
            </div>

            <div className={isWorkation ? styles.row : undefined}>
                <FormField label={isWorkation ? "Arrival date" : "Preferred date"} required>
                    <input
                        type="date"
                        name="arrival"
                        min={today()}
                        required
                        value={formData.arrival}
                        onChange={handleChange}
                    />
                </FormField>

                {isWorkation && (
                    <FormField label="Length of stay" required>
                        <select name="duration" required value={formData.duration} onChange={handleChange}>
                            <option value="" disabled>
                                Select duration
                            </option>
                            {durationOptions.map((o) => (
                                <option key={o}>{o}</option>
                            ))}
                        </select>
                    </FormField>
                )}
            </div>

            {isWorkation && (
                <FormField label="Budget per person">
                    <select name="budget" value={formData.budget} onChange={handleChange}>
                        <option value="">Select budget</option>
                        {budgetOptions.map((o) => (
                            <option key={o}>{o}</option>
                        ))}
                    </select>
                </FormField>
            )}

            <FormField label="Anything we should know?">
                <textarea
                    name="message"
                    rows={4}
                    placeholder={
                        isWorkation
                            ? "Work hours, food preferences, room type, weekend plans…"
                            : "Pickup location, group details, anything you'd like to know…"
                    }
                    value={formData.message}
                    onChange={handleChange}
                />
            </FormField>

            <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className={styles.honeypot}
                value={formData.company}
                onChange={handleChange}
            />

            {status === "error" && (
                <p className={`font_body fw_400 body_1 ${styles.error}`} role="alert">
                    {error} You can also reach us directly on WhatsApp.
                </p>
            )}

            <div className={styles.actions}>
                <Button
                    type="submit"
                    variant="primary"
                    disabled={status === "sending"}
                    icon={<Icons name="arrowTopRight" size={20} />}
                    iconPosition="right"
                >
                    {status === "sending" ? "Sending…" : "Send enquiry"}
                </Button>

                <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font_body fw_500 body_1 ${styles.whatsapp_link}`}
                >
                    <Icons name="whatsappOutline" size={20} />
                    Or send on WhatsApp
                </a>
            </div>
        </form>
    );
}
