import React, { useState } from 'react';

import { StyleSheet, Text, View, ImageBackground, Pressable, Dimensions, Button, Image, Modal, Alert, TouchableHighlight } from 'react-native';

import { ProgressBar, Colors } from 'react-native-paper';


import * as Progress from 'react-native-progress';
import { spring } from 'react-native-reanimated';



export default function StartScreen({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);

    var backgroundCol = true;

    const setBlur = () => {
        modalVisible ? backgroundCol = false : backgroundCol = true;
    }

    setBlur();
    return (
        <View style={styles.container}>
            <ImageBackground style={
                {
                    position: "absolute",
                    width: Dimensions.get('window').width,
                    height: 900,
                    alignItems: 'center',
                    justifyContent: "center",
                    top: 0,
                    opacity: !backgroundCol ? 0.4 : 1
                }
            } 
            source={require('../assets/Images/background.png')}>

                <Pressable style={{ top: 125, flexDirection: "row" }} >
                    <Text style={{fontSize: 20}}>Set Daily Goal : </Text>
                    <Text style={{color: "rgba(231, 84, 128, 1)", fontSize: 20}}>4.5 </Text>
                    <Text style={{fontSize: 20}}>Kilometers</Text>

                </Pressable>

                <Progress.Bar style={{top: 150}} color="rgba(65, 70, 61, 1)" borderRadius={20} progress={0.7} width={200} height={50} />

                <Pressable style={{ top: 175, flexDirection: "row" }} >
                    <Text style={{fontSize: 20}}>You Have Completed : </Text>
                    <Text style={{color: "rgba(231, 84, 128, 1)", fontSize: 20}}>3.7 </Text>
                    <Text style={{fontSize: 20}}>Kilometers</Text>
                </Pressable>
                
                <Image style={
                    {
                        position: "relative",
                        width: 280,
                        height: 200,
                        alignItems: 'center',
                        justifyContent: "center",
                        top: 200,
                        //opacity: backgroundCol ? 0.1 : 1
                    }} source={require('../assets/Images/loading.gif')}></Image> 




                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>You traveled 3.7 km, Almost reached your daily goal!</Text>

                                <TouchableHighlight
                                    style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
                                    onPress={() => {
                                        navigation.navigate("dash");
                                        setModalVisible(!modalVisible);
                                    }}>
                                    <Text style={styles.textStyle}>Back to Dashboard</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Modal>
                    <TouchableHighlight
                        style={styles.openButton}
                        onPress={() => {
                            setModalVisible(true);
                        }}>
                        <Text style={styles.textStyle}>STOP</Text>
                    </TouchableHighlight>
                </View>


                <Button title="Stop" onPress={() => navigation.navigate("dash")}></Button>
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
    btnSigninText: {
        paddingTop: 5,
        alignSelf: "center",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        color: "rgba(255, 255, 255, 0.75)"
    },
    btnSignin: {
        top: -90,
        left: -60,
        width: 120,
        height: 50,
        backgroundColor: "#41463D",
        borderRadius: 15
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        height: 50,
        width: 300
    },
    textStyle: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },


});