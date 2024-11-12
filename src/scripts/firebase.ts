import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCM-Ypo_BW1YtX12uIRY6fAdK0Po_wmTJg",
  authDomain: "art-tools-af8a5.firebaseapp.com",
  projectId: "art-tools-af8a5",
  storageBucket: "art-tools-af8a5.appspot.com",
  messagingSenderId: "169516736447",
  appId: "1:169516736447:web:10c4f290b8d89159144b0a"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };