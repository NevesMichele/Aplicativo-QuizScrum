import React,{useState} from 'react';
import { PushNotificationIOS } from 'react-native';
import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView,ImageBackground, SafeAreaView } from 'react-native';

function Sobre({navigation}){
  


    return (
      <>
    <View style={styles.container2}>
         <Text style={styles.titulo}> -------------------------------- </Text>
          <Text style={styles.texto}> TRABALHO DE CONCLUSÃO DE CURSO </Text>      
          <Text style={styles.titulo2}>--------------------------------</Text>   

          <Text style={styles.texto2}> MICHELE NEVES DOS SANTOS </Text>
          <Text style={styles.texto3}> ACADÊMICA DE SISTEMAS DE INFORMAÇÃO</Text>
          <Text style={styles.texto2}> (UniSales Oficial) </Text>
          

         
          
        </View>
       

        <View style={styles.container}>
          <Text style={styles.titulo}>---------------------- </Text>
          <Text style={styles.texto}> PROFESSOR COORDENADOR: </Text>
          <Text style={styles.titulo2}>---------------------- </Text>
          <Text style={styles.texto2}>RÔMULO FERREIRA DOURO</Text>
          <Text style={styles.texto3}> PROFESSOR DE SISTEMAS DE INFORMAÇÃO </Text>
          <Text style={styles.texto2}> (UniSales Oficial) </Text>
        
          
        </View>
      

        <View style={styles.container1}>
            
          <Text style={styles.texto4}> DESENVOLVIDO:</Text>
          <Text style={styles.texto4}>MICHELE NEVES DOS SANTOS</Text>
          <Text style={styles.texto4}>Versão 1.0  - 2020 </Text>                   
        </View>


        <View style={styles.container1}>
          
                            
        </View>
        
        

        <View style={styles.container3}>        
        
        
         <TouchableOpacity onPress={() => navigation.navigate('Politica')}>
            <Text style={styles.botao2}> Politica </Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => navigation.navigate('Questionario')}>
            <Text style={styles.botao2}> Feedback </Text>
         </TouchableOpacity>
      </View>

      </>

      );
    }

    const styles = StyleSheet.create({
        
        container1: { 
          flex:1,      
            
          backgroundColor: '#0d1a2b',
          alignItems: "center",
          justifyContent: "flex-end",                  
        },

        container: {
          flex: 1,
          backgroundColor: '#0d1a2b',
          alignItems: "center",
          justifyContent: "flex-start", 
          marginTop:-150,        
        },
        container2: {
          flex: 2,
          backgroundColor: '#0d1a2b',
          alignItems: "center",
          justifyContent: "flex-start",         
        },
          titulo:{
            textAlign:'center',
           marginTop:0,         
            fontSize:25,
            fontWeight:'bold', 
            
            color:'#10729C',
          },
          titulo2:{
            textAlign:'center',
           marginTop:0,         
            fontSize:25,
            fontWeight:'bold', 

            color:'#10729C',
          },

          titulo1:{
            textAlign:'justify',
            marginTop:0,
            fontSize:18,
            marginLeft:5,
            marginRight:2,
            marginBottom:0          
          },
        
        
        texto:{
          fontSize:11,
          marginTop:4,
          height: 'auto',
          width: 'auto',
          fontFamily: 'PressStart2P_400Regular',
          textAlign: 'center',
          color:'#FFCD28',
        },
        texto1:{
          fontSize:14,
        },


        texto2:{
          fontSize:11,
          marginTop:4,
          height: 'auto',
          width: 'auto',
          fontFamily: 'PressStart2P_400Regular',
          textAlign: 'center',
          color:'#fff',
        },

        
        texto3:{
          fontSize:10,
          marginTop:4,
          height: 'auto',
          width: 'auto', 
          fontFamily: 'PressStart2P_400Regular',
          textAlign: 'center',
          color:'#fff',
        },
        
        texto4:{
          fontSize:11,
          marginTop:6,
          height: 'auto',
          width: 'auto',
          fontFamily: 'PressStart2P_400Regular',
          textAlign: 'center',
          color:'#fff',
        },

         container3: {
          flexDirection:'row',
          backgroundColor: '#0d1a2b',
        //  alignItems: "center",
          justifyContent: "center", 
          height:45,          
        },

        logo: {
          width: 24,
          height: 24,
          paddingLeft:10,
        },

        logo1: {
          width: 160,
          height: 130,
          marginTop:-2,
    
        },
        logo3: {
          width: 100,
          height: 90,
          marginTop:-2,
        },
        
         titulo3:{
            textAlign:'justify',
            marginTop:2,
            fontSize:18,
            marginLeft:5,
            marginRight:2,
            marginBottom:0,
            color:'#fff',          
          },
          botao2:{  
            fontSize:15,
            fontFamily: 'PressStart2P_400Regular',
            paddingStart:5,
            paddingTop:6,
            paddingLeft:0,
            paddingRight:0, 
            alignItems: "center",
            justifyContent: "center",   
            height:35,
            width:'auto',
            backgroundColor:'#FFCD42',  
            borderColor: "#73622A",  
            borderRadius:20,
            borderTopWidth:2,
              borderLeftWidth:2,
              borderRightWidth:2,
              borderBottomWidth:5,
            color:'#000',
            marginTop:0,
            marginRight:8,
            marginLeft:8,
            marginBottom:5, 
          },
      });

export default Sobre;