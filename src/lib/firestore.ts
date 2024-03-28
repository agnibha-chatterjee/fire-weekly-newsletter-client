import { LinksThatDontSuck, Stock, Subscriber } from "@/types";
import { firebaseApp } from "./firebase";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
  doc,
  updateDoc,
  getDoc,
  Timestamp,
} from "firebase/firestore";

const NEWSLETTER_COLLECTION = "newsletter";
const SUMMARIES_COLLECTION = "summaries";
const LINKS_COLLECTION = "links";

const db = getFirestore(firebaseApp);
const newsletterCol = collection(db, NEWSLETTER_COLLECTION);
const linksCol = collection(db, LINKS_COLLECTION);
const summariesCol = collection(db, SUMMARIES_COLLECTION);

export const subscribe = async (data: any) => {
  try {
    await addDoc(newsletterCol, data);
    return true;
  } catch (error) {
    console.error("Error adding document: ", error);
    return false;
  }
};

export const doesEmailExist = async (email: string) => {
  try {
    const q = query(newsletterCol, where("email", "==", email));
    const allDocs = getDocs(q);
    return (await allDocs).docs.length > 0;
  } catch (error) {
    console.error("Error getting document: ", error);
    return false;
  }
};

export const getSubscription = async (email: string) => {
  try {
    const q = query(newsletterCol, where("email", "==", email));
    const querySnapshot = await getDocs(q);
    let subscriber: Subscriber | undefined;
    querySnapshot.forEach((doc) => {
      subscriber = doc.data() as Subscriber;
      subscriber.id = doc.id;
    });
    return subscriber;
  } catch (error) {
    console.error("Error getting document: ", error);
    return undefined;
  }
};

export const updateSubscription = async (
  id: string,
  subscribedStocks: Stock[]
) => {
  try {
    const docRef = doc(db, NEWSLETTER_COLLECTION, id);
    await updateDoc(docRef, {
      stocks: subscribedStocks,
    });
    return true;
  } catch (error) {
    console.error("Error updating document: ", error);
    return false;
  }
};

export const getAllSubscriptions = async () => {
  try {
    const querySnapshot = await getDocs(newsletterCol);
    let subscribers: Subscriber[] = [];
    querySnapshot.forEach((doc) => {
      const subscriber = doc.data() as Subscriber;
      subscriber.id = doc.id;
      subscribers.push(subscriber);
    });
    return subscribers;
  } catch (error) {
    console.error("Error getting document: ", error);
    return [];
  }
};

export const getNewsSummaryForStock = async (ticker: string) => {
  try {
    const parentDocRef = doc(db, "summaries", "03-24-2024");
    const nestedCollectionRef = collection(parentDocRef, ticker);

    const allDocs = await getDocs(nestedCollectionRef);
    let docc: any = {};
    allDocs.forEach((doc) => {
      docc = { ...doc.data(), id: doc.id };
    });

    return {
      ...docc,
    };
  } catch (error) {
    console.error("Error getting document: ", error);
    return undefined;
  }
};

function addDays(days: number) {
  var date = new Date();
  date.setDate(date.getDate() + days);
  return date;
}

export const getLinksThatDontSuck =
  async (): Promise<null | LinksThatDontSuck> => {
    try {
      const startDate = new Date();
      const endDate = addDays(1);

      const startTimestamp = Timestamp.fromDate(startDate);
      const endTimestamp = Timestamp.fromDate(endDate);

      const q = query(
        linksCol,
        where("date", ">=", startTimestamp),
        where("date", "<", endTimestamp)
      );

      const querySnapshot = await getDocs(q);

      let lnks: LinksThatDontSuck | null = null;
      querySnapshot.forEach((doc) => {
        lnks = doc.data() as LinksThatDontSuck;
        lnks.id = doc.id;
      });

      return lnks;
    } catch (error) {
      console.error("Error getting document: ", error);
      return null;
    }
  };
