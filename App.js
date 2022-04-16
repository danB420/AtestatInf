import React from 'react';
import {
  View,Text
} from "react-native";
import FirstTimeSetupScreen  from './src/components/FirstTimeSetup'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function App(){
  return (
    <NavigationContainer>
    <Tab.Navigator>
        <Tab.Screen name="Test1" component={FirstTimeSetupScreen}/>
        <Tab.Screen name="Test2" component={FirstTimeSetupScreen}/>
    </Tab.Navigator>
    </NavigationContainer>
    
       
    
  )
}