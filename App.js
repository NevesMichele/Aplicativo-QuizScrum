import React from 'react';
import { AppLoading } from 'expo';
import Anime from './src/pages/Anime';
import { useFonts, PressStart2P_400Regular } from '@expo-google-fonts/press-start-2p';

export default () => {
  let [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
  });
 

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Anime/>
    );
  }
};



