// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY5MpzhI5ePQsVCfaLND963_VWnrHvVIQ",
  authDomain: "fir-23ae4.firebaseapp.com",
  databaseURL: "https://fir-23ae4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-23ae4",
  storageBucket: "fir-23ae4.appspot.com",
  messagingSenderId: "1092647224591",
  appId: "1:1092647224591:web:cb301e5109229080452a7a",
  measurementId: "G-B3BV0HNDQN"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const cong = initializeApp(firebaseConfig);

export default cong;