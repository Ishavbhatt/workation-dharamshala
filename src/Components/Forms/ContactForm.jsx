"use client";
import { useState } from "react";
import styles from "./Forms.module.scss";
import Button from "../Button/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
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
        setFormData({ firstname: "", lastname: "", email: "", phone: "", message: "" });
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
          <input
            type="text"
            name="firstname"
            placeholder="Your First Name"
            required
            value={formData.firstname}
            onChange={handleChange}
          />
        </div>

        <div className={styles.field}>
          <label>Last Name</label>
          <input
            type="text"
            name="lastname"
            placeholder="Your Last Name"
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            required
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className={styles.field}>
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            required
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label>Message</label>
        <textarea placeholder="Your Message" name="message" value={formData.message} onChange={handleChange} rows={4} />
      </div>

      {status && <p>{status}</p>}

      <Button
        variant="primary"
        onClick={handleSubmit}
      >
        Send Message
      </Button>
    </form>
  );
}
