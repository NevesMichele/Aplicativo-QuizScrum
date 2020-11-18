import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView,ImageBackground,BackHandler } from 'react-native';


function Scrum({navigation}){
    
    return (
      <>
     
 <ImageBackground source={require('../../assets/nada.png')} style={styles.backgroundImage}>  
      
      <ScrollView>
      
     
     
      <Text style={styles.baseextT1}>
        Definição do Scrum
        </Text> 
        <Text style={styles.baseextT}> O Scrum é um framework de gestão
         dentro do qual pessoas podem tratar e resolver problemas complexos e adaptativos. O Scrum segue a teoria de transparência, 
         inspeção e adaptação com a finalidade de entregar produtos com o mais alto valor possível. 
         Nele você pode empregar vários processos ou técnicas 
         deixando claro a eficácia relativa das práticas de gerenciamento e desenvolvimento de produtos, 
         de modo que você possa melhorá-las além disso o Scrum consiste nos times
         do Scrum associadas aos seus componetes.
         São considerados componentes do Scrum os  papéis, eventos, artefatos e regras. 
         em que cada um destes dentro do framework serve a um propósito específico e é essencial 
         para o uso e sucesso do Scrum. 
        </Text>



        

         
        <Text style={styles.baseextT1}>
        Time Scrum 
        </Text>
        
        
        
       

        <Text style={styles.baseextT}>  O Time Scrum é composto pelo Product Owner, Time de Desenvolvimento e o Scrum Master. 
         Times Scrum são auto-organizáveis e multifuncionais, possuem todas as competências necessárias para completar o trabalho sem depender de outros que não fazem parte da equipe.
         O modelo de time no Scrum é projetado para aperfeiçoar a flexibilidade, criatividade e produtividade.
         Times Scrum entregam produtos de forma iterativa e incremental, maximizando as oportunidades de realimentação.
         Entregas incrementais de produto “Pronto” garantem que uma versão potencialmente funcional do produto do trabalho esteja sempre disponível.                                                                                                                                                                                                                                                 
        </Text>
        
        
        
        
        
        
        <Text style={styles.baseextT1}>
        Product Owner
        </Text>
        
        
        

        
        <Text style={styles.baseextT}>  É responsável por maximizar o valor do produto e o trabalho do 
        Time de Desenvolvimento também é a única pessoa responsável por gerenciar o Backlog do Produto.
        </Text>
        


        <Text style={styles.baseextT3}>
        Time de Desenvolvimento
        </Text>


        <Text style={styles.baseextT}>  Profissionais que realizam o trabalho de entregar uma versão usável 
        que potencialmente incrementa o produto “Pronto” ao final de cada Sprint. Somente integrantes do Time 
        de Desenvolvimento criam incrementos.        
        </Text>



        <Text style={styles.baseextT1}>
        Scrum Master
        </Text>


        <Text style={styles.baseextT}>  É responsável por garantir que o Scrum seja entendido e aplicado garantindo 
        que o Time Scrum adere à teoria, práticas e regras do Scrum também  é considerado um servo-líder para 
        o Time Scrum ajudando aqueles que estão fora do time a entender quais as interações com o 
        Time Scrum são úteis e quais não são.
        </Text>





       <Text style={styles.baseextT1}>
        Eventos Scrum 
        </Text> 

       
        <Text style={styles.baseextT}>  São usados no Scrum para criar uma rotina e minimizar a
         necessidade de reuniões não definidas no Scrum. Todos os eventos são eventos time-boxed,
         de tal modo que cada evento tem uma duração máxima.Os eventos do Scrum é formado pela Sprint,
          Reunião de Planejamento da Sprint, Reunião diaria, Revisão da Sprint e Retrospectiva da Sprint.
          
        </Text> 
        

      
        <Text style={styles.baseextT1}>
        Sprint 
        </Text> 

       

        <Text style={styles.baseextT}>  É considerada o coração do Scrum,  contém  um time-boxed 
        de um mês ou menos, durante o qual um “Pronto” versão incremental potencialmente utilizável 
        do produto, é criado. Sprints tem durações coerentes em todo o esforço de desenvolvimento.
         Uma nova Sprint inicia-se imediatamente após a conclusão da Sprint anterior.
        </Text>
        



        <Text style={styles.baseextT2}>
        Reunião de Planejamento da Sprint
        </Text> 
        

        <Text style={styles.baseextT}>  O trabalho a ser realizado na Sprint é planejado na reunião de
         planejamento da Sprint. Este plano é criado com a colaboração de todo o Time Scrum, 
         a reunião  possui um time-box com no máximo oito horas para uma Sprint de um mês de duração.
         Para Sprints menores, este evento é usualmente menor. 
         O Scrum Master garante que o evento ocorra e que os participantes entendam seu propósito ensinando 
         o Time Scrum a manter-se dentro dos limites do time-box. 
        </Text> 
       
       
       
       
        <Text style={styles.baseextT1}>
        Reunião Diária
        </Text> 
       
       
       
       
        <Text style={styles.baseextT}>  É um evento time-boxed de 15 minutos, serve para que o
         Time de Desenvolvimento possa sincronizar as atividades e criar um plano para as próximas 24 horas.
          Esta reunião é feita para inspecionar o trabalho desde a última Reunião Diária, 
          e prever o trabalho que deverá ser feito antes da próxima Reunião.
           Está é realizada no mesmo horário e local todo dia para reduzir a complexidade.
        </Text> 
        
        
        
        <Text style={styles.baseextT1}>
        Revisão da Sprint 
        </Text> 
        
        <Text style={styles.baseextT}>  Reunião executada no final da Sprint para inspecionar o
         incremento e adaptar o Backlog do Produto se necessário. Durante a reunião de Revisão da Sprint 
         o Time Scrum e as partes interessadas discutem sobre o que foi feito na Sprint.
          Esta é uma reunião informal, não uma reunião de status,  
          a apresentação do incremento destina-se a motivar e obter comentários
          promovendo a colaboração de todos, tem um time-boxed de 4 horas de duração para uma Sprint de um mês.
        </Text> 




        
        <Text style={styles.baseextT3}>
        Retrospectiva da Sprint
        </Text> 
        
        <Text style={styles.baseextT}>  É uma oportunidade para o Time Scrum inspecionar
         a si próprio e criar um plano para melhorias a serem aplicadas na próxima Sprint.
          A Retrospectiva da Sprint ocorre depois da Revisão da Sprint e 
          antes da reunião de planejamento da próxima Sprint. Esta é uma reunião 
          time-boxed de três horas para uma Sprint de um mês. Para Sprint menores,
          este evento é usualmente menor.
        </Text> 
    




    
        <Text style={styles.baseextT1}>
        Artefatos 
        </Text> 
        
        <Text style={styles.baseextT}>  Os artefatos do Scrum representam o trabalho ou o valor para 
        o fornecimento de transparência e oportunidades para inspeção e adaptação. Estes são
        projetados para maximizar a transparência das informações chave de modo que todos tenham
         o mesmo entendimento dos artefatos.
        </Text> 
    






    
        <Text style={styles.baseextT1}>
        Backlog do Produto
        </Text> 
        
        <Text style={styles.baseextT}>  É uma lista ordenada de tudo que deve ser necessário no produto,
         e é uma origem única dos requisitos para qualquer mudança a ser feita no produto. 
         O Product Owner é responsável pelo Backlog do Produto, incluindo seu conteúdo,
         disponibilidade e ordenação. Um Backlog do Produto nunca está completo, 
         nele  os primeiros desenvolvimentos apenas estabelecem os requisitos 
         inicialmente conhecidos e melhor entendidos este evolui tanto quanto o produto
        e o ambiente no qual ele será utilizado, portanto sua evolução  é dinâmica mudando constantemente, possibilitando identificar o que o produto necessita 
           para ser mais apropriado, competitivo e útil. O Backlog do Produto existirá
            enquanto o produto também existir.
        </Text> 
    






    
        <Text style={styles.baseextT1}>
        Backlog da Sprint
        </Text> 
        
        <Text style={styles.baseextT}>  É um conjunto de itens do Backlog do Produto selecionados para a Sprint, 
        juntamente com o plano para entregar o incremento do produto e atingir o objetivo da Sprint. 
        O Backlog da Sprint é a previsão do Time de Desenvolvimento sobre qual funcionalidade estará
         no próximo incremento e sobre o trabalho necessário para entregar essa
          funcionalidade em um incremento “Pronto”. O Backlog da Sprint torna visível 
          todo o trabalho que o Time de Desenvolvimento identifica como necessário para atingir o objetivo da Sprint.
        </Text> 
    







    
        <Text style={styles.baseextT1}>
        Kanban
        </Text> 
        
        <Text style={styles.baseextT}> Quando relacionado ao gerenciamento de projetos é literalmente 
        o uso de cartões para sinalizar o andamento do projeto. Consiste em um painel
         na parede com diversas colunas e post-its espalhados entre elas, 
         com cores diferentes e cheio de rabiscos.
        </Text> 
    




    
    
    
           
        




       




        <TouchableOpacity activeOpacity={0.6} style={styles.Button4} onPress={() => navigation.navigate('Guia')}>
                <Text style={styles.buttonText1}> SAIBA MAIS </Text>
                </TouchableOpacity>
     <Text>
       
     </Text>
     
     
     </ScrollView>


     

     </ImageBackground>  
                
     

    
      </>
      );
    }

    const styles = StyleSheet.create({
     
     
       backgroundImage: {
        flex: 1,
        width: '100%',
        height:800,
        resizeMode: 'contain',
      },


      baseextT1:{
        marginTop:20,
        fontSize:15,
        marginBottom:0,
        margin:20,
        height:40,
        color:'#fff',
        borderColor:"#fff",
        borderTopWidth:1,
        borderLeftWidth:1,
        borderRightWidth:1,
        borderBottomWidth:1,
        backgroundColor:'#131860',   
        borderRadius:10, 
        justifyContent:'center',
        alignItems:'center',
        fontFamily:'PressStart2P_400Regular',
        textAlign:'center',
        padding:12,
},



  
  baseextT:{
    marginTop:10,
    fontSize:17,
    marginLeft:15,
    marginRight:15,
    marginBottom:6,
    borderRadius:10,
    height:'auto',
    width:'auto',
    color:'#000',
    borderColor:"#73622A",
    borderTopWidth:2,
    borderLeftWidth:2,
    borderRightWidth:2,
    borderBottomWidth:2,
    backgroundColor:'#eed269',
    textAlign:'justify',
    paddingTop:4,
    paddingRight:8,
    paddingLeft:8,
},

 

baseextT2:{
    marginTop:20,
    fontSize:12,
    marginBottom:0,
    margin:20,
    height:40,
    color:'#fff',
    borderColor:"#fff",
    borderTopWidth:1,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderBottomWidth:1,
    backgroundColor:'#131860',    
    borderRadius:10, 
    justifyContent:'center',
    alignItems:'center',
    fontFamily:'PressStart2P_400Regular',
    textAlign:'center',
    padding:7,
},




baseextT3:{
  marginTop:20,
  fontSize:12,
  marginBottom:0,
  margin:20,
  height:40,
  color:'#fff',
  borderColor:"#fff",
  borderTopWidth:1,
  borderLeftWidth:1,
  borderRightWidth:1,
  borderBottomWidth:1,
  backgroundColor:'#131860',
  borderRadius:10, 
  justifyContent:'center',
  alignItems:'center',
  fontFamily:'PressStart2P_400Regular',
  textAlign:'center',
  padding:12,
},



   button3: {
    backgroundColor: '#242880',
    marginTop: 20,
    marginBottom: 20,
    margin: 40,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#fff",
    borderTopWidth: 3,
    borderLeftWidth: 1,
    borderRightWidth: 3,
    borderBottomWidth: 1,
},




  
  Button4: {
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



  buttonText1: {
    fontFamily: 'PressStart2P_400Regular',
    fontSize: 16,
    alignItems:'center',
    justifyContent:'center',
    color: '#000',
    padding:0,
    paddingTop:6,
    paddingLeft:2,
    paddingRight:2,
},
        
                
        
      });

export default Scrum;