import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
  SafeAreaView,
  Platform,
  FlatList
} from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import SimpleSelectButton from 'react-native-simple-select-button'
import TitleWindow from "./TitleWindow";
import CustomBTN from './CustomButton';
import Slider from '@react-native-community/slider';

import { Children } from 'react/cjs/react.production.min';



/*
Screen Structure:

->Title Container (First time set up)
->Column
  ->Row
        ->Group1 ->profile pic

        ->Group2 ->name
                 ->age
->Column
        ->Group3 ->weight
                 ->height

->Title Container(What is your goal)
->Form container ->goal
->Button(Next Screen)

*/

const activity_values = [
    { label: "Sedentary", value: "1.2" },
    { label: "Lightly Active", value: "1.375" },
    { label: "Moderate", value: "1.55" },
    { label: "Active", value: "1.725" },
    { label: "Very Active", value: "1.9" },
   
    
  ];
  const goals = [
    { label: "Lose Weight", value: "1" },
    { label: "Maintain your body", value: "2" },
    {label:"Gain Weight",value:"3"},
   
    
  ];

var colors = {
  red: '#FF0000',
  black: '#252525',
  cremewhite: '#E6E6E6',
  white: '#FFFFFF',
}

var defaultButtonColor = '#252525';
var selectedButtonColr = '#ff0000';
export default function FirstTimeSetupScreen2(props) {

    const [activity,setActivity]=useState()
    const [goal,setGoal]=useState()
    const [activityDisplay,setActivityDisplay]=useState("Moderate")
    const [range,setRange]=useState()

    const [age, setAge] = useState(18);
    const [weight, setWeight] = useState(75);
    const [height, setHeight] = useState(180);
    const [choice,setChoice]=useState('n/a');

    const [bmr,setBMR]=useState((10 * weight) + (6.25 * height) - (5 * age) + 5);
    const [tdee,setTDEE]=useState(Math.round(activity*bmr));
  
    const updateActivityDisplay=(value)=>{
        if(value<1.375)
        return "Sedentary";
        else if(value>=1.375 && value<1.55)
        return "Lightly Active";
        else if(value>=1.55 && value<1.725)
        return "Moderate";
        else if(value>=1.725 && value<1.80)
        return "Highly Active";
        else return "Extremely Active";
    }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
        <SafeAreaView style={styles.mainContainer}>
            <TitleWindow  titleText="What is your goal"/>
            <FlatList
          style={{flexDirection:'column',marginTop:'5%',marginHorizontal:'5%'}}
          contentContainerStyle={styles.goalWrapper}
          data={goals}
          keyExtractor={item => item.value}
          extraData={goal}
          renderItem={
            ({ item }) => 
              <SimpleSelectButton
                onPress={() => setGoal(item.value)}
                isChecked={goal === item.value}
                text={item.label}
                textSize={14}
                iconName="checkcircleo"
                iconColor="#fff"
                iconSize={14}
                buttonDefaultColor="#e7e7e7"
                buttonSelectedColor="#252525"
                textDefaultColor="black"
                textSelectedColor="white"
                style={{marginVertical:'3%'}}
                />
          }
          />
            <TitleWindow titleText="How active are you?"/>
            <Text
            style={{alignSelf:'center',fontSize:16}}
            >{activityDisplay}</Text>
            <Slider
            style={styles.activitySlider}
            minimumValue={1.2}
            maximumValue={1.9}
            minimumTrackTintColor="#ff0000"
            maximumTrackTintColor="#ff0000"
            thumbTintColor='#252525'
            value={1.55}
            onValueChange={(value)=>{setActivityDisplay(updateActivityDisplay(value)),setActivity(value)}}
            />
            
         
        </SafeAreaView>
        

    </TouchableWithoutFeedback>
  );
}



const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  inputFormContainer: {
    backgroundColor: '#252525',
    width: '95%',
    height: '15%',
    borderRadius: 10,
    alignSelf: 'center',
    margin: '2%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,

  },
  inputFormText: {
    width:'100%',
    color: 'white',
    textAlign:'center',
    height:'100%',
    justifyContent:'center',
  },
  nextButton: {
    flex: 2,
    width: '100%',
    marginBottom: '5%',
    justifyContent: 'center',
    alignSelf: 'center',
   
  },
  activitySlider:{
      margin:'5%',
      marginBottom:'15%',
      
  }
 
  
})
