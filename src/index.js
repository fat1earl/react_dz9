import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// import { initializeApp } from "firebase";

// const app = initializeApp({
//   apiKey: "AIzaSyAmA0DkLW3O9Oolgrufff1PP83LrfD3GDs",
//   authDomain: "accounting-app-5a284.firebaseapp.com",
//   databaseURL: "https://accounting-app-5a284.firebaseio.com",
//   projectId: "accounting-app-5a284",
//   storageBucket: "accounting-app-5a284.appspot.com",
//   messagingSenderId: "331104646338",
//   appId: "1:331104646338:web:5737316293ab9b1e24b75b",
// });

// export const firestore = app.firestore();

// export function docToObject(doc) {
//   return {
//     id: doc.id,
//     ...doc.data(),
//   };
// }

// export function collectionToObject(collection) {
//   return collection.docs.map(docToObject);
// }

// firestore
//   .collection("/food")
//   .get()
//   .then((snapshot) => snapshot.docs.map(docToObject))
//   .then(console.log);

// firestore
//   .collection("/food")
//   .doc("uH1KKaUargUYorOyPbG0")
//   .get()
//   .then(docToObject)
//   .then(console.log);

// firestore
//   .doc("/food/uH1KKaUargUYorOyPbG0")
//   .get()
//   .then(docToObject)
//   .then(console.log);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
