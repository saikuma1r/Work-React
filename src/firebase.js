import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXWAN0WqU-bCYxQcoNH_tQRMh439aU4SQ",
  authDomain: "work-8360d.firebaseapp.com",
  projectId: "work-8360d",
  storageBucket: "work-8360d.appspot.com",
  messagingSenderId: "1096812346067",
  appId: "1:1096812346067:web:ced0e91113d26be5d13226",
  measurementId: "G-WTCHBZRS30"
};

if(!firebase.app.lenght)
{
    firebase.initializeApp(firebaseConfig);
}

export const firestore = firebase.firestore() 
