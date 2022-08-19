import { StatusBar } from 'expo-status-bar';
import {  SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './components/screens/Header';
import QuestionScreen from './components/screens/Quiz';
const Stack = createNativeStackNavigator();
import reducer, {initialState} from './components/redux/reducer';
import {StateProvider} from './components/redux/stateProvider';
import Congrats from './components/screens/Congrats';

export default function App() {
  
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
     
      
      <NavigationContainer>
     <Header/>
    <Stack.Navigator>
   
      <Stack.Screen 
      name="QuestionScreen"
            component={QuestionScreen}
            options={{headerShown: false}}
            initialParams={{index:0}} 

            />
            <Stack.Screen  name="Congrats"
            component={Congrats}
            options={{headerShown: false}}
            initialParams={{index:0}} 

            />
    </Stack.Navigator>
  </NavigationContainer>

     
   </StateProvider>
  );
}

