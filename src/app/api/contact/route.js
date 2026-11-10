import nodemailer from "nodemailer";

export const runtime = "nodejs";

const TO_EMAIL = "ishavbhattkhaniyara@gmail.com";

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .slice(0, 2000);

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export async function POST(req) {
  let data;
  try {
    data = await req.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  const { service, name, phone, email, guests, arrival, duration, budget, message, company } = data;
  const serviceName = String(service || "Workation stay").slice(0, 80);
  const isWorkation = serviceName === "Workation stay";

  // Honeypot filled → almost certainly a bot. Pretend success, send nothing.
  if (company) return json({ success: true });

  if (!name?.trim() || !phone?.trim() || !arrival || (isWorkation && !duration)) {
    return json(
      {
        error: isWorkation
          ? "Please fill in your name, phone, arrival date and length of stay."
          : "Please fill in your name, phone and preferred date.",
      },
      400
    );
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: "Please enter a valid email address." }, 400);
  }

  const rows = [
    ["Enquiry for", serviceName],
    ["Name", name],
    ["WhatsApp / phone", phone],
    ["Email", email || "—"],
    [isWorkation ? "Arrival date" : "Preferred date", arrival],
    ...(isWorkation ? [["Length of stay", duration]] : []),
    ["Number of people", guests || "—"],
    ...(isWorkation ? [["Budget per person", budget || "—"]] : []),
    ["Message", message || "—"],
  ];

  const waNumber = String(phone).replace(/[^\d]/g, "");

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Workation Dharamshala Enquiry" <${process.env.EMAIL_USER}>`,
      to: TO_EMAIL,
      replyTo: email || undefined,
      subject: isWorkation
        ? `New workation enquiry: ${String(name).slice(0, 60)} · ${duration} from ${arrival}`
        : `New ${serviceName} enquiry: ${String(name).slice(0, 60)} · ${arrival}`,
      html: `
        <h2 style="font-family:Georgia,serif;font-weight:400">New enquiry: ${escapeHtml(serviceName)}</h2>
        <table cellpadding="8" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">
          ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="color:#666;border-bottom:1px solid #eee"><strong>${label}</strong></td><td style="border-bottom:1px solid #eee">${escapeHtml(value).replace(/\n/g, "<br/>")}</td></tr>`
          )
          .join("")}
        </table>
        ${waNumber ? `<p><a href="https://wa.me/${waNumber}">Reply on WhatsApp →</a></p>` : ""}
      `,
    });

    return json({ success: true, message: "Enquiry sent successfully" });
  } catch (error) {
    console.error("Enquiry email failed:", error);
    return json({ error: "We couldn't send your enquiry right now." }, 500);
  }
}
