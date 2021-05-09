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

            <Text style={styles.dashboard}>Dashboard</Text>

                <Image style={
                  {position:"relative", 
                  top:-10,
                  left:-175,
                  width:25, 
                  height: 30,
                  alignItems: 'center',
                  justifyContent: "center",}} source={require('../assets/Images/leaderboard-icon.png')}>
                </Image>

              <Pressable  onPress={() => navigation.navigate("leader")}>
                <Text style={{top:-20, left:-120,fontFamily: "Roboto", fontSize: 25, color:"#41463D"}}>Leaderboard</Text>
                <Image style={
                  {position:"relative", 
                  top:0,
                  width: 25, 
                  height: 25,
                  alignItems: 'center',
                  justifyContent: "center",}} source={require('../assets/Images/btn.png')}>
                </Image> 
              </Pressable>

              <Image style={
                  {position:"relative", 
                  top:-91,
                  left:10,
                  width: 30, 
                  height: 30,
                  alignItems: 'center',
                  justifyContent: "center",}} source={require('../assets/Images/Progress.png')}>
                </Image> 
              <Text style={{top:-130, left:100,fontFamily: "Roboto", fontSize: 30, color:"#41463D"}}>Progress</Text>
              
              <Image style={
                  {position:"relative", 
                  top:-125,
                  left:30,
                  width: 75, 
                  height: 97,
                  alignItems: 'center',
                  justifyContent: "center",}} source={require('../assets/Images/daily.png')}>
                </Image> 

                <Image style={
                  {position:"relative", 
                  top:-223,
                  left:130,
                  width: 75, 
                  height: 97,
                  alignItems: 'center',
                  justifyContent: "center",}} source={require('../assets/Images/Weekly.png')}>
                </Image> 
                
                <Pressable style={styles.friendsList} onPress={() => navigation.navigate("friendlist")}>
                  <Text style={{top:-32, left:10,fontFamily: "Roboto", fontSize: 20, color:"#41463D"}}>Friend List</Text>
                  <Image style={
                    {position:"relative", 
                    top:-60,
                    left:120,
                    width: 44, 
                    height: 27,
                    alignItems: 'center',
                    justifyContent: "center",}} source={require('../assets/Images/FriendsIcon.png')}>
                  </Image>   

                  <Image style={
                    {position:"relative", 
                    top:-50,
                    left:10,
                    width: 25, 
                    height: 25,
                    alignItems: 'center',
                    zIndex:180,
                    justifyContent: "center",}} source={require('../assets/Images/btn.png')}>
                  </Image> 
                </Pressable>


            <Pressable style={styles.btnStart} onPress={() => navigation.navigate("start")}>
                <Text style={styles.btnStartText}>start tracking</Text>
                <Image style={
                    {position:"relative", 
                    top:-37,
                    left:150,
                    width: 25, 
                    height: 25,
                    alignItems: 'center',
                    zIndex:100,
                    justifyContent: "center",}} source={require('../assets/Images/white-btn.png')}>
                  </Image> 
            </Pressable>
          

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
  btnStart:{
    top:-130,
    left:90
    
},
btnStartText:{
    paddingTop:10,
    paddingLeft:10,
    width:190,
    height:50,
    backgroundColor:"#41463D",
    fontSize: 18,
    borderRadius:15,
    color:"#fff"
},
friendsList:{
  top:-150,
  left:50,

},
dashboard:{
  top:-60,
  left:-92,
  width:190,
  fontSize:35,
  fontWeight:"700",
  color:"#41463D",
  elevation:5
},

});
