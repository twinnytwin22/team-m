import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();

  const fromEmail = process.env.SMTP_FROM_EMAIL;
  const authUser = process.env.SMTP_USER;
  const fromAddress = fromEmail ? `Team M <${fromEmail}>` : undefined;

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
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
    replyTo: fromEmail,
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
    .pill {
      display:inline-block;
      padding:4px 10px;
      border-radius:999px;
      background:#00913f;
      color:#ffffff;
      font-size:12px;
      letter-spacing:0.4px;
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
        <div class="pill">TEAM M</div>
        <h1>New Newsletter Signup</h1>
      </div>
      <div class="body">
        <p>Hello Team M Web Team,</p>
        <p>You’ve got a new newsletter signup:</p>
        <p><span class="label">Email:</span> ${email}</p>
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

  const subscriberMailOptions = {
    from: fromAddress || fromEmail,
    to: email,
    replyTo: fromEmail,
    subject: "✅ You’re subscribed to Team M",
    text: "Thanks for subscribing to Team M! We’ll keep you posted with the latest updates.",
    html: `
   <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Team M Subscription Confirmed</title>
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
        <h1>Subscription Confirmed</h1>
      </div>
      <div class="body">
        <p>Hi there,</p>
        <p>Thanks for subscribing to <span class="accent">Team M</span>! We’ll keep you posted with the latest news and updates.</p>
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
      transporter.sendMail(subscriberMailOptions),
    ]);

    const adminResult = results[0];
    const subscriberResult = results[1];

    if (adminResult.status === "rejected" || subscriberResult.status === "rejected") {
      console.error("Nodemailer error:", {
        admin: adminResult.status === "rejected" ? adminResult.reason : undefined,
        subscriber:
          subscriberResult.status === "rejected" ? subscriberResult.reason : undefined,
      });
      return NextResponse.json(
        {
          error: "Error sending signup notification",
          details: {
            admin: adminResult.status === "rejected" ? "failed" : "sent",
            subscriber: subscriberResult.status === "rejected" ? "failed" : "sent",
          },
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      adminMessageId: adminResult.value.messageId,
      subscriberMessageId: subscriberResult.value.messageId,
    });
  } catch (err) {
    console.error("Nodemailer error:", err);
    return NextResponse.json(
      { error: "Error sending signup notification" },
      { status: 500 }
    );
  }
}
