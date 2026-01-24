import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const {
    email,
    name,
    subject,
    phone,
    organization,
    preferredContact,
    timeline,
    message,
  } = await req.json();

  const fromEmail = process.env.SMTP_FROM_EMAIL;
  const authUser = process.env.SMTP_USER;
  const fromAddress = fromEmail ? `Team M <${fromEmail}>` : undefined;

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }
  if (!message) {
    return NextResponse.json({ error: "Message is required" }, { status: 400 });
  }
  if (!fromEmail) {
    return NextResponse.json(
      { error: "Server misconfigured: SMTP_FROM_EMAIL is required" },
      { status: 500 }
    );
  }
  if (!authUser) {
    return NextResponse.json(
      { error: "Server misconfigured: SMTP_USER is required" },
      { status: 500 }
    );
  }

  // Create a transporter using your email service
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: authUser,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: fromAddress || fromEmail,
    to: fromEmail, // admin notification
    replyTo: email,
    subject: `📬 New Team M Contact Form Submission${subject ? ` — ${subject}` : ''}`,
    text: `New contact form submission:\n\nName: ${name || "N/A"}\nEmail: ${email}\nSubject: ${subject || "N/A"}\nPhone: ${phone || "N/A"}\nOrganization: ${organization || "N/A"}\nPreferred Contact: ${preferredContact || "N/A"}\nTimeline: ${timeline || "N/A"}\n\nMessage:\n${message}`,
    html: `
   <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Team M Contact Submission</title>
  <style>
    body { margin:0; padding:0; background-color:#f7f7f7; }
    .wrapper { width:100%; padding:24px 0; background-color:#f7f7f7; }
    .container {
      max-width:600px;
      margin:0 auto;
      background-color:#ffffff;
      border-radius:12px;
      overflow:hidden;
      box-shadow:0 6px 18px rgba(0,0,0,0.08);
      border:1px solid #f7ae1d;
    }
    .header {
      background-color:#000000;
      padding:22px 20px;
      text-align:center;
      border-bottom:4px solid #f7941d;
    }
    .header h1 {
      margin:0;
      font-size:22px;
      font-family:Arial, sans-serif;
      color:#f7941d;
      letter-spacing:0.5px;
    }
    .body {
      padding:22px 24px;
      font-family:Arial, sans-serif;
      color:#111111;
      line-height:1.6;
    }
    .body p { margin:0 0 14px; }
    .label { color:#00913f; font-weight:700; }
    .message {
      background:#f7f7f7;
      border-left:4px solid #00913f;
      padding:12px 14px;
      white-space:pre-line;
    }
    .footer {
      background-color:#000000;
      padding:14px 16px;
      text-align:center;
      font-size:12px;
      color:#f7941d;
      font-family:Arial, sans-serif;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <h1>New Contact Submission</h1>
      </div>
      <div class="body">
        <p>Hello Team M Web Team,</p>
        <p>You’ve received a new contact form submission:</p>
        <p><span class="label">Name:</span> ${name || "N/A"}</p>
        <p><span class="label">Email:</span> ${email}</p>
        <p><span class="label">Subject:</span> ${subject || "N/A"}</p>
        <p><span class="label">Phone:</span> ${phone || "N/A"}</p>
        <p><span class="label">Organization:</span> ${organization || "N/A"}</p>
        <p><span class="label">Preferred Contact:</span> ${preferredContact || "N/A"}</p>
        <p><span class="label">Timeline:</span> ${timeline || "N/A"}</p>
        <p><span class="label">Message:</span></p>
        <div class="message">${message}</div>
      </div>
    </div>
    <div class="footer">
      &copy; 2025 Team M. All rights reserved.
    </div>
  </div>
</body>
</html>
    `,
  };

  const senderMailOptions = {
    from: fromAddress || fromEmail,
    to: email,
    replyTo: fromEmail,
    subject: "✅ We received your message",
    text: "Thanks for reaching out to Team M! We’ve received your message and will get back to you soon.",
    html: `
   <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Team M Contact Confirmation</title>
  <style>
    body { margin:0; padding:0; background-color:#f7f7f7; }
    .wrapper { width:100%; padding:24px 0; background-color:#f7f7f7; }
    .container {
      max-width:600px;
      margin:0 auto;
      background-color:#ffffff;
      border-radius:12px;
      overflow:hidden;
      box-shadow:0 6px 18px rgba(0,0,0,0.08);
      border:1px solid #f7ae1d;
    }
    .header {
      background-color:#000000;
      padding:22px 20px;
      text-align:center;
      border-bottom:4px solid #f7941d;
    }
    .header h1 {
      margin:0;
      font-size:22px;
      font-family:Arial, sans-serif;
      color:#f7941d;
      letter-spacing:0.5px;
    }
    .body {
      padding:22px 24px;
      font-family:Arial, sans-serif;
      color:#111111;
      line-height:1.6;
    }
    .body p { margin:0 0 14px; }
    .accent { color:#00913f; font-weight:700; }
    .message {
      background:#f7f7f7;
      border-left:4px solid #00913f;
      padding:12px 14px;
      white-space:pre-line;
    }
    .footer {
      background-color:#000000;
      padding:14px 16px;
      text-align:center;
      font-size:12px;
      color:#f7941d;
      font-family:Arial, sans-serif;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <h1>Message Received</h1>
      </div>
      <div class="body">
        <p>Hi ${name || "there"},</p>
        <p>Thanks for reaching out to <span class="accent">Team M</span>. We’ve received your message and will reply as soon as we can.</p>
        <p style="margin-top:18px;"><span class="accent">Your message:</span></p>
        <div class="message">${message}</div>
      </div>
    </div>
    <div class="footer">
      &copy; 2025 Team M. All rights reserved.
    </div>
  </div>
</body>
</html>
    `,
  };

  try {
    await transporter.verify();
    const results = await Promise.allSettled([
      transporter.sendMail(mailOptions),
      transporter.sendMail(senderMailOptions),
    ]);

    const adminResult = results[0];
    const senderResult = results[1];

    if (adminResult.status === "rejected" || senderResult.status === "rejected") {
      console.error("Nodemailer error:", {
        admin: adminResult.status === "rejected" ? adminResult.reason : undefined,
        sender: senderResult.status === "rejected" ? senderResult.reason : undefined,
      });
      return NextResponse.json(
        {
          error: "Error sending contact form",
          details: {
            admin: adminResult.status === "rejected" ? "failed" : "sent",
            sender: senderResult.status === "rejected" ? "failed" : "sent",
          },
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      adminMessageId: adminResult.value.messageId,
      senderMessageId: senderResult.value.messageId,
    });
  } catch (err) {
    console.error("Nodemailer error:", err);
    return NextResponse.json(
      { error: "Error sending contact form" },
      { status: 500 }
    );
  }
}