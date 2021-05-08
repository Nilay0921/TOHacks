import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import LoginPage from "./components/LoginPage";

import firebase from "firebase";


var firebaseConfig = {
  apiKey: "AIzaSyCcKFBHuyG-vpL9FvzBCyN7Gtj0fwDCoSQ",
  authDomain: "tohacks-ff343.firebaseapp.com",
  projectId: "tohacks-ff343",
  storageBucket: "tohacks-ff343.appspot.com",
  messagingSenderId: "381681073929",
  appId: "1:381681073929:web:663178803d422c9dcb1dd8",
  measurementId: "G-6GXD9VSYZS"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

// const getUsername = () => {
//   var toReturn = null;
//   firebase.firestore().collection("Users").doc("gkWaMtCQ2CTuSBBoM3jX").get().then((res) => {


//     console.log("HEREEE2: ", res.data().username);
//     toReturn = res.data().username;
    

//   })

  
//   return toReturn;
// }



export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <LoginPage />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
