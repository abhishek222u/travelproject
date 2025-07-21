# 📧 EmailJS Setup Guide - Step by Step

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" (it's FREE!)
3. Verify your email address

### Step 2: Add Email Service
1. In EmailJS dashboard → "Email Services" → "Add New Service"
2. Choose **Gmail** (recommended) or your preferred provider
3. Click "Connect Account" and sign in with your email
4. **Copy the Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to "Email Templates" → "Create New Template"
2. Name it: "Booking Confirmation"
3. **Set Subject:** `Booking Confirmation - {{package_name}}`
4. **Email Content:**

```
Hello {{customer_name}},

🎉 Thank you for your booking request!

📋 BOOKING DETAILS:
• Package: {{package_name}}
• Contact: {{customer_phone}}
• Email: {{customer_email}}
• WhatsApp: {{customer_whatsapp}}
• Location: {{customer_location}}
• Date: {{booking_date}} at {{booking_time}}

✅ WHAT'S NEXT:
Our travel experts will contact you within 24 hours to confirm your booking and provide a detailed itinerary.

📞 NEED HELP?
Phone: +1 (800) 123-TRAVEL
Email: contact@travelagency.com

Best regards,
Dream Travel Team 🌟
```

5. **Copy the Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. **Copy your Public Key** (e.g., `abc123XYZ`)

### Step 5: Update Your Code
Open `src/context/BookingContext.jsx` and update:

```javascript
// Your EmailJS configuration is already set up in BookingContext.jsx
const EMAIL_CONFIG = {
  serviceId: 'service_wtuxzpc',
  templateId: 'template_0it8dks',
  publicKey: 'zOXokwZc7Cetr3eXY'
}
```

### Step 6: Enable Real Email Sending ✅ DONE!
Your system is already configured and sending real emails!

## 🎯 Test Your Setup

1. **Save all files** and restart your dev server
2. **Fill out the booking form** on your website
3. **Check your email** - you should receive a confirmation!
4. **Check EmailJS dashboard** for sent emails

## 🔧 Advanced Configuration (Optional)

### Company Notification Emails
To receive notifications when customers book:

1. Create another template: "New Booking Notification"
2. Set recipient to your business email
3. Update the template ID in `BookingContext.jsx`

### Email Limits
- **Free Plan:** 200 emails/month
- **Personal Plan:** $15/month for 20,000 emails
- Perfect for most travel businesses!

## 🚨 Troubleshooting

**❌ Emails not sending?**
- Check Service ID, Template ID, and Public Key are correct
- Verify your email service is connected in EmailJS
- Check browser console for error messages

**❌ Template variables not working?**
- Make sure variable names match exactly: `{{customer_name}}`
- Variables are case-sensitive

**❌ Gmail security issues?**
- Enable 2-factor authentication
- Use app-specific password if needed

## ✅ Quick Checklist
- [x] EmailJS account created
- [x] Email service connected  
- [x] Template created with variables
- [x] Service ID, Template ID, Public Key copied
- [x] Code updated in `BookingContext.jsx`
- [x] Real email sending enabled
- [x] Test booking submitted
- [x] Confirmation email received

## 🎉 You're Done!
Your travel website now sends professional booking confirmation emails automatically! 

**Need help?** Check the EmailJS documentation or contact their support - they're very helpful! 