import React, { useState } from 'react'
import {View, Text, StyleSheet,ScrollView,Pressable,TouchableOpacity} from 'react-native';
import {useStateValue} from '../redux/stateProvider';

function Congrats({route, navigation}) {
    const {index} = route.params;
    const [{score},dispatch] = useStateValue();
    const updateScore = Score => {
      dispatch({
        type: 'DELETE_SCORE',
        score: Score,
      });
    };
  return (
    <View style={CongratsCard.container}>
    <Text style={CongratsCard.title}>Félicitation!</Text>
    <Text>Voici votre score:</Text>
    <Text style={CongratsCard.note}>{score}/20</Text>
    <Pressable style={CongratsCard.button} onPress={()=>{
         updateScore(0);
        navigation.navigate('QuestionScreen', {
     index: index,
     
    })
    }}>
      <Text style={CongratsCard.text} onPress={()=>{
       updateScore()
    
      }}>Refaire le test</Text>
    </Pressable>
    </View>
  )
  
}
const CongratsCard = StyleSheet.create({
    container: {
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        top:60,
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
       margin: 20,
       padding: 30
        
        
    },
    title:{
        fontSize:18,
        fontWeight:'bold'
},
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
      
        borderRadius:20,
        padding:20,
       
        backgroundColor: '#61c8f6',
      },
    note:{
        backgroundColor:'#B0E0E6',
        borderRadius:3,
        color:'#0000CD',
        padding:10,
        fontWeight:'bold',
        fontSize:20,
        margin: 10
    },
    text:{
        color:'#fff',
    }
   
  });
export default Congrats