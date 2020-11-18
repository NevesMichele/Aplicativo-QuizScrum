import React from 'react';

import { StyleSheet, Text, View, Image, StatusBar, ImageBackground } from 'react-native';


function Winner({ navigation }) {


  setTimeout(() => {

    navigation.navigate('Main')
  }, 4000);

  return (
    <>
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/nada.png')} style={styles.backgroundImage} >
          <Image source={require('../../assets/trophy.gif')} style={styles.logo} />


          <Text style={styles.Text}>PARABÉNS!</Text>


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




  logo: {

    width: 350,
    height: 250,
    //paddingLeft: 10,
    resizeMode: 'contain',
    alignItems: "center",
    justifyContent: "center",
    marginTop: 250,
    flex: 0,
  },

  Text: {
    fontSize: 25,
    color: '#FFCD42',
    fontFamily: 'PressStart2P_400Regular',
    //justifyContent: 'center',
   // alignItems: 'center',
    //paddingLeft: 70,
    textAlign:'center',
    paddingTop: 60,

  },






});



export default Winner;