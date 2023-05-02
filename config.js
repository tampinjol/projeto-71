import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
  const: firebaseConfig = {
  apiKey: "AIzaSyALgKSNRjhZxKAG9FHrguhtcdKgtflSEPY",
  authDomain: "projeto-71-ff690.firebaseapp.com",
  databaseURL: "https://projeto-71-ff690-default-rtdb.firebaseio.com",
  projectId: "projeto-71-ff690",
  storageBucket: "projeto-71-ff690.appspot.com",
  messagingSenderId: "946490518138",
  appId: "1:946490518138:web:8eebf031e54d05bc6e69c3"
}
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
