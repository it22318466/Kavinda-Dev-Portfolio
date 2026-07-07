# Vercel Environment Variables Setup Guide

## Problem
The contact form is not working because EmailJS environment variables are not configured in Vercel. The `.env` file works locally but is not automatically deployed to Vercel.

## Solution: Add Environment Variables in Vercel

### Step 1: Go to Vercel Dashboard
1. Log in to [Vercel Dashboard](https://vercel.com/dashboard)
2. Find your portfolio project
3. Click on the project to open its settings

### Step 2: Navigate to Environment Variables
1. Click on the **Settings** tab at the top
2. Click on **Environment Variables** in the left sidebar

### Step 3: Add the Three Required Variables

Add each of the following environment variables:

#### Variable 1: VITE_EMAILJS_PUBLIC_KEY
- **Name**: `VITE_EMAILJS_PUBLIC_KEY`
- **Value**: `zoqC_hsGhxx6dy_sw`
- **Environments**: Select **Production**, **Preview**, and **Development**
- Click **Add**

#### Variable 2: VITE_EMAILJS_SERVICE_ID
- **Name**: `VITE_EMAILJS_SERVICE_ID`
- **Value**: `service_ogqb0f4`
- **Environments**: Select **Production**, **Preview**, and **Development**
- Click **Add**

#### Variable 3: VITE_EMAILJS_TEMPLATE_ID
- **Name**: `VITE_EMAILJS_TEMPLATE_ID`
- **Value**: `template_dxajck9`
- **Environments**: Select **Production**, **Preview**, and **Development**
- Click **Add**

### Step 4: Redeploy Your Application
After adding the environment variables:

1. Go to the **Deployments** tab
2. Click on the most recent deployment (the one at the top)
3. Click the **Redeploy** button (three dots menu → Redeploy)
4. Wait for the deployment to complete

### Step 5: Test the Contact Form
1. Visit your live Vercel URL
2. Navigate to the Contact section
3. Fill out the form and submit
4. Check your email (lochanabandara36@gmail.com) for the message

## Important Notes

- **Environment variables are case-sensitive** - Make sure to use exact uppercase names
- **The `VITE_` prefix is required** for Vite to expose the variable to the frontend
- **Select all environments** (Production, Preview, Development) to ensure it works everywhere
- **Redeployment is mandatory** - Environment variables won't take effect until you redeploy

## Troubleshooting

### Still not working after redeployment?
1. Open your browser's developer console (F12)
2. Try submitting the form again
3. Check the console for detailed error messages
4. Look for "EmailJS Config Check" logs to see which variables are missing

### Check EmailJS Dashboard
1. Log in to [EmailJS](https://www.emailjs.com/)
2. Go to **Email Services** - Verify your service is active
3. Go to **Email Templates** - Verify your template exists and is active
4. Check **Account** → **General** - Verify your public key is correct

### Rate Limit Issues
EmailJS free tier has a 200 emails/month limit. If you exceed this:
- Upgrade your EmailJS plan, or
- Wait until the next month, or
- Consider using Formspree as an alternative (see EMAILJS_SETUP.md)

## Verification

After following these steps, the contact form should work correctly. Users will be able to send messages, and you'll receive them at lochanabandara36@gmail.com.
