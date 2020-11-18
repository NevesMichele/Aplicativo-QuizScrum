import React from 'react';

import { StyleSheet, Text, View, Image, StatusBar, ImageBackground } from 'react-native';


function Loses({ navigation }) {


  setTimeout(() => {

    navigation.navigate('Main')
  }, 2000);

  return (
    <>
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/fim.png')} style={styles.backgroundImage} >
          {/* <Image source={require('../../assets/game.gif')} style={styles.logo} /> */}


          {/* <Text style={styles.Text2}>FIM DE JOGO!</Text> */}


        </ImageBackground>
      </View>
    </>

  );


}

const styles = StyleSheet.create({


container: {
    flex: 1,
    backgroundColor: '#0d1a2b',
    alignItems: "center",
    justifyContent: "center",
  },

  backgroundImage: {
    flex: 1,
    width: '100%',
    height: 800,
    resizeMode: 'contain',
  },




  // Text2: {
  //   textAlign:"center",
  //   fontSize: 25,
  //   color: '#FFCD42',
  //   fontFamily: 'PressStart2P_400Regular',
  //   //paddingLeft: 35,
  //   // paddingStart: 1,
  //   paddingTop: 60,
  //   // paddingLeft: 15,
  //   // paddingRight: 15,
  //    width: "auto",
  //    height: "auto",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   marginTop: 280,
     
  // },
//---------------------------------------------------------------

  // logo: {

  //   width: 350,
  //   height: 250,
  //   paddingLeft: 10,
  //   resizeMode: 'contain',
  //   alignItems: "center",
  //   justifyContent: "center",
  //   marginTop: 250,
  // },

  // Text: {
  //   fontSize: 25,
  //   color: '#eed269',
  //   fontFamily: 'PressStart2P_400Regular',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   paddingLeft: 70,
  //   paddingTop: 60,

  // },
  //--------------------------------------------------------------




});



export default Loses;