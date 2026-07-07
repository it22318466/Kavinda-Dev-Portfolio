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

### Step 3: Add EmailJS Environment Variables

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

### Step 4: Add Firebase Environment Variables (Required for Testimonials)

The testimonials feature requires Firebase Realtime Database. Follow these steps first:

1. **Set up Firebase** (see `FIREBASE_SETUP.md` for detailed instructions)
2. Get your Firebase configuration from the Firebase Console
3. Add these environment variables to Vercel:

#### Variable 4: VITE_FIREBASE_API_KEY

- **Name**: `VITE_FIREBASE_API_KEY`
- **Value**: Your Firebase API key (from Firebase Console)
- **Environments**: Select **Production**, **Preview**, and **Development**
- Click **Add**

#### Variable 5: VITE_FIREBASE_AUTH_DOMAIN

- **Name**: `VITE_FIREBASE_AUTH_DOMAIN`
- **Value**: Your Firebase auth domain (e.g., `your-project-id.firebaseapp.com`)
- **Environments**: Select **Production**, **Preview**, and **Development**
- Click **Add**

#### Variable 6: VITE_FIREBASE_DATABASE_URL

- **Name**: `VITE_FIREBASE_DATABASE_URL`
- **Value**: Your Firebase database URL (e.g., `https://your-project-id-default-rtdb.firebaseio.com`)
- **Environments**: Select **Production**, **Preview**, and **Development**
- Click **Add**

#### Variable 7: VITE_FIREBASE_PROJECT_ID

- **Name**: `VITE_FIREBASE_PROJECT_ID`
- **Value**: Your Firebase project ID
- **Environments**: Select **Production**, **Preview**, and **Development**
- Click **Add**

#### Variable 8: VITE_FIREBASE_STORAGE_BUCKET

- **Name**: `VITE_FIREBASE_STORAGE_BUCKET`
- **Value**: Your Firebase storage bucket (e.g., `your-project-id.appspot.com`)
- **Environments**: Select **Production**, **Preview**, and **Development**
- Click **Add**

#### Variable 9: VITE_FIREBASE_MESSAGING_SENDER_ID

- **Name**: `VITE_FIREBASE_MESSAGING_SENDER_ID`
- **Value**: Your Firebase messaging sender ID
- **Environments**: Select **Production**, **Preview**, and **Development**
- Click **Add**

#### Variable 10: VITE_FIREBASE_APP_ID

- **Name**: `VITE_FIREBASE_APP_ID`
- **Value**: Your Firebase app ID
- **Environments**: Select **Production**, **Preview**, and **Development**
- Click **Add**

### Step 5: Redeploy Your Application

After adding the environment variables:

1. Go to the **Deployments** tab
2. Click on the most recent deployment (the one at the top)
3. Click the **Redeploy** button (three dots menu → Redeploy)
4. Wait for the deployment to complete

### Step 6: Test the Features

#### Test Contact Form

1. Visit your live Vercel URL
2. Navigate to the Contact section
3. Fill out the form and submit
4. Check your email (lochanabandara36@gmail.com) for the message

#### Test Testimonials Feature

1. Visit your live Vercel URL
2. Navigate to the Testimonials section
3. Click "Add Your Testimonial"
4. Fill out the form and submit
5. Check the Firebase Console → Realtime Database → Data tab to verify the testimonial was saved
6. Refresh the page - the testimonial should now be visible to all visitors

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

After following these steps:

- The contact form should work correctly. Users will be able to send messages, and you'll receive them at lochanabandara36@gmail.com.
- The testimonials feature should work correctly. Users can submit testimonials that are visible to all visitors.
