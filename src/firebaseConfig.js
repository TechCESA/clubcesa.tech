import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.CMS_API_KEY,
  authDomain: process.env.CMS_AUTH_DOMAIN,
  projectId: process.env.CMS_PROJECT_ID,
  storageBucket: process.env.CMS_STORAGE_BUCKET,
  messagingSenderId: process.env.CMS_MESSAGING_SENDER_ID,
  appId: process.env.CMS_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
