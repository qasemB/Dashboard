import { ref, onValue, off } from "firebase/database";
import { database } from "./firebaseConfig";
let lastref;
export const listenToData = (key, callback) => {
  const dbRef = ref(database, key);
  lastref = dbRef
  onValue(dbRef, (snapshot) => {
    const data = snapshot.val();
    callback(data);
  });
};

export const stopListeningToData = () => {
  if (lastref) {
    off(lastref); 
  }
};