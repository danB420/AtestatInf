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
  Platform
} from 'react-native';

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
  const [goal, setGoal] = useState('n/a');


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



        <TitleWindow

          titleText={"What is your goal?"} />
        <View style={[{ flexDirection: 'row', flex: 2, marginBottom: '5%', marginLeft: '2%', marginRight: '2%' }]}>
          <CustomBTN
            btnColor={defaultButtonColor}
            onPress={() => { setGoal('lose-weight') }}
            btnTitle="Lose Weight"
          />
          <CustomBTN
            btnColor={defaultButtonColor}
            onPress={() => { setGoal('stay-fit'); console.log("goal set"); }}
            btnTitle="Stay Fit"
          />
          <CustomBTN
            btnColor={defaultButtonColor}
            onPress={() => { setGoal('get-big') }}
            btnTitle="Get Big"
          />
        </View>

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
    flex: 1,
    color: 'white',
  },
  nextButton: {
    flex: 2,
    width: '100%',
    marginBottom: '5%',
    justifyContent: 'center',
    alignSelf: 'center',
  }
})
