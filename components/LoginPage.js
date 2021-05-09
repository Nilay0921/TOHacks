import React , { useState }from 'react';

import { StyleSheet, Text, View, ImageBackground, TextInput, Pressable  } from 'react-native';



export default function LoginPage({navigation}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    return (
        <View style={styles.container}> 
  
              
          <ImageBackground style={
              {position:"absolute", 
              width: 414, 
              height: 900, 
              alignItems: 'center',
              justifyContent: "center",
              top:0 }
              } source={require('../assets/Images/loginPage.png')}>
            
            <Text style={styles.loginTitle}>Login</Text>
            
            <TextInput style={styles.inputone} onChangeText={(email) => setEmail(email)}  placeholder="email"/> 
            <TextInput style={styles.inputtwo} secureTextEntry={true} onChangeText={(password) => setPassword(password)}  placeholder="password"/> 
          
            
            <Pressable style={styles.btnSignin} onPress={() => navigation.navigate("dash")}>
                <Text style={styles.btnSigninText}>sign in</Text>
            </Pressable>
            
            
            <Text style={styles.forgotPass}>Forgot password? Click here</Text>
            
            <Pressable style={styles.signupstuff} onPress={() => navigation.navigate("sign")}> 
                <Text style={styles.signUPText}>Don't have an account? Sign Up</Text>
            </Pressable>


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
    signupstuff:{
        paddingTop:10,
        width:250,
        height:30,
        left:15,
    },
    signUPText:{
        top:-80,
        left:-11,
        fontSize:14,
        fontWeight:"300",
        color:"#41463D",
        elevation:5
    },
    forgotPass:{
        left:-20,
        top:-80,
        fontSize:14,
        fontWeight:"300",
        color:"#41463D",
        elevation:5
    },
    loginTitle:{
        top:-130,
        left:-70,
        width:120,
        fontSize:35,
        fontWeight:"700",
        color:"#41463D",
        elevation:5
    },
    btnSigninText:{
        paddingTop:10,
        alignSelf:"center",
        textAlign:"center",
        fontSize: 18,
        fontWeight:"bold",
        color:"rgba(255, 255, 255, 0.75)"
    },
    btnSignin:{
        top:-90,
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
        top:-120,
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
        top:-110,
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