"use client";
import { useState } from "react";
import styles from "./Forms.module.scss";
import Button from "../Button/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus(result.error || "Failed to send message.");
      }
    } catch (err) {
      setStatus("Failed to send message.");
    }
  };

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label>First Name</label>
          <input type="text" placeholder="Your First Name" />
        </div>

        <div className={styles.field}>
          <label>Last Name</label>
          <input type="text" placeholder="Your Last Name" />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label>Email</label>
          <input type="email" placeholder="Your Email" />
        </div>

        <div className={styles.field}>
          <label>Phone Number</label>
          <input type="tel" placeholder="Your Phone Number" />
        </div>
      </div>

      <div className={styles.field}>
        <label>Message</label>
        <textarea placeholder="Your Message" rows={4} />
      </div>

      <Button
        variant="primary"
      >
        Send Message
      </Button>
    </form>
  );
}
