import { useCallback, useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, update } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDV7zFCx667SAwrBh39NjqwDUd85HBJOrE",
  authDomain: "react-tutorial-79374.firebaseapp.com",
  databaseURL: "https://react-tutorial-79374-default-rtdb.firebaseio.com",
  projectId: "react-tutorial-79374",
  storageBucket: "react-tutorial-79374.appspot.com",
  messagingSenderId: "478363200775",
  appId: "1:478363200775:web:5221d1704cd7780b14a9a2",
  measurementId: "G-HLLVKXM6Z6"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => (
    onValue(ref(database, path), (snapshot) => {
     setData( snapshot.val() );
    }, (error) => {
      setError(error);
    })
  ), [ path ]);

  return [ data, error ];
};

const makeResult = (error) => {
  const timestamp = Date.now();
  const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback((value) => {
    update(ref(database, path), value)
    .then(() => setResult(makeResult()))
    .catch((error) => setResult(makeResult(error)))
  }, [database, path]);

  return [updateData, result];
};