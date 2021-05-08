import React, { useState }  from 'react';

import { StyleSheet, TextInput, View, ImageBackground, Dimensions, Button } from 'react-native';




export default function SignupPage({navigation}) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");


    return (
      <View style={styles.container}>

          <ImageBackground style={{ width: 414, height: 900, alignItems: 'center',justifyContent: "center" }} source={require('../assets/Images/signup.png')}>
            <TextInput style={[styles.generalStyle, styles.inputone]} onChangeText={(name) => setName(name)}  placeholder="name"/> 
            <TextInput style={[styles.generalStyle, styles.inputtwo]} onChangeText={(email) => setEmail(email)}  placeholder="email"/> 
            <TextInput style={[styles.generalStyle, styles.inputthree]} secureTextEntry={true} onChangeText={(password) => setPassword(password)}  placeholder="password"/>
            <TextInput style={[styles.generalStyle, styles.inputfour]} secureTextEntry={true} onChangeText={(confPassword) => setConfPassword(confPassword)}  placeholder="password"/> 
            <Button title="Submit" onPress={() => navigation.navigate("leader")}></Button>

          </ImageBackground>
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
  inputone: {
    padding:0,
    width:253, 
    height:65, 
    left: 0, 
    top:-140,
  },
  inputtwo: {
    padding:0,
    top:-130,
    width:253, 
    height:65, 
    left: 0, 
  },

  inputthree: {
    top: -120
  },

  inputfour: {
    top: -110
  },

  generalStyle: {
    width:253, 
    height:65, 
    left: 0, 
    elevation:2,
    borderRadius:25,
    borderWidth:0,
    backgroundColor: '#E7FAE9',
    shadowColor: "#FFFFFF00",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.30,
    shadowRadius: 2.65,
    elevation: 5, 
    paddingHorizontal:20
  },


});
