import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore/lite";

import products from "./products";
import Swal from "sweetalert2";

const firebaseConfig = {
  apiKey: "AIzaSyDum_2FucLYEb_w5947HPGiExtodFRfZAE",
  authDomain: "cloudvibes-ecommerce.firebaseapp.com",
  projectId: "cloudvibes-ecommerce",
  storageBucket: "cloudvibes-ecommerce.firebasestorage.app",
  messagingSenderId: "692482704960",
  appId: "1:692482704960:web:2fc08e3b325a5fd23a41a5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/* getBDData */

export async function getBDData() {
  // referencia a la colleccion - puntero (apunta a la coleccion)
  const collectionRef = collection(db, "products");
  const productsSnapshot = await getDocs(collectionRef);
  const docs = productsSnapshot.docs;
  const dataDocs = docs.map((item) => {
    return { ...item.data(), id: item.id };
  });
  return dataDocs;
}

/* getDBProductsDetails */

export async function getDBProductsDetails(value) {
  // refernecia a un solo documento con doc referencia documento. (base de datos / refencia / id )
  // apuntar a documento con DOC
  const documentRef = doc(db, "products", value);
  const docSnapshot = await getDoc(documentRef);
  console.log("CheckID", docSnapshot);

  const docData = docSnapshot.data();
  const docDataID = { ...docData, id: docSnapshot.id };
  console.log("Data with ID", docDataID);

  return docDataID;
}

// getCategoryData

export async function getCategoryData(categoryID) {
  const documentCategory = collection(db, "products");
  const q = query(documentCategory, where("category", "==", categoryID));
  const productSnapshot = await getDocs(q);
  const docs = productSnapshot.docs;
  const dataDocs = docs.map((item) => {
    return { ...item.data(), id: item.id };
  });
  return dataDocs;
}

export async function updateStockinFirebase() {
  const documentStock = collection(db, "products");
  const q = query(documentStock, where("stock"));
}

// getGenreData
export async function getGenreData(genreID) {
  const documentCategory = collection(db, "products");
  const q = query(documentCategory, where("genre", "==", genreID));
  const productSnapshot = await getDocs(q);
  const docs = productSnapshot.docs;
  const dataDocs = docs.map((item) => {
    return { ...item.data(), id: item.id };
  });
  return dataDocs;
}

export async function createBuyOrder(buyOrderData) {
  // write data in firestore
  const collectionRef = collection(db, "orders");
  const docRef = await addDoc(collectionRef, buyOrderData);
  
  Swal.fire({
    title: "Thanks for your Order!",
    text: `Order: ${docRef.id} `,
    icon: "success",
  });

  return docRef;
}

export async function exportProductsToFirestore() {
  // const productsContainer = products.map((e)=> addDoc(e))
  // ForEach no funciona bien con sincronia
  const collectionRef = collection(db, "products");

  // For of
  for (let items of products) {
    delete items.id;
    const docRef = await addDoc(collectionRef, items);
    console.log("ID Products", docRef.id);
    //  <button className="p-2 bg-amber-400 cursor-pointer hover:bg-blue-700"   onClick={exportProductsToFirestore}>
    //       Upload Data to Firestore
    //     </button>
  }
}

//Update Stock in Firestore

export async function updateStockItem(productID, itemsSelected) {
  const stockRef = doc(db, "products", productID);
  const stockSnapshot = await getDoc(stockRef);
  const stockData = stockSnapshot.data();

  if (!stockData) {
    console.log("Collection not found");
  }

  if (stockData.stock >= itemsSelected) {
    const updateStock = stockData.stock - itemsSelected;

    await updateDoc(stockRef, {
      stock: updateStock,
    });
    console.log("Se actualizo Stock", updateStock);
  }else{
    console.log("Stock insuficiente");
    
  }
}
