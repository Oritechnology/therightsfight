
const firebase = require('firebase')
// inside the firebase console, create a new project
// then you'll be able to copy your config object by simply clicking the
// 'Add Firebase to your web app' button on the Overview screen at
// https://console.firebase.google.com/project/YOUR_PROJECT_ID/overview
const config = {
  apiKey: "AIzaSyAYUi7h6mbzmNU-_h6zPL--PxpSXSqsLvQ",
  authDomain: "therightsfight2017.firebaseapp.com",
  databaseURL: "https://therightsfight2017.firebaseio.com",
  projectId: "therightsfight2017",
  storageBucket: "",
  messagingSenderId: "158996629007"
}

firebase.initializeApp(config)

module.exports = firebase
