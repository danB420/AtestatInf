import React from 'react';
import {
  View,Text
} from "react-native";

import FirstTimeSetupScreen  from './src/components/FirstTimeSetup'
import FoodLogScreen from './src/components/FoodLog'
import FirstTimeSetupScreen2 from './src/components/FirstTimeSetup2';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function App(){
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen options={{headerShown:false}} name="FTS" component={FirstTimeSetupScreen}/>
      <Tab.Screen options={{headerShown:false}} name="FTS2" component={FirstTimeSetupScreen2}/>
      <Tab.Screen options={{headerShown:false}} name="Home" component={FoodLogScreen}/>
      
    </Tab.Navigator>
    </NavigationContainer>
    
   
  )
}