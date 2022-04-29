import React from 'react';
import {View,Text,StyleSheet,ImageBackground} from 'react-native';

import CustomBTN from './CustomButton';


const NavigationBar= (props)=>{
    return(
            <View style={styles.navBar}>
              <CustomBTN
              onPress={null}
              btnTitle={"foodLog"}/>

              <CustomBTN
              onPress={null}
              btnTitle={"home"}/>

              <CustomBTN
              onPress={null}
              btnTitle={"overview"}/>
             
              
            </View>
    )
}


const styles = StyleSheet.create({
    navBar:{
       flexDirection:'row',
       justifyContent:'center',
       alignSelf:'center',
       alignItems:'center',
       width:'100%',
       height:'12%',
       padding:'3%',
       backgroundColor:'#ff0000'
    }
})
export default NavigationBar;