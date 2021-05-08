import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';

import { StyleSheet, Text, View } from 'react-native';

import LoginPage from "./components/LoginPage";

import SignupPage from "./components/SignupPage";


import firebase from "firebase";
import {distance} from './assets/distance';
import * as Location from 'expo-location';

import Navigator from './Routes/homeStack';


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

// get the current location
function get_Loc()
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

//Write to firebase and update the start vaules
function update_start_loc(current_lat, current_lon) {
 firebase.firestore().collection("Users").doc("gkWaMtCQ2CTuSBBoM3jX").update({
   'startLat': current_lat,
   'startLon': current_lon
 }).then(() => {

console.log('Updated Start Lat/Lon');
})
}

//Write to firebase and update the end vaules
function update_end_loc(current_lat, current_lon) {
  firebase.firestore().collection("Users").doc("gkWaMtCQ2CTuSBBoM3jX").update({
    'endLat': current_lat,
    'endLon': current_lon
  }).then(() => {
 
 console.log('Updated End Lat/Lon');
 })
 } 



export default function App() {
  get_Loc()
  return (

    <Navigator/>
    // <View style={styles.container}>
    //   {/**<Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    //   <Text style={styles.paragraph}>{current_lat}, {current_lon}</Text>*/}
    // <SignupPage />

    // </View>
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
