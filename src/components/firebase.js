// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { getStorage } from "firebase/storage";




const firebaseConfig = {
  apiKey: "AIzaSyCsGMdcIkLuPHSEhPooqbuPaCmmejHpkoE",
  authDomain: "disneyplus-clone-3966a.firebaseapp.com",
  projectId: "disneyplus-clone-3966a",
  storageBucket: "disneyplus-clone-3966a.appspot.com",
  messagingSenderId: "590126099122",
  appId: "1:590126099122:web:7bb6f3bd4c9f3dbde277ab",
  measurementId: "G-EG8599SRYZ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);



// Initialize Firebase
// const fireBaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(fireBaseApp);


export { auth, provider, storage };
export default db;
// export { handleAuth };