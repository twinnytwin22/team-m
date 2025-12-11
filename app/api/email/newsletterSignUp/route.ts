import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  // Create a transporter using your email service
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.FROM_EMAIL,
    to: process.env.FROM_EMAIL, // admin notification
    subject: "🎉 New Team M Newsletter Signup",
    text: `New subscriber: ${email}`,
    html: `
   <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Team M Subscriber</title>
  <style>
    body { margin:0; padding:0; background-color:#f4f4f8; }
    .wrapper { width:100%; padding:20px 0; background-color:#f4f4f8; }
    .container {
      max-width:600px;
      margin:0 auto;
      background-color:#ffffff;
      border-radius:8px;
      overflow:hidden;
      box-shadow:0 2px 8px rgba(0,0,0,0.1);
    }
    .header {
      background-color:#4f46e5;
      padding:20px;
      text-align:center;
    }
    .header h1 {
      margin:0;
      font-size:24px;
      font-family:Arial, sans-serif;
      color:#ffffff;
    }
    .body {
      padding:20px;
      font-family:Arial, sans-serif;
      color:#333333;
      line-height:1.5;
    }
    .body p { margin:0 0 16px; }
    .footer {
      background-color:#f4f4f8;
      padding:16px;
      text-align:center;
      font-size:12px;
      color:#888888;
      font-family:Arial, sans-serif;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <h1>🎉 New Team M Subscriber</h1>
      </div>
      <div class="body">
        <p>Hello Team M Web Team,</p>
        <p>You've got a new newsletter signup:</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>Keep rocking it!</p>
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
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Nodemailer error:", err);
    return NextResponse.json(
      { error: "Error sending signup notification" },
      { status: 500 }
    );
  }
}
