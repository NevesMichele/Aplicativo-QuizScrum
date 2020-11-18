import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

function Question10({ navigation }) {

  const [btn, setBtn] = useState(styles.Button2);

  const [bp1, setBp1] = useState(styles.Button1);
  const [bp2, setBp2] = useState(styles.Button3);
  const [vidas, setVidas] = useState(navigation.state.params.vidas);
  const [pontos, setPontos] = useState(navigation.state.params.pontos);

  const placar = {
    pontos: pontos,
    vidas: vidas
  };

  function proxima() {

    setTimeout(() => {
      setBtn(styles.Button2)
      navigation.navigate('Question11', placar)
    }, 1000);



  }



  function vencedor() {

    setPontos(pontos + 1)
    placar.pontos = pontos + 1;


    setBtn(styles.Button2v)

    proxima();

  }

  function perde1() {

    setBp1(styles.Button1f)
    setBtn(styles.Button2d)

    if (vidas > 0)
      setVidas(vidas - 1)
    if (vidas == 1)
      navigation.navigate('Loses')

    setTimeout(() => {
      setBp1(styles.Button1)
      setBtn(styles.Button2)


    }, 1000);

  }

  function perde2() {

    setBp2(styles.Button3f)
    setBtn(styles.Button2d)
    if (vidas > 0)
      setVidas(vidas - 1)
    if (vidas == 1)
      navigation.navigate('Loses')

    setTimeout(() => {
      setBp2(styles.Button3)
      setBtn(styles.Button2)


    }, 1000);

  }







  return (
    <>
       <ScrollView> 
        <ImageBackground source={require('../../assets/pagina.png')} style={styles.backgroundImage} > 
          <View style={styles.container}>

            <Text style={styles.titulo}>O_____ é responsável por garantir que o Scrum seja entendido e aplicado.
             </Text>

            <TouchableOpacity activeOpacity={0.6} onPress={perde1}>
              <Text style={bp1}> Product Owner </Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} onPress={vencedor}>
              <Text style={btn}> Scrum Master </Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} onPress={perde2}>
              <Text style={bp2}> Time de Desenvolvimento </Text>
            </TouchableOpacity>

            <Text></Text>
            <Text></Text>
            <View style={styles.container2}>
              <Text style={styles.titulo2}> Pontos:{pontos}</Text>
              <Text style={styles.titulo2}> Vidas:{vidas}</Text>
            </View>


            <TouchableOpacity activeOpacity={0.6} style={styles.Button4} onPress={() => navigation.navigate('Main')}>
              <Text style={styles.buttonText}> VOLTAR </Text>
            </TouchableOpacity>



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
    height: 850,
    //tirar depois 
    //height: 800,
    resizeMode: 'contain',
  },



  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 150,

  },





  titulo: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 15,
    marginLeft: 5,
    marginRight: 2,
    marginBottom: -20,
    height: 'auto',
    width: 'auto',
    paddingStart: 1,
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
    color: '#fff',
    fontFamily: 'PressStart2P_400Regular',
  },






  titulo2: {
    textAlign: 'justify',
    marginTop: 2,
    fontSize: 15,
    marginLeft: 5,
    marginRight: 2,
    marginBottom: 0,
    color: '#fff',
    marginRight: 40,
    marginLeft: 40,
    fontFamily: 'PressStart2P_400Regular',
  },
//aqui não precisou mexer no padding
  Button1: {
    backgroundColor: '#131860',
    marginTop: 40,
    marginBottom: 2,
    margin: 40,
    //antes
    //height: 50,
    height: 60,
    width: 282,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#fff",
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    fontSize: 17,
    color: '#fff',
    textAlign: 'center',
    paddingStart: 1,
    paddingTop: 14,
    paddingLeft: 5,
    paddingRight: 0,



  },

  Button1f: {
    backgroundColor: '#0d1a2b',
    marginTop: 40,
    marginBottom: 2,
    margin: 40,
        //antes
    //height: 50,
    height: 60,
    width: 282,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "red",
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderBottomWidth: 4,
    fontSize: 17,
    color: '#fff',
    textAlign: 'center',
    paddingStart: 1,
    paddingTop: 14,
    paddingLeft: 5,
    paddingRight: 0,



  },
  Button2: {
    backgroundColor: '#131860',
    marginTop: 20,
    marginBottom: 2,
    margin: 40,
        //antes
    //height: 50,
    height: 60,
    width: 282,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#fff",
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    fontSize: 17,
    color: '#fff',
    textAlign: 'center',
    paddingStart: 1,
    paddingTop: 14,
    paddingLeft: 5,
    paddingRight: 0,



  },

  Button2v: {
    backgroundColor: '#0d1a2b',

    marginTop: 20,
    marginBottom: 2,
    margin: 40,
        //antes
    //height: 50,
    height: 60,
    width: 282,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "green",
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderBottomWidth: 4,
    fontSize: 17,
    color: '#fff',
    textAlign: 'center',
    paddingStart: 1,
    paddingTop: 14,
    paddingLeft: 5,
    paddingRight: 0,



  },

  Button2d: {
    backgroundColor: '#00a86b',

    marginTop: 20,
    marginBottom: 2,
    margin: 40,
        //antes
    //height: 50,
    height: 60,
    width: 282,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#00a86b',
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderBottomWidth: 4,
    fontSize: 17,
    color: '#fff',
    textAlign: 'center',
    paddingStart: 1,
    paddingTop: 14,
    paddingLeft: 5,
    paddingRight: 0,



  },

  Button3: {
    backgroundColor: '#131860',
    marginTop: 20,
    marginBottom: 2,
    margin: 40,
        //antes
    //height: 50,
    height: 60,
    width: 282,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#fff",
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    fontSize: 17,
    color: '#fff',
    textAlign: 'center',
    paddingStart: 1,
    paddingTop: 14,
    paddingLeft: 5,
    paddingRight: 0,




  },
  Button3f: {
    backgroundColor: '#0d1a2b',
    marginTop: 20,
    marginBottom: 2,
    margin: 40,
        //antes
    //height: 50,
    height: 60,
    width: 282,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "red",
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderBottomWidth: 4,
    fontSize: 17,
    color: '#fff',
    textAlign: 'center',
    paddingStart: 1,
    paddingTop: 14,
    paddingLeft: 5,
    paddingRight: 0,



  },


  Button4: {
    //backgroundColor: '#131860',
    backgroundColor: '#FFCD42',
    marginBottom: 160,
    height: 35,
    width: 'auto',
    borderRadius: 20,
    justifyContent: 'center',
    //justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: "#73622A",
    borderTopWidth: 4,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,

  },





  buttonText: {

    fontSize: 15,
    color: '#000',
    fontFamily: 'PressStart2P_400Regular',
    paddingStart: 5,
    paddingTop: 7,
    paddingLeft: 5,
    paddingRight: 0,
  },

  container2: {


    flex: 1,
    flexDirection: 'row',

  },






});

export default Question10;