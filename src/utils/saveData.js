import { ref, set } from "firebase/database";
import { database } from "./firebaseConfig";

export const saveData = (key, value) => {
  return set(ref(database, key), value)
};
