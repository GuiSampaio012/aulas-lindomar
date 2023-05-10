import { initializeApp } from "firebase/app";
import {getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {getFirestore, query, getDocs, collection, where, addDoc,} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAT0ydJh0oqbbVcOTiShM_Uju9YNbKB17Q",
  authDomain: "crud-gui.firebaseapp.com",
  projectId: "crud-gui",
  storageBucket: "crud-gui.appspot.com",
  messagingSenderId: "7785770441",
  appId: "1:7785770441:web:53168cb95cb11bf5540c18"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

const logout = () => {
  signOut(auth);
};
export {
  auth,
  db,
  logout,
  storage,
};