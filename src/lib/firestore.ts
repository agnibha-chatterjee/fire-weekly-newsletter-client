import { Stock, Subscriber } from '@/types';
import { firebaseApp } from './firebase';
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
  doc,
  updateDoc
} from 'firebase/firestore';

const COLLECTION_NAME = 'newsletter';

const db = getFirestore(firebaseApp);
const col = collection(db, COLLECTION_NAME);

export const subscribe = async (data: any) => {
  try {
    await addDoc(col, data);
    return true;
  } catch (error) {
    console.error('Error adding document: ', error);
    return false;
  }
};

export const doesEmailExist = async (email: string) => {
  try {
    const q = query(col, where('email', '==', email));
    const allDocs = getDocs(q);
    return (await allDocs).docs.length > 0;
  } catch (error) {
    console.error('Error getting document: ', error);
    return false;
  }
};

export const getSubscription = async (email: string) => {
  try {
    const q = query(col, where('email', '==', email));
    const querySnapshot = await getDocs(q);
    let subscriber: Subscriber | undefined;
    querySnapshot.forEach(doc => {
      subscriber = doc.data() as Subscriber;
      subscriber.id = doc.id;
    });
    return subscriber;
  } catch (error) {
    console.error('Error getting document: ', error);
    return undefined;
  }
};

export const updateSubscription = async (
  id: string,
  subscribedStocks: Stock[]
) => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(docRef, {
      stocks: subscribedStocks
    });
    return true;
  } catch (error) {
    console.error('Error updating document: ', error);
    return false;
  }
};
