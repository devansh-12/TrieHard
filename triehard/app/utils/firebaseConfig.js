import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyByLwh0CAwfv_l_xZiHQ1NL4gP7PZrPq1Q",
  authDomain: "triehard-7715c.firebaseapp.com",
  projectId: "triehard-7715c",
  storageBucket: "triehard-7715c.appspot.com", // Fixed storage bucket URL
  messagingSenderId: "975966197903",
  appId: "1:975966197903:web:809aab0765afa3abfff8fa",
  measurementId: "G-Y5QETN811V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Conditionally initialize analytics
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, auth, analytics };
