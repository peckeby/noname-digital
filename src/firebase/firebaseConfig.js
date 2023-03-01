import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDgFOaGY9i9KkadBpRmgtnGGaTqK2sjsww',
  authDomain: 'noname-digital-b59f9.firebaseapp.com',
  projectId: 'noname-digital-b59f9',
  storageBucket: 'noname-digital-b59f9.appspot.com',
  messagingSenderId: '654630504951',
  appId: '1:654630504951:web:000d43d4ff07ba6aa8c6f2',
  measurementId: 'G-XM0YDMGPPQ',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
