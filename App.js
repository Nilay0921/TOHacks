import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';

import { StyleSheet, Text, View } from 'react-native';

import LoginPage from "./components/LoginPage";

import firebase from "firebase";
import {distance} from './assets/distance';
import * as Location from 'expo-location';

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

let current_lat = '';
let current_lon = '';

function getLoc()
{
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    console.log(location.coords.latitude) 
    console.log(location.coords.longitude) 
    let lat = location.coords.latitude
    let lon = location.coords.longitude
    current_lat = lat;
    current_lon = lon;
  }
}


export default function App() {
  getLoc()
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <LoginPage />
      <StatusBar style="auto" />
      <Text style={styles.paragraph}>{current_lat}, {current_lon}</Text>
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
