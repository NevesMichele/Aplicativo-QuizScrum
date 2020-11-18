
import React from 'react';
//import { useFonts,Slackey_400Regular } from '@expo-google-fonts/slackey';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, ImageBackground, BackHandler } from 'react-native';
import { Container, TabsContainer, Container1, TabsContainer1, TabItem, TabItemG, TabItemY, TabItemR, TabText, TabTextB, TabText1 } from './styles';




function Main({ navigation }) {
  const placar = {
    pontos: 0,
    vidas: 3
  };
  return (
    <>
      <ScrollView >   

       <ImageBackground source={require('../../assets/main.png')} style={styles.backgroundImage} > 

        
        <View style={styles.container}>

          <TouchableOpacity activeOpacity={0.6} style={styles.button1} onPress={() => navigation.navigate('Scrum')}>

            <Text style={styles.buttonText}> SCRUM </Text>


          </TouchableOpacity>


          <TouchableOpacity activeOpacity={0.6} style={styles.button2} onPress={() => navigation.navigate('Question1', placar)}>
            <Text style={styles.buttonText}> QUIZ </Text>
          </TouchableOpacity>
          
          <TouchableOpacity activeOpacity={0.6} style={styles.button2} onPress={() => navigation.navigate('Sobre')}>
            <Text style={styles.buttonText}> SOBRE </Text>
          </TouchableOpacity>



          <TouchableOpacity activeOpacity={0.6} style={styles.button2} onPress={() => BackHandler.exitApp()}>
            <Text style={styles.buttonText}> SAIR </Text>
          </TouchableOpacity>
{/* 
          <TouchableOpacity activeOpacity={0.6} style={styles.button4} onPress={() => navigation.navigate('Questionario')}>
            <Text style={styles.buttonText3}>   QUESTIONÁRIO </Text>
          </TouchableOpacity> */}


        </View>
      </ImageBackground> 




       </ScrollView> 


      

    </>
  );
}

const styles = StyleSheet.create({

  
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: 900,
    //voltar depois
    //height: 800,
    resizeMode: 'contain',
  },

  button1: {
    backgroundColor: '#FFCD42',
    marginTop: 345,
    marginBottom: 0,
    margin: 60,
    height: 50,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#73622A",
    borderTopWidth: 5,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
  },


  
  button2: {
    backgroundColor: '#FFCD42',
    marginTop: 20,
    marginBottom: 0,
    margin: 60,
    height: 50,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#73622A",
    borderTopWidth: 5,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
  },
  button4: {
    backgroundColor: '#33AADD',
    marginTop: 20,
    marginBottom: 0,
    margin: 60,
    height: 50,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#10729C",
    borderTopWidth: 5,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
  },


  button3: {
    backgroundColor: '#FFCD42',
    marginTop: 20,
    marginBottom: 0,
    margin: 60,
    height: 50,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#73622A",
    borderTopWidth: 5,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,

  },

  buttonText: {
    fontFamily: 'PressStart2P_400Regular',
    fontSize: 16,
    alignItems:'center',
    justifyContent:'center',
    color: '#000',
    // padding:0,
    paddingTop:6,
    // paddingLeft:2,
    // paddingRight:2,

  },


  buttonText2: {
    fontFamily: 'PressStart2P_400Regular',
    fontSize: 16,
    alignItems:'center',
    justifyContent:'center',
    color: '#000',
    padding:0,
    paddingTop:6,
    paddingLeft:20,
    paddingRight:20,

  },
  buttonText3: {
    fontFamily: 'PressStart2P_400Regular',
    fontSize: 16,
    alignItems:'center',
    justifyContent:'center',
    color: '#000',
    padding:0,
    paddingTop:-4,
    paddingLeft:20,
    paddingRight:20,

  },




  
  //-------------------------------------------------------------------

  // backgroundImage: {
  //   flex: 1,
  //   width: '100%',
  //   resizeMode: 'contain',
  // },


  //-------------------------------------------------------------------






});

export default Main;

