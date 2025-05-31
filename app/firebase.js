// import { initializeApp } from "firebase/app";
// const firebaseConfig = {
//   apiKey: "AIzaSyCSCRn_6rFb8mu9tsbGI-006tOvHlh6sus",
//   authDomain: "data-spere.firebaseapp.com",
//   projectId: "data-spere",
//   storageBucket: "data-spere.firebasestorage.app",
//   messagingSenderId: "406850825477",
//   appId: "1:406850825477:web:e6cd2252b14c2a756c9b6c",
//   measurementId: "G-WF6N8BKNEN",
//   databaseUrl:"https://data-spere-default-rtdb.firebaseio.com/"
// };
// export  const app = initializeApp(firebaseConfig);

// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSCRn_6rFb8mu9tsbGI-006tOvHlh6sus",
  authDomain: "data-spere.firebaseapp.com",
  projectId: "data-spere",
  storageBucket: "data-spere.firebasestorage.app",
  messagingSenderId: "406850825477",
  appId: "1:406850825477:web:e6cd2252b14c2a756c9b6c",
  measurementId: "G-WF6N8BKNEN",
  databaseURL: "https://data-spere-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);

// Firebase Authentication
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, auth, provider };
