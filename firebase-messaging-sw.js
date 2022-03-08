/* import { precacheAndRoute } from 'workbox-precaching';
precacheAndRoute(self.__WB_MANIFEST); */

import { initializeApp } from "firebase/app";
// import { getMessaging, getToken } from 'firebase/messaging'

const firebaseConfig = {
    apiKey: "AIzaSyC_5sSUzZkMofwuI4f6uF1CdKa5uBBzSU4",
    authDomain: "pcgltricarico05.firebaseapp.com",
    databaseURL: "https://pcgltricarico05-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "pcgltricarico05",
    storageBucket: "pcgltricarico05.appspot.com",
    messagingSenderId: "320152077505",
    appId: "1:320152077505:web:f4c84686f061134a78c040",
    measurementId: "G-7ZHL4J15XG"
};

const app = initializeApp(firebaseConfig);
/* const messaging = getMessaging();
getToken(messaging, { vapidKey: "BOZDAwlyoFZqyXvJvmwtGxv3kYLHPRSdXa3V0va9tNN_2fjo5jk3FF6y8Muf2hJFtZlsypbCwmkL2W7NX9L4GkU" }); */