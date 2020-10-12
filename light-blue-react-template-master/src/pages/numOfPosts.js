import React from "react"
import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
var config = {
    apiKey: "AIzaSyDsFYFFrQSKyTW852dCPDSM0FTZu8QlfEs",
    authDomain: "virtualreception-bfa65.firebaseapp.com",
    databaseURL: "https://virtualreception-bfa65.firebaseio.com",
    projectId: "virtualreception-bfa65",
    storageBucket: "virtualreception-bfa65.appspot.com",
    messagingSenderId: "450291103818",
    appId: "1:450291103818:web:ddc40cbf8754771f1dceb3",
    measurementId: "G-YD1DZRQ32T"  
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
var db = firebase.firestore();

var database = firebase.database();
var usersRef = db.collection("Users");
  usersRef.doc("BxQGdgs2wKBCk79Cb5pr").onSnapshot(function(doc) {
        console.log("Current data: ", doc.data());
    });
    var docRef = db.collection("Users").doc("BxQGdgs2wKBCk79Cb5pr");

    docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });


function NumOfPosts() {
  var posts=0;
  usersRef.doc("BxQGdgs2wKBCk79Cb5pr").get().then((docRef) => {
    posts = docRef.data().numOfPosts;
  })
  return posts
}
export default NumOfPosts
