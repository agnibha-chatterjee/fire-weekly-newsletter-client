import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAoZqCirSO8MniC7V2EckFLDW4_VuEa5SU',
  authDomain: 'hattori-599af.firebaseapp.com',
  projectId: 'hattori-599af',
  storageBucket: 'hattori-599af.appspot.com',
  messagingSenderId: '483260909586',
  appId: '1:483260909586:web:90e110bf958df89aaeb0cb',
  measurementId: 'G-2X3BNEF5XN'
};

export const firebaseApp = initializeApp(firebaseConfig);

console.log('firebase initialized');
