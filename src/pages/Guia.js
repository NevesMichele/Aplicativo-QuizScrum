import React,{useState} from 'react';
import { PushNotificationIOS } from 'react-native';
import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView,ImageBackground, SafeAreaView } from 'react-native';

function Guia({navigation}){
  


    return (
      <>
        {/* <ImageBackground source={require('../../assets/fundo.png')} style={styles.backgroundImage}> */}
      
      <ScrollView  >
        
<View style={styles.container2}>             
          <Image source={require('../../assets/guiaf/2017-Scrum-Guide-PtBR-v1_page-0001.jpg' )} style={styles.container}  />
          <Image source={require('../../assets/guiaf/2017-Scrum-Guide-PtBR-v1_page-0002.jpg' )} style={styles.container}  /> 
          <Image source={require('../../assets/guiaf/2017-Scrum-Guide-PtBR-v1_page-0003.jpg' )} style={styles.container}  /> 
          <Image source={require('../../assets/guiaf/2017-Scrum-Guide-PtBR-v1_page-0004.jpg' )} style={styles.container}  /> 
          <Image source={require('../../assets/guiaf/2017-Scrum-Guide-PtBR-v1_page-0005.jpg' )} style={styles.container}  /> 
          <Image source={require('../../assets/guiaf/2017-Scrum-Guide-PtBR-v1_page-0006.jpg' )} style={styles.container}  /> 
          <Image source={require('../../assets/guiaf/2017-Scrum-Guide-PtBR-v1_page-0007.jpg' )} style={styles.container}  /> 
          <Image source={require('../../assets/guiaf/2017-Scrum-Guide-PtBR-v1_page-0008.jpg' )} style={styles.container}  /> 
          <Image source={require('../../assets/guiaf/2017-Scrum-Guide-PtBR-v1_page-0009.jpg' )} style={styles.container}  /> 
          <Image source={require('../../assets/guiaf/2017-Scrum-Guide-PtBR-v1_page-0010.jpg' )} style={styles.container}  /> 
          <Image source={require('../../assets/guiaf/2017-Scrum-Guide-PtBR-v1_page-0011.jpg' )} style={styles.container}  /> 
          <Image source={require('../../assets/guiaf/2017-Scrum-Guide-PtBR-v1_page-0012.jpg' )} style={styles.container}  /> 
          <Image source={require('../../assets/guiaf/2017-Scrum-Guide-PtBR-v1_page-0013.jpg' )} style={styles.container}  /> 
          <Image source={require('../../assets/guiaf/2017-Scrum-Guide-PtBR-v1_page-0014.jpg' )} style={styles.container}  /> 
          <Image source={require('../../assets/guiaf/2017-Scrum-Guide-PtBR-v1_page-0015.jpg' )} style={styles.container}  /> 
          <Image source={require('../../assets/guiaf/2017-Scrum-Guide-PtBR-v1_page-0016.jpg' )} style={styles.container}  /> 
          <Image source={require('../../assets/guiaf/2017-Scrum-Guide-PtBR-v1_page-0017.jpg' )} style={styles.container}  /> 
          <Image source={require('../../assets/guiaf/2017-Scrum-Guide-PtBR-v1_page-0018.jpg' )} style={styles.container}  /> 
          <Image source={require('../../assets/guiaf/2017-Scrum-Guide-PtBR-v1_page-0019.jpg' )} style={styles.container}  /> 
          <Image source={require('../../assets/guiaf/2017-Scrum-Guide-PtBR-v1_page-0020.jpg' )} style={styles.container}  /> 
          <Image source={require('../../assets/guiaf/2017-Scrum-Guide-PtBR-v1_page-0021.jpg' )} style={styles.container}  /> 


          </View>
      
     
            
        
       
            
      
        </ScrollView>
        
        {/* </ImageBackground> */}

       
        </>
      );
    }

    const styles = StyleSheet.create({
      backgroundImage: {
        flex: 1,
        // width: undefined,
        height:669,
        // flexDirection: 'column',
        // backgroundColor:'transparent',
        // justifyContent: 'flex-start',
        },
      container: {
        flex: 1,
        width:'100%',
        height:500,
        
        resizeMode:'contain',
        //backgroundColor: '#c6f2fc',
        //alignItems: "center",
        //justifyContent: "flex-start",
        
               
      },
      container2: {
        flex: 1,
        //width:'100%',
        
        //resizeMode:'contain',
        backgroundColor: '#0d1a2b',
        alignItems: "center",
        justifyContent: "flex-start",
        
               
      },
      titulo:{
        textAlign:'center',
        marginTop:100,         
        fontSize:20,
        //fontWeight:'bold', 
        marginLeft:5,
        marginRight:2,
        marginBottom:2,          
        height:'auto',
        width:'auto',
      //  backgroundColor:'blue',
      //  borderColor:"black",
      //  borderTopWidth:2,
       // borderLeftWidth:2,
      //  borderRightWidth:5,
//borderBottomWidth:5,
       // borderRadius:10,
        color:'#fff',
      },
        
        

    
        
        
          titulo2:{
            textAlign:'justify',
            marginTop:2,
            fontSize:24,
            fontWeight:'bold',            
            marginLeft:5,
            marginRight:2,
            marginBottom:0,
            color:'#fff',          
          },
          Button1: {
            backgroundColor:'#5c43eb',
            marginTop:60,
            marginBottom:2,
            margin:40,
            height:50,
           // width:400,
            borderRadius:8,
            justifyContent:'center',
            alignItems:'center',
            borderColor:"#363638",
            borderTopWidth:1,
            borderLeftWidth:1,
            borderRightWidth:1,
            borderBottomWidth:1,
            //fontWeight:'bold',
            fontSize:15,
            color:'#fff',
            textAlign:'center',
            paddingStart:1,
            paddingTop:5,
            paddingLeft:5,
            paddingRight:0,
            
            
            
            },
            Button1v: {
              backgroundColor:'#fff',
              marginTop:60,
              marginBottom:2,
              margin:40,
              height:50,
             // width:400,
              borderRadius:8,
              justifyContent:'center',
              alignItems:'center',
              borderColor:"#363638",
              borderTopWidth:1,
              borderLeftWidth:1,
              borderRightWidth:1,
              borderBottomWidth:1,
              //fontWeight:'bold',
              fontSize:15,
              color:'#fff',
              textAlign:'center',
              paddingStart:1,
              paddingTop:5,
              paddingLeft:5,
              paddingRight:0,
              
              
              
              },
            Button2: {
              backgroundColor:'#5c43eb',
              marginTop:20,
              marginBottom:2,
              margin:40,
              height:50,
             // width:400,
              borderRadius:8,
              justifyContent:'center',
              alignItems:'center',
              borderColor:"#363638",
              borderTopWidth:1,
              borderLeftWidth:1,
              borderRightWidth:1,
              borderBottomWidth:1,
              //fontWeight:'bold',
              fontSize:15,
              color:'#fff',
              textAlign:'center',
              paddingStart:1,
              paddingTop:5,
              paddingLeft:5,
              paddingRight:0,
              
              
              
              },
              Button3: {
                backgroundColor:'#5c43eb',
                marginTop:20,
                marginBottom:4,
                margin:40,
                height:50,
               // width:400,
                borderRadius:8,
                justifyContent:'center',
                alignItems:'center',
                borderColor:"#363638",
                borderTopWidth:1,
                borderLeftWidth:1,
                borderRightWidth:1,
                borderBottomWidth:1,
                //fontWeight:'bold',
                fontSize:15,
                color:'#fff',
                textAlign:'center',
                paddingStart:1,
                paddingTop:5,
                paddingLeft:5,
                paddingRight:0,
                
                
                
                },
                Button4: {
                  backgroundColor:'#5c43eb',
                  marginTop:110,
                  marginBottom:0,
                  margin:20,
                  height:40,
                  borderRadius:8,
                  justifyContent:'center',
                  alignItems:'center',
                  borderColor:"#363638",
                  borderTopWidth:2,
                  borderLeftWidth:1,
                  borderRightWidth:2,
                  borderBottomWidth:1,
                   },
                   buttonText:{
//fontWeight:'bold',
                    fontSize:15,
                    color:'#fff',
                  },
                  button: { 
                       height: 42,
                       backgroundColor: '#5c43eb',
                       justifyContent:'center',
                       alignItems:'center',
                       borderRadius:2,
                       
                  


                  },
        
             
           
  

         

      });

export default Guia;