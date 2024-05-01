import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCWBhzIuSbhJZhV3QuYOR3VbS7zDm_vik0",
  authDomain: "food-delivery-d04dd.firebaseapp.com",
  projectId: "food-delivery-d04dd",
  storageBucket: "food-delivery-d04dd.appspot.com",
  messagingSenderId: "892500160028",
  appId: "1:892500160028:web:0db3ddf1ba56c4c176f9d9"
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app)

export { storage }