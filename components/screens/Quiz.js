import React,{useState} from 'react';
import {View, Text, StyleSheet,ScrollView,Pressable,TouchableOpacity} from 'react-native';
import Option from './Option';
import Questions from '../Quizdata.json';
import CountDown from 'react-native-countdown-component';

export default function quizScreen({route, navigation}) {
  const {index} = route.params;
const NextPage = () =>{
  if(index+1 < Questions.questions.length){
    navigation.navigate('QuestionScreen', {
      index: index + 1,
    })
  }else{
    navigation.navigate('Congrats') 
  }
}
  return (
   <>
      <View style={styles.bar}>
    <View style={styles.score}>
        <Text style={styles.question}>
                Question
        </Text>
        <Text style={styles.questionNumber} >
        {index + 1}/20
            </Text>
    </View>

    <View style={styles.score}>
    <Text style={styles.question}>
      Temps écoulé
    </Text>
    <CountDown
        until={Questions.questions[index].time}
        onFinish={() => {
          alert('finished start again')
          
        }}
        size={20}
      />
 
 
        </View>
</View>
    <ScrollView>
    
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <Text style={styles.questionNo}>
        Question  {index + 1}
        </Text>
      </View>
      <Text style={styles.Question}>{Questions.questions[index].label}</Text>
      {Questions.questions[index].answers.map((option, i) => (
        <Option
          value={option.label}       
          id={Questions.questions[index].id}
          correctOne={option.correct}
          navigation={navigation}
          
          
        />
      ))}
     
      <Pressable style={styles.button} onPress={NextPage} >
      <Text style={styles.text}>Suivant</Text>
    </Pressable>
    
</ScrollView>
   </>
  );
}
const styles = StyleSheet.create({
    questionNo: {
    fontSize: 24,
    fontWeight:'bold',
    marginTop: 100,
    marginLeft:50,

  },
  Question: {
    marginLeft:50,
    marginBottom:10
  },
  nextButton: {
    height: 50,
    width: '20%',
    backgroundColor: '#3700B3',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    margin: 20,
    borderRadius: 15,
  },
  nextText: {
    color: 'white',
    fontWeight: '900',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    margin: 40,
    borderRadius:20,
    padding:20,
    marginBottom:30,
    backgroundColor: '#61c8f6',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  bar:{
    backgroundColor:'#fff',
    shadowColor: "#000",
     shadowOffset: {
         width: 0,
         height: 10,
     },
     shadowOpacity: 0.53,
     shadowRadius: 13.97,
     elevation: 21,
     borderRadius:10,
     marginLeft: 30,
     marginRight: 30,
     flexDirection: 'row',
    justifyContent:'space-around',     
    padding:10,
    margin:10,
      elevation: 3,
    

 },
 score:{
      margin:10,
 },
 question:{
   color:'grey',
   fontWeight:'bold',
   fontSize:15,
  
 },
 questionNumber:{
     backgroundColor:'#B0E0E6',
     borderRadius:3,
     color:'#0000CD',
     padding:10,
     fontWeight:'bold',
     fontSize:20,
     textAlign:'center'
 }

});