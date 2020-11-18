import React,{useState} from 'react';
import Routes from '../routes'
import Menu from './Main'
import { StyleSheet, Text, View,Image,StatusBar,ImageBackground} from 'react-native';


function Anime({navigation}){
  const [mudar,setMudar]=useState(false);

  setTimeout(() => {
    setMudar(true);
  }, 3000);
   if(mudar==false){
     return (
      <>
         <View style={styles.container}>
         <ImageBackground source={require('../../assets/anime.png')} style={styles.backgroundImage} >
          <Image source={require('../../assets/controle.gif')} style={styles.logo} />
         </ImageBackground> 
         </View>
      </>

      );
    }
      else{
        return(
          <>    
<StatusBar barStyle="light-content"  backgroundColor='#0d1a2b'translucent />

        
          <Routes />
       
         </>   
        );

      }
    }

    const styles = StyleSheet.create({
     
        container1: { 
          flex:1,        
          backgroundColor: '#c6f2fc',
          alignItems: "center",
          justifyContent: "flex-end",                  
        },

        container: {
          flex: 1,
          backgroundColor: '#0d1a2b',
          alignItems: "center",
          justifyContent: "center",         
        },
          titulo:{
            textAlign:'center',
            marginTop:2,         
            fontSize:20,
            fontWeight:'bold', 
            marginLeft:5,
            marginRight:2,
            marginBottom:10,          
            height:'auto',
            width:'auto',
            backgroundColor:'#3b5998',    
            borderRadius:10,
            borderColor:"black",
          borderTopWidth:2,
          borderLeftWidth:2,
          borderRightWidth:5,
          borderBottomWidth:5,
            color:'#fff',
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
          fontSize:18,
          marginTop:2,
          fontWeight:'bold', 
        },
        texto1:{
          fontSize:14,
        
        },

         container3: {
          flexDirection:'row',
          backgroundColor: '#4fb8ce',
          alignItems: "center",
          justifyContent: "center", 
          height:45,          
        },

         logo: {
          width: 392,
          height: 298,
          resizeMode:'contain',
          alignItems: "center",
          justifyContent: "center",
          marginTop: 180, 
          flex: 1,
    


      
         },
        
         titulo3:{
          fontWeight:'bold', 
            textAlign:'center',
            marginTop:2,
            fontSize:32,
            marginLeft:5,
            marginRight:2,
            marginBottom:0,
            color:'#fff',          
          },



           backgroundImage: {
            flex: 1,
            width: '100%',
            resizeMode:'contain',
           
            },
     });

      

export default Anime;