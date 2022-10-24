import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAfwbx_SEtu59yhDI0pdcgEKOolV84Ioek",
  authDomain: "authapp-287e3.firebaseapp.com",
  projectId: "authapp-287e3",
  storageBucket: "authapp-287e3.appspot.com",
  messagingSenderId: "624101992410",
  appId: "1:624101992410:web:de38bc7c920aeca4ac42e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
