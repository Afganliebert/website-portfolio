import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDpdNNcuOaCKDqAQBlF-p8NfiZzQ3Tie5o", /* Ganti Sama apikey firebase kalian */
  authDomain: "afganliebert.firebaseapp.com",/* Ganti Sama auth Domain firebase kalian */
  projectId: "afganliebert-97471", /* Ganti sama Project id firebase kalian*/
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
