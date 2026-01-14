import nodemailer from "nodemailer";
export const runtime = "nodejs";

export async function POST(req) {
  try {
    const { firstname, lastname, email, phone, message } = await req.json();

    if (!firstname || !email || !phone) {
      return new Response(
        JSON.stringify({ error: "Missing fields" }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Workation Dharamshala Website Contact Form Submission" <${process.env.EMAIL_USER}>`,
      to: "ishavbhattkhaniyara@gmail.com",
      subject: "New Contact Form Message",
      html: `<p><strong>Name:</strong> ${firstname} ${lastname}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Phone:</strong> ${phone}</p>
                   <p><strong>Message:</strong> ${message}</p>`,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Message sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Email failed" }),
      { status: 500 }
    );
  }
}