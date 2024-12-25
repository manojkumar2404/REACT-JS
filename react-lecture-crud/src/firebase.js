
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBEXoviVLmSo4m0UJQqcy9Idk7Jc_vNgp0",
  authDomain: "reactjs-2a3e7.firebaseapp.com",
  projectId: "reactjs-2a3e7",
  storageBucket: "reactjs-2a3e7.firebasestorage.app",
  messagingSenderId: "1073774834177",
  appId: "1:1073774834177:web:8610497d9dbab01fbdc600",
  measurementId: "G-LFETLHK2T8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebaseApp;