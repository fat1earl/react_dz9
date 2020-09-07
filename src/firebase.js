import { initializeApp } from "firebase";

const app = initializeApp({
  apiKey: "AIzaSyAmA0DkLW3O9Oolgrufff1PP83LrfD3GDs",
  authDomain: "accounting-app-5a284.firebaseapp.com",
  databaseURL: "https://accounting-app-5a284.firebaseio.com",
  projectId: "accounting-app-5a284",
  storageBucket: "accounting-app-5a284.appspot.com",
  messagingSenderId: "331104646338",
  appId: "1:331104646338:web:5737316293ab9b1e24b75b",
});

export const firestore = app.firestore();

export function docToObject(doc) {
  return {
    id: doc.id,
    ...doc.data(),
  };
}

export function collectionToObject(collection) {
  return collection.docs.map(docToObject);
}
