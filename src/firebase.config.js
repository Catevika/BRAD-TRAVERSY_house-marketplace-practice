// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDaPOTfvA7nvqPiwOw4al0KNSI9Zn6z4Os',
	authDomain: 'house-marketplace-app-e2f9d.firebaseapp.com',
	projectId: 'house-marketplace-app-e2f9d',
	storageBucket: 'house-marketplace-app-e2f9d.appspot.com',
	messagingSenderId: '592531036224',
	appId: '1:592531036224:web:85fe637484d7eacf35a7a5'
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
