# EmailJS Setup Instructions

Follow these steps to enable the contact form functionality:

## 1. Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)
3. Verify your email address

## 2. Add an Email Service

1. After logging in, go to "Email Services" in the sidebar
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the authentication steps to connect your email account
5. **Important**: Use `lochanabandara36@gmail.com` for the email service

## 3. Create an Email Template

1. Go to "Email Templates" in the sidebar
2. Click "Create New Template"
3. Name your template (e.g., "Portfolio Contact Form")
4. Use the following template:

```
Subject: New Contact Form Message from {{from_name}}

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

To Email: {{to_email}}
```

5. Save the template

## 4. Get Your Credentials

1. Go to "Account" → "General" in EmailJS
2. Copy your **Public Key**

3. Go to "Email Services" and copy your **Service ID**

4. Go to "Email Templates" and copy your **Template ID**

## 5. Update Your .env File

Open the `.env` file in your project root and replace the placeholder values:

```env
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
VITE_EMAILJS_SERVICE_ID=your_actual_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id_here
```

## 6. Test the Contact Form

1. Restart your development server (if running)
2. Navigate to the Contact section of your portfolio
3. Fill out the form with test data
4. Submit the form
5. Check your email inbox for the test message

## Troubleshooting

- **No email received**: Check your EmailJS dashboard for error logs
- **"Failed to send message" error**: Verify your credentials in `.env` are correct
- **Email goes to spam**: Check your spam folder and mark as not spam
- **Rate limit exceeded**: EmailJS free tier has a 200 emails/month limit

## Security Notes

- Never commit your `.env` file to version control
- The `.gitignore` file has been configured to exclude `.env` files
- Only the Public Key is exposed in the frontend (this is safe)
- Your email credentials are handled securely by EmailJS

## Alternative: Use Formspree

If you prefer not to use EmailJS, you can use [Formspree](https://formspree.io/):

1. Sign up at [https://formspree.io/](https://formspree.io/)
2. Create a new form
3. Get your form endpoint URL
4. Update the form action in Contact.jsx to use the Formspree endpoint
