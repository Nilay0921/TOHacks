import React , { useState }from 'react';

import { StyleSheet, Text, View, ImageBackground, TextInput, Image } from 'react-native';



export default function LeadershipPage() {
  return (
    <View style={styles.container}> 
      <ImageBackground style={{position:"absolute", width: 414, height: 900, alignItems: 'center',justifyContent: "center",top:0 }} source={require('../assets/Images/background.png')}>
        <Text>Daily:</Text>

        <Image style={{width: 500, height: 500}} source={require('../assets/Images/weeklyReport.jpeg')}></Image>
        <Text>Weekly:</Text>
        <Text>Monthly:</Text>
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
});
