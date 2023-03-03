// import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebaseConfig';
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase';

/* Initialize Firebase */
const Firebase = firebase.initializeApp(firebaseConfig);

/* Initialize DB */
export const db = Firebase.firestore();
/* Initialize auth */
export const auth = Firebase.auth();

/* Create products */
export const createProducts = (db, products) => {
  //Create promises array
  let listPromises = products.map((prod, index) => {
    return createProduct(db, prod);
  });

  return Promise.all(listPromises);
};

/* Create product */
export const createProduct = (db, item) => {
  return db.collection('products').doc(item.id).set({
    name: item.name,
    price: item.price,
    category: item.category,
    image: item.image,
    description: item.description,
  });
};

/* Update products */
export const updateProducts = (db, products) => {
  //Create promises array
  let listPromises = products.map((prod, index) => {
    return updateProduct(db, prod);
  });

  return Promise.all(listPromises);
};

/* Update product */
export const updateProduct = (db, item) => {
  return db.collection('products').doc(item.id).update({
    stock: item.stock,
  });
};

/* Read All documents from Products Collection */
export const getProducts = db => {
  return new Promise((resolve, reject) => {
    db.collection('products')
      .get()
      .then(querySnapshot => {
        let products = [];
        querySnapshot.forEach(doc => {
          let prod = {
            id: doc.id,
            name: doc.data().name,
            price: doc.data().price,
            image: doc.data().image,
            category: doc.data().category,
            description: doc.data().description,
          };

          products.push(prod);
        });
        resolve(products);
      })
      .catch(error => reject(error));
  });
};

/* Create User */
export const createUser = (auth, email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

/* Create User */
export const signInUser = (auth, email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

/* Create User */
export const signOutUser = auth => auth.signOut();
