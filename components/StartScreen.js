import React, { useState } from 'react';

import { StyleSheet, Text, View, ImageBackground, TextInput, Pressable, Dimensions, Button, Image, Modal, Alert, TouchableHighlight } from 'react-native';

export default function StartScreen({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <ImageBackground style={
                {
                    position: "absolute",
                    width: Dimensions.get('window').width,
                    height: 900,
                    alignItems: 'center',
                    justifyContent: "center",
                    top: 0
                }
            } source={require('../assets/Images/background.png')}>

                <Image style={
                    {
                        position: "relative",
                        width: 280,
                        height: 200,
                        alignItems: 'center',
                        justifyContent: "center",
                        top: 0
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
                                <Text style={styles.modalText}>You traveled 3.2km! Congrats!</Text>

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
                        <Text style={styles.textStyle}>Show Modal</Text>
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
        paddingTop: 10,
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
        padding: 35,
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
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },


});