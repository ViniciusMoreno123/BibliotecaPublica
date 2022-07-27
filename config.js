
import firebase from "firebase/app";
require("@firebase/firestore")
const firebaseConfig = {
  apiKey: "AIzaSyDE9prjXSqxa8R8ZAgR1FEOppr6d03h9Yw",
  authDomain: "bibliotecapublica-2b20d.firebaseapp.com",
  projectId: "bibliotecapublica-2b20d",
  storageBucket: "bibliotecapublica-2b20d.appspot.com",
  messagingSenderId: "43804764896",
  appId: "1:43804764896:web:df04a573d5a2fbf13a7e85"
};


firebase.initializeApp(firebaseConfig);
export default firebase.firestore();