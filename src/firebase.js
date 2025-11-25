// Firebase Configuration
// UWAGA: Zamień poniższe wartości na swoje dane z Firebase Console
// https://console.firebase.google.com/

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy, doc, setDoc, updateDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyATTc-iIDg7QY46y1qrZrQHB_Kf733y0iw",
  authDomain: "rpg-antares.firebaseapp.com",
  projectId: "rpg-antares",
  storageBucket: "rpg-antares.appspot.com",
  messagingSenderId: "123932345116",
  appId: "1:123932345116:web:1dc2d39f42bd54f93370d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Funkcja zapisu wyniku gracza
export async function savePlayerScore(playerName, score) {
  try {
    const playerRef = doc(db, 'players', playerName);
    await setDoc(playerRef, {
      name: playerName,
      score: score,
      timestamp: new Date().toISOString()
    });
    console.log('Wynik zapisany pomyślnie!');
  } catch (error) {
    console.error('Błąd zapisu wyniku:', error);
    throw error;
  }
}

// Funkcja aktualizacji wyniku gracza
export async function updatePlayerScore(playerName, additionalScore) {
  try {
    const playerRef = doc(db, 'players', playerName);
    await updateDoc(playerRef, {
      score: additionalScore,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Błąd aktualizacji wyniku:', error);
    throw error;
  }
}

// Funkcja pobierania rankingu w czasie rzeczywistym
export function subscribeToLeaderboard(callback) {
  const q = query(collection(db, 'players'), orderBy('score', 'desc'));
  
  return onSnapshot(q, (querySnapshot) => {
    const players = [];
    querySnapshot.forEach((doc) => {
      players.push({
        id: doc.id,
        ...doc.data()
      });
    });
    callback(players);
  });
}

export { db };
