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





var dimensions = {
  width: Math.round(Dimensions.get('screen').width),
  height: Math.round(Dimensions.get('screen').height),
}

var colors = {
  red: '#FF0000',
  black: '#252525',
  cremewhite: '#E6E6E6',
  white: '#FFFFFF',
}

var defaultButtonColor = '#252525';
var selectedButtonColr = '#ff0000';
export default function FirstTimeSetupScreen() {

  const [firstName, setFirstName] = useState('n/a');
  const [lastName, setLastName] = useState('n/a');
  const [age, setAge] = useState('n/a');
  const [weight, setWeight] = useState('n/a');
  const [height, setHeight] = useState('n/a');
  const [choice,setChoice]=useState('n/a');
  

  const button_list = [
    { label: "Male", value: "1" },
    { label: "Female", value: "2" },
   
    
  ];

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>

      <SafeAreaView style={styles.mainContainer}>
        <StatusBar
          animated={true}
          barStyle={(Platform.OS === 'android' ? 'light-content' : 'dark-content')}
          backgroundColor={colors.black}

        />
        <TitleWindow
          style={{ marginTop: '5%' }}
          titleText={"First time set-up"} />

        <View style={styles.inputFormContainer}>
          <TextInput
            placeholderTextColor={'#e6e6e6'}
            style={styles.inputFormText}
            placeholder="Username"
            onChange={(value) => { setFirstName(value) }}
          />
        </View>


        <View style={styles.inputFormContainer}>
          <TextInput
            style={styles.inputFormText}
            placeholder="Age"
            onChange={(value) => { setAge(value) }}
            keyboardType="numeric"
            placeholderTextColor={'#e6e6e6'}
          />
        </View>

        <View style={styles.inputFormContainer}>
          <TextInput
            style={styles.inputFormText}
            placeholder="Weight"
            onChange={(value) => { setWeight(value) }}
            keyboardType="numeric"
            placeholderTextColor={'#e6e6e6'}
          />
        </View>


        <View style={styles.inputFormContainer}>
          <TextInput
            style={styles.inputFormText}
            placeholder="Height"
            placeholderTextColor={'#e6e6e6'}
            onChange={(value) => { setHeight(value) }}
            keyboardType="numeric"
          />
        </View>

        <FlatList
          style={{flexDirection:'row',marginTop:'5%',marginHorizontal:'5%'}}
          contentContainerStyle={styles.genderSelectWrapper}
          data={button_list}
          keyExtractor={item => item.value}
          extraData={choice}
          renderItem={
            ({ item }) => 
              <SimpleSelectButton
                onPress={() => setChoice(item.value)}
                isChecked={choice === item.value}
                text={item.label}
                textSize={14}
                iconName="checkcircleo"
                iconColor="#fff"
                iconSize={14}
                buttonDefaultColor="#e7e7e7"
                buttonSelectedColor="#252525"
                textDefaultColor="black"
                textSelectedColor="white"
                style={styles.selectButton}
                />
          }
          />



        <View style={styles.nextButton}>
          <CustomBTN

            btnColor='#ff0000'
            onPress={() => { console.log('nextwindow') }}
            btnTitle="Get Started!"
          />
        </View>


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
  genderSelectWrapper:{
    flex:1,
    flexDirection:'row',
   justifyContent:'center',
    marginTop:'2%'

  },
  selectButton:{
      borderRadius:15,
      
      
  }
})
