import React from 'react';
import { WebView } from 'react-native-webview';



function Questionario(){
  return <WebView source={{ uri: 'https://docs.google.com/forms/d/e/1FAIpQLScqk1EpinHXEjKXrC53KHuGxxGm2_duBQHaNOo2FO3jnRyXTg/viewform?usp=sf_link' }} style={{ flex:1 }} />;     
  }


export default Questionario;



