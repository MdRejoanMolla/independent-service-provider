// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAVvquDCe9aEXcp69DhBzrcJiD2gLgXEQE",
      authDomain: "independent-service-a45e8.firebaseapp.com",
      projectId: "independent-service-a45e8",
      storageBucket: "independent-service-a45e8.appspot.com",
      messagingSenderId: "776142621482",
      appId: "1:776142621482:web:81b75d4d9d04e74e0e6c53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;