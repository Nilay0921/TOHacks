import React , { useState }from 'react';

import { StyleSheet, Text, View, ImageBackground, TextInput, Pressable, Dimensions, Button, Image  } from 'react-native';

export default function Dashboard({navigation}) {
  return (
    <View style={styles.container}> 
      <ImageBackground style={
              {position:"absolute", 
              width: Dimensions.get('window').width, 
              height: 900,
              alignItems: 'center',
              justifyContent: "center",
              top:0 }
              } source={require('../assets/Images/Dashboard.png')}>

            
            <Text style={{fontFamily: "Arial", fontSize: 25}}>Leaderboard</Text>
            <Text style={{fontFamily: "Arial", fontSize: 25}}>Progress</Text>
            <Text style={{fontFamily: "Arial", fontSize: 25}}>Friends List</Text>

            
            <Pressable style={styles.btnSignin} onPress={() => navigation.navigate("dash")}>
                <Text style={styles.btnSigninText}>start tracking</Text>
            </Pressable>
            

            <Image style={
              {position:"relative", 
              width: 75, 
              height: 97,
              alignItems: 'center',
              justifyContent: "center",
              top:0 }} source={require('../assets/Images/daily.png')}></Image>

            <Image style={
              {position:"relative", 
              width: 75, 
              height: 97,
              alignItems: 'center',
              justifyContent: "center",
              top:0 }} source={require('../assets/Images/Weekly.png')}></Image>




              <Button title="aosidjaosidjas" onPress={() => navigation.navigate("sign")}></Button>
      </ImageBackground>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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


});
