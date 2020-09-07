import { useState, useEffect, useCallback } from "react";
import { firestore, docToObject, collectionToObject } from "./firebase";

function useFirebaseQuery(path, isDoc) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const reference = isDoc
          ? firestore.doc(path)
          : firestore.collection(path);

        const response = await reference.get();

        setData(isDoc ? docToObject(response) : collectionToObject(response));
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  return [data, isLoading, error];
}

export function useFirebaseCollection(collection) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    firestore.collection(collection).onSnapshot((snapshot) => {
      setData(collectionToObject(snapshot));
      setIsLoading(false);
    });
  }, []);

  const add = useCallback(
    (obj) => firestore.collection(collection).add(obj),
    []
  );

  const update = useCallback(
    (id, fields) => firestore.collection(collection).doc(id).update(fields),
    []
  );

  const remove = useCallback(
    (docId) => firestore.collection(collection).doc(docId).delete(),
    []
  );

  return { data, error, isLoading, add, remove, update };
}
