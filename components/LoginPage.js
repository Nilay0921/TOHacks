import React , { useState }from 'react';

import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';



export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <View style={styles.container}> 
  
              
          <ImageBackground style={{position:"absolute", width: 414, height: 900, alignItems: 'center',justifyContent: "center",top:0 }} source={require('../assets/Images/loginPage.png')}>
            <TextInput style={styles.inputone} onChangeText={(email) => setEmail(email)}  placeholder="email"/> 
            <TextInput style={styles.inputtwo} secureTextEntry={true} onChangeText={(password) => setPassword(password)}  placeholder="password"/> 
          </ImageBackground>
             
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: "relative",
       
    },
    inputone: {
        padding:0,
        width:253, 
        height:65, 
        left: 0, 
        top:-140,
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
      inputtwo: {
        padding:0,
        top:-130,
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