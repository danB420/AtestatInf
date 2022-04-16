import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';


var buttonColor;
const CustomBTN = ({onPress,btnTitle,btnColor}) => {
  var btColor =btnColor ;
  return (
    
    <View style={[{backgroundColor:btColor},styles.btnStyle]}>
      <TouchableOpacity 
      onPress={onPress}
      style={{flex:1,justifyContent:'center',borderRadius:10}
      }>
        <Text style={[styles.btnTitleStyle]}>{btnTitle}</Text>
      </TouchableOpacity>
    </View>
    


  );
}


const styles = StyleSheet.create({
  btnStyle: {
    justifyContent:'center',
    alignItems:'center',
    flex: 1,
    margin:'1%',
    borderRadius:10,

  },
  btnTitleStyle: {
    color: 'white',
  }
})

export default CustomBTN;