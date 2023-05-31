import { getFirestore, doc, getDoc, collection, getDocs, addDoc, updateDoc, setDoc, deleteDoc } from 'firebase/firestore'

// PRODUCTS
const getAll = async () => {
  const db = getFirestore();
  const productsColections = collection(db, 'productos')
  const response = await getDocs(productsColections);
  const products = response.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  return products
}

const updeteStock = async (id, size, newAmount) => {
  const db = getFirestore();
  const productDoc = doc(db, 'productos', id);
  const updateObj = {};
  updateObj[`stock.${size}`] = newAmount;
  await updateDoc(productDoc, updateObj);
}

const deleteProduct = (id) => {
  const db = getFirestore();
  const productDoc = doc(db, 'productos', id);
  return deleteDoc(productDoc)
}

const get = async (id) => {
  const db = getFirestore();
  const productDoc = doc(db, 'productos', id);
  const response = await getDoc(productDoc);
  if (response.exists()) {
    const product = { id: response.id, ...response.data() }
    return product
  }
  return false
}

const updateProduct = async (product) => {
  const db = getFirestore();
  const productDoc = doc(db, 'productos', product.id);
  return await setDoc(productDoc, product)
}

const addProduct = (product) => {
  const db = getFirestore();
  const productCollection = collection(db, 'productos')
  return addDoc(productCollection, product)
}

// ORDERS

const newOrder = (order) => {
  const db = getFirestore();
  const ordersCollection = collection(db, 'orders');
  return addDoc(ordersCollection, order)
}

const getAllOrders = async () => {
  const db = getFirestore();
  const ordersColection = collection(db, 'orders');
  const response = await getDocs(ordersColection);
  const orders = response.docs.map(doc => ({id: doc.id, ...doc.data() }))
  return orders
}

const deleteOrder = (id) => {
  const db = getFirestore();
  const orderDoc = doc(db, 'orders', id);
  return deleteDoc(orderDoc)
}



const updateStateOrders = async (id, state) => {
  const db = getFirestore();
  const orderDoc = doc(db, 'orders' , id);
  const newState = {state: state}
  await updateDoc(orderDoc, newState);
}


export const productService = { getAll, get, newOrder, updeteStock, addProduct, updateProduct, deleteProduct, getAllOrders, deleteOrder, updateStateOrders }