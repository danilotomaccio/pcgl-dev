importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.2.7/firebase-messaging.js')

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

const app = firebase.initializeApp(firebaseConfig);