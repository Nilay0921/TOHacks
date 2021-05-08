import { StatusBar } from 'expo-status-bar';
import React from 'react';


import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';



export default function LoginPage() {
    return (
        <View style={styles.container}>
            <ImageBackground style={{ width: 414, height: 900, alignItems: 'center',justifyContent: "center" }} source={require('../assets/Images/loginPage.png')}></ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop:30,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: "relative",
       
    },
});