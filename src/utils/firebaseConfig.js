import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDCDEmQzNH4RqdWZjJiAI5knfMP8cb0GbA",
  authDomain: "signcast-e2287.firebaseapp.com",
  databaseURL: "https://signcast-e2287-default-rtdb.firebaseio.com",
  projectId: "signcast-e2287",
  storageBucket: "signcast-e2287.firebasestorage.app",
  messagingSenderId: "28149111543",
  appId: "1:28149111543:web:8aa1d3dbee638f445311f2"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
