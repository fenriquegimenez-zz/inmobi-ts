import firebase from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyA8bpG-3COTVfEpsrOcKsPd0mVXiv9oeCI",
  authDomain: "inmobi3.firebaseapp.com",
  projectId: "inmobi3",
  storageBucket: "inmobi3.appspot.com",
  messagingSenderId: "62227543710",
  appId: "1:62227543710:web:72a5b7b986b92a0daa6d8f",
}
// Initialize Firebase
const fb = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

export const db = fb.firestore()
