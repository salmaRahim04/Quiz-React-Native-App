import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native';
import Questions from '../Quizdata.json';

function Header({route, navigation}) {

  return (
 <>
        <View style={stylingHeader.container}>
    <Image
         style={stylingHeader.usernameImage}
         source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvdhpJ2oJ0BBsqlzQ6oTSow_O_uUjkn05BSkpEcSsSgpdR-01Mv48NsbvAvU_g0M0eWk0&usqp=CAU',
        }}
      />
      <Text style={stylingHeader.title}>
         Hi,User name 
      </Text>
      <Text>
       
          Lorem ipsum dolor sit amet
      </Text>
    </View>
   
 </>
  )
}
const stylingHeader = StyleSheet.create({
    container: {
        backgroundColor:'#61c8f6',
        paddingTop:100,
        padding:50,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        position: 'relative',
     
        
    },
    usernameImage:{
        width:30,
        height:30,
        padding:30,
        borderRadius:15,
        position: 'absolute',
        right: 30,
        top:50,
        
    },
    title:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:25
         
    },
   
  });
  
export default Header