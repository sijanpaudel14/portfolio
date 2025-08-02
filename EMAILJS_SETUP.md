# EmailJS Setup Guide for Portfolio Contact Form

## 🚀 Quick Setup Steps

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Set Up Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection steps
5. **Copy the Service ID** (you'll need this)

### 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

```html
Subject: New Portfolio Contact: {{subject}}

Hello Sijan,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply directly to: {{reply_to}}
```

4. **Copy the Template ID**

### 4. Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key**
3. **Copy the Public Key**

### 5. Configure Environment Variables
1. Open `.env.local` in your project root
2. Replace the placeholder values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

### 6. Test the Form
1. Run your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email inbox!

## 📧 Email Template Variables

Your template can use these variables:
- `{{from_name}}` - Contact's name
- `{{from_email}}` - Contact's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_name}}` - Your name (Sijan Paudel)
- `{{reply_to}}` - Contact's email for replies

## 🔒 Security Notes

- Environment variables starting with `NEXT_PUBLIC_` are exposed to the browser
- EmailJS public key is safe to expose (it's designed for client-side use)
- Never put private keys or sensitive data in `NEXT_PUBLIC_` variables

## 🆓 EmailJS Free Limits

- 200 emails/month
- No credit card required
- Perfect for portfolio contact forms

## 🛠️ Troubleshooting

### Common Issues:

1. **"EmailJS not configured" error**
   - Check that all three environment variables are set in `.env.local`
   - Restart your development server after adding environment variables

2. **Emails not being sent**
   - Verify your Service ID, Template ID, and Public Key are correct
   - Check EmailJS dashboard for any service connection issues
   - Look at browser console for error messages

3. **Emails going to spam**
   - Add your own email to EmailJS service
   - Check spam/junk folder
   - Consider using a custom domain email

### Testing Steps:

1. Check browser console for error messages
2. Verify EmailJS dashboard shows successful sends
3. Check both inbox and spam folders
4. Test with different email addresses

## 🎉 Success!

Once configured, you'll receive emails at the address connected to your EmailJS service whenever someone submits your contact form!

## 📞 Need Help?

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/
