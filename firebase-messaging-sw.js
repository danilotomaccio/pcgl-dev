import { getMessaging } from "firebase/messaging";
import { onBackgroundMessage } from "firebase/messaging/sw";

const firebaseConfig = {
    apiKey: "AIzaSyC_5sSUzZkMofwuI4f6uF1CdKa5uBBzSU4",
    authDomain: "pcgltricarico05.firebaseapp.com",
    databaseURL: "https://pcgltricarico05-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "pcgltricarico05",
    storageBucket: "pcgltricarico05.appspot.com",
    messagingSenderId: "320152077505",
    appId: "1:320152077505:web:f4c84686f061134a78c040",
    // measurementId: "G-7ZHL4J15XG"
};
initializeApp(firebaseConfig);

const messaging = getMessaging();
onBackgroundMessage(messaging, (payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});