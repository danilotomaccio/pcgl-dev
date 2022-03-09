
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyCGLXls0uwohW8UczwMuMPgY61QRCyjydA",
  authDomain: "soter-ia.firebaseapp.com",
  databaseURL: "https://soter-ia.firebaseio.com",
  projectId: "soter-ia",
  storageBucket: "soter-ia.appspot.com",
  messagingSenderId: "712755300293",
  appId: "1:712755300293:web:9c91cc4c98e2a36b77edac",
  measurementId: "G-6Y82RJ5Q37",
};
/* 
const firebaseConfig = {
    apiKey: "AIzaSyC_5sSUzZkMofwuI4f6uF1CdKa5uBBzSU4",
    authDomain: "pcgltricarico05.firebaseapp.com",
    databaseURL: "https://pcgltricarico05-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "pcgltricarico05",
    storageBucket: "pcgltricarico05.appspot.com",
    messagingSenderId: "320152077505",
    appId: "1:320152077505:web:f4c84686f061134a78c040",
    measurementId: "G-7ZHL4J15XG"
}; */

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(messaging, (payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/img/icons/android-chrome-192x192.png'
    };
  
    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });