import { auth } from "./firebaseConfig";
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// Providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// Google Sign-In
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log("✅ Google Sign-In Success:", result.user);
    return result.user;
  } catch (error) {
    console.error("❌ Google Sign-In Error:", error);
    throw error;
  }
};

// GitHub Sign-In
export const signInWithGithub = async () => {
  try {
    const result = await signInWithPopup(auth, githubProvider);
    console.log("✅ GitHub Sign-In Success:", result.user);
    return result.user;
  } catch (error) {
    console.error("❌ GitHub Sign-In Error:", error);
    throw error;
  }
};

// Sign Out
export const logout = async () => {
  try {
    await signOut(auth);
    console.log("✅ Signed out successfully");
  } catch (error) {
    console.error("❌ Sign out error:", error);
  }
};
