import { StatusBar } from 'expo-status-bar';
import React from 'react';

import * as Svg from 'react-native-svg';

import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';

var width = Dimensions.get("window").width - 80; //full width
var height = Dimensions.get("window").height; //full height

export default function LoginPage() {
    return (
        <View style={styles.container}>
            <ImageBackground style={{ width: width, height: height, alignItems: 'center',justifyContent: "center" }} source={require('../assets/Images/loginPage.png')}></ImageBackground>
        <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: "relative",
        // width: 414,
        // height: 896,
        // backgroundColor: "linear-gradient(180deg, rgba(181, 255, 188, 0.95) 0%, #D2F0D7 100%)",
        // borderRadius: 20,
    },
});