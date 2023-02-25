import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBA-8gIcBq6_WRFZeYZ9KuWIUjqnEmRqNE",
    authDomain: "apply-d85f7.firebaseapp.com",
    projectId: "apply-d85f7",
    storageBucket: "apply-d85f7.appspot.com",
    messagingSenderId: "57320499912",
    appId: "1:57320499912:web:9b379c08015943d70213fd"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app);