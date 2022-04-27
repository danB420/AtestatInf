import React from 'react';
import {
  View,Text
} from "react-native";

import FirstTimeSetupScreen  from './src/components/FirstTimeSetup'
import FoodLogScreen from './src/components/FoodLog'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function App(){
  return (
   <FoodLogScreen/>
  )
}