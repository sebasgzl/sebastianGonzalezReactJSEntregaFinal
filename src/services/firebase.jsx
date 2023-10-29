import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  where,
  query,
  addDoc,
  setDoc,
  writeBatch,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRiBeJGAjji58ytmQ0pFV2jyula9LSSj4",
  authDomain: "entregafinal-piazza.firebaseapp.com",
  projectId: "entregafinal-piazza",
  storageBucket: "entregafinal-piazza.appspot.com",
  messagingSenderId: "613028206186",
  appId: "1:613028206186:web:01e1d7ce2dde69b038dc13",
  measurementId: "G-GCEKCESDG5",
};

const appFirebase = initializeApp(firebaseConfig);

const db = getFirestore(appFirebase);

async function getProducts() {
  const productsRef = collection(db, "products");
  const documentsSnapshot = await getDocs(productsRef);
  const documents = documentsSnapshot.docs;
  const docsData = documents.map((item) => {
    return { ...item.data(), id: item.id };
  });
  return docsData;
}

async function getProductById(id) {
  const docRef = doc(db, "products", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    return { ...docSnapshot.data(), id: docSnapshot.id };
  } else {
    throw new Error("No encontramos ese producto.");
  }
}

async function getProductsByCategory(categoryId) {
  const productsRef = collection(db, "products");
  const q = query(productsRef, where("category", "==", categoryId));
  const documentsSnapshot = await getDocs(q);

  const documents = documentsSnapshot.docs;

  return documents.map((item) => ({ ...item.data(), id: item.id }));
}

async function createOrder(orderData) {
  const collectionRef = collection(db, "orders");
  const docCreated = await addDoc(collectionRef, orderData);

  return docCreated.id;
}

async function getOrder(id) {
  const docRef = doc(db, "orders", id);
  const docSnapshot = await getDoc(docRef);

  return { ...docSnapshot.data(), id: docSnapshot.id };
}


export {
  getProducts,
  getOrder,
  getProductById,
  getProductsByCategory,
  createOrder,
};
