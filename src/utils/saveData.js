import { ref, set } from "firebase/database";
import { database } from "./firebaseConfig";

const textFields = ["left", "top", "fontSize", "fill", "fontFamily", "type", "text"];

export const saveData = (key, value) => {
  console.log(value);
  value = {
    ...value,
    objects: value.objects.map((obj) => {
      if (obj.type === "IText") {
        for (const key in obj) {
          if (!textFields.includes(key)) {            
            delete obj[key];
          }
        }
      }
      return obj;
    }),
  };


  return set(ref(database, key), value);
};
