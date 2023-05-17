import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import React from "react";
import { Auth, getAuth } from "firebase/auth";

export interface FirebaseCtxType {
  auth: Auth;
  db: Firestore;
}
if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
  throw new Error("Missing firebase environment variables");
}
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

type FirebaseProviderProps = { children: React.ReactNode };

export const FirebaseCtx = React.createContext({} as FirebaseCtxType);

let auth: Auth;
let db: Firestore;

export const FirebaseProvider = ({ children }: FirebaseProviderProps) => {
  try {
    if (!getApps().length) {
      const app = initializeApp(firebaseConfig);
      db = getFirestore(app);
      auth = getAuth(app);

      console.info("firebase connected");
    }
  } catch (error: any) {
    console.error("error conecting to Firebase", error.message);
  }

  return (
    <FirebaseCtx.Provider value={{ db, auth }}>{children}</FirebaseCtx.Provider>
  );
};
