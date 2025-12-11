# Email Configuration Guide

## Nodemailer Setup

The email functionality in this application uses Nodemailer instead of SendGrid. This allows you to use any SMTP email service.

### Required Environment Variables

Create a `.env.local` file in the root of your project with the following variables:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
FROM_EMAIL=your-email@gmail.com
```

### Setting Up Gmail (Recommended for Development)

1. **Enable 2-Factor Authentication** on your Google account
2. **Create an App Password**:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Click "Generate"
   - Copy the 16-character password
3. **Update your `.env.local`**:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-16-char-app-password
   FROM_EMAIL=your-email@gmail.com
   ```

### Alternative SMTP Providers

#### SendGrid SMTP
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
FROM_EMAIL=your-verified-sender@yourdomain.com
```

#### Outlook/Office 365
```env
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
FROM_EMAIL=your-email@outlook.com
```

#### Custom SMTP Server
```env
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@yourdomain.com
SMTP_PASS=your-password
FROM_EMAIL=your-email@yourdomain.com
```

### Testing the Email Routes

#### Contact Form
```bash
curl -X POST http://localhost:3000/api/email/contactSubmission \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","name":"Test User","message":"Hello from the contact form!"}'
```

#### Newsletter Signup
```bash
curl -X POST http://localhost:3000/api/email/newsletterSignUp \
  -H "Content-Type: application/json" \
  -d '{"email":"subscriber@example.com"}'
```

### Troubleshooting

#### "Invalid login" error
- Verify your SMTP credentials are correct
- For Gmail, ensure you're using an App Password, not your regular password
- Check if 2FA is enabled on your email account

#### "Connection timeout" error
- Verify the SMTP host and port are correct
- Check if your firewall is blocking the SMTP port
- Some networks block port 587; try port 465 with `SMTP_SECURE=true`

#### Emails not being received
- Check your spam folder
- Verify the FROM_EMAIL is correct
- Ensure your email provider allows sending emails via SMTP

### Security Notes

1. **Never commit `.env.local`** to version control
2. Use App Passwords instead of regular passwords when possible
3. For production, consider using a dedicated email service with higher sending limits
4. Monitor your email sending limits to avoid being rate-limited

### Email Routes

- **Contact Form**: `/api/email/contactSubmission`
  - Accepts: `{ email, name, message }`
  - Sends admin notification to `FROM_EMAIL`

- **Newsletter Signup**: `/api/email/newsletterSignUp`
  - Accepts: `{ email }`
  - Sends admin notification to `FROM_EMAIL`
