import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Pressable, Image  } from 'react-native';

export default function FriendsList({navigation}) {


    return(
        <View style={styles.container}>




            <ImageBackground style={
              {position:"absolute", 
              width: 414, 
              height: 900, 
              alignItems: 'center',
              justifyContent: "center",
              top:0 }
              } source={require('../assets/Images/FriendsList.png')}>
            

            <Pressable style={styles.btnStart} onPress={() => navigation.navigate("dash")}>
                <Text style={styles.btnStartText}>dashboard</Text>
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
        alignItems: 'center',
        justifyContent: 'center',
        position: "relative",
       
    },
    btnStart:{
        paddingTop:10,
        top:-10,
        left:0
        
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
});