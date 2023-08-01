import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';

import { firebaseConfig } from './credentialFirebase';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,
  app,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
};
