import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBeZ-zcveSVAcjy5ZeQk6FG4SLuhSgSdr0",
  authDomain: "my-new-project-final.firebaseapp.com",
  projectId: "my-new-project-final",
  storageBucket: "my-new-project-final.appspot.com",
  messagingSenderId: "838542754086",
  appId: "1:838542754086:web:9b6a22d84f7f3b2a3441e7"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
