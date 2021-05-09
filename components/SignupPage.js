import React, { useState }  from 'react';

import { StyleSheet, TextInput, View, ImageBackground,Pressable, Text } from 'react-native';




export default function SignupPage({navigation}) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");


    return (
      <View style={styles.container}>

          <ImageBackground style={{ position:"absolute", width: 414, height: 900, alignItems: 'center',justifyContent: "center" }} source={require('../assets/Images/signup.png')}>
            <Text style={styles.signupTitle}>Sign Up</Text>

            <TextInput style={[styles.generalStyle, styles.inputone]} onChangeText={(name) => setName(name)}  placeholder="name"/> 
            <TextInput style={[styles.generalStyle, styles.inputtwo]} onChangeText={(email) => setEmail(email)}  placeholder="email"/> 
            <TextInput style={[styles.generalStyle, styles.inputthree]} secureTextEntry={true} onChangeText={(password) => setPassword(password)}  placeholder="password"/>
            <TextInput style={[styles.generalStyle, styles.inputfour]} secureTextEntry={true} onChangeText={(confPassword) => setConfPassword(confPassword)}  placeholder="password"/> 
            
            <Pressable style={styles.btnSignup} onPress={() => navigation.navigate("login")}>
                <Text style={styles.btnSignupText}>sign up</Text>
            </Pressable>
           
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
  signupTitle:{
    top:-132,
    left:-35,
    width:200,
    fontSize:35,
    fontWeight:"700",
    color:"#41463D",
    elevation:5
},
  btnSignupText:{
    paddingTop:10,
    alignSelf:"center",
    textAlign:"center",
    fontSize: 18,
    fontWeight:"bold",
    color:"rgba(255, 255, 255, 0.75)"
  },
  btnSignup:{
    top:-50,
    left:-60,
    width:120,
    height:50,
    backgroundColor:"#41463D",
    borderRadius:15
  },
  inputone: {
    padding:0,
    width:253, 
    height:65, 
    left: 0, 
    top:-100,
  },
  inputtwo: {
    padding:0,
    top:-90,
    width:253, 
    height:65, 
    left: 0, 
  },

  inputthree: {
    top: -80
  },

  inputfour: {
    top: -70
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
