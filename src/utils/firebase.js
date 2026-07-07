// Firebase is temporarily disabled due to installation issues
// To enable: 1. Run `npm install firebase` 2. Uncomment the code below

import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue, remove } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
let app;
let database;

try {
  app = initializeApp(firebaseConfig);
  database = getDatabase(app);
  console.log("Firebase initialized successfully");
  console.log("Firebase config check:", {
    hasApiKey: !!firebaseConfig.apiKey,
    hasDatabaseURL: !!firebaseConfig.databaseURL,
    hasProjectId: !!firebaseConfig.projectId,
  });
} catch (error) {
  console.error("Firebase initialization error:", error);
}

export const testimonialsRef = database ? ref(database, "testimonials") : null;

export const addTestimonial = (testimonial) => {
  if (!testimonialsRef) {
    console.error("Firebase database not initialized");
    return Promise.reject(new Error("Firebase not configured"));
  }
  console.log("Attempting to add testimonial:", testimonial);
  return push(testimonialsRef, testimonial)
    .then((result) => {
      console.log("Testimonial added successfully:", result);
      return result;
    })
    .catch((error) => {
      console.error("Error adding testimonial:", error);
      console.error("Error code:", error.code);
      console.error("Error message:", error.message);
      throw error;
    });
};

export const deleteTestimonial = (testimonialId) => {
  if (!testimonialsRef) {
    console.error("Firebase database not initialized");
    return Promise.reject(new Error("Firebase not configured"));
  }
  const testimonialRef = ref(database, `testimonials/${testimonialId}`);
  return remove(testimonialRef);
};

export const subscribeToTestimonials = (callback) => {
  if (!testimonialsRef) {
    console.error("Firebase database not initialized");
    return () => {};
  }
  return onValue(testimonialsRef, (snapshot) => {
    const data = snapshot.val();
    const testimonials = data
      ? Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
        }))
      : [];
    callback(testimonials);
  });
};

export default database;
