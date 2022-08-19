import React,{useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Checkbox from 'expo-checkbox';
import Questions from '../Quizdata.json';
import {useStateValue} from '../redux/stateProvider';

const Option = props => {
  const [{score}, dispatch] = useStateValue();
  const [isSelected, setSelection] = useState(false);
  const updateScore = Score => {
    dispatch({
      type: 'UPDATE_SCORE',
      score: Score,
    });
  };

  return (
   
      <View style={[styles.Option]} >

    <Checkbox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
          color={isSelected ? '#17B169' : undefined}
          onTouchEnd={
            ()=>{
              isSelected&& props.correctOne? updateScore(1):updateScore(0)
            }
          }
        />
    
     
      
      
        <Text style={styles.OptionText}>{props.value}</Text>
      </View>
   
  );
};

export default Option;

const styles = StyleSheet.create({
  Option: {
    flexDirection:'row', 
    flexWrap:'wrap',
    margin:10,
    marginLeft:50,
   
  },
  checkbox:{
       padding:15,
       backgroundColor:'#ccc',
       borderColor:'#ccc',
       borderRadius:4
  },
  OptionText:{
     color: 'gray',
     margin: 10
}

  
});