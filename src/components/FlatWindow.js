import React from 'react';
import {View,StyleSheet,Text} from 'react-native';

const FlatWindow=(props) =>{
    return (
        <View style={[styles.FlatContainer, props.style]}>
        <Text style={styles.FlatTitleTextFormat}>{props.titleText}</Text>
    </View>
    )
}

const styles = StyleSheet.create ({
    FlatContainer:{
        backgroundColor: '#252525',
        width: '100%',
        height: '15%',
        alignSelf: 'center',
        margin: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    FlatTitleTextFormat:{
        color: 'white',
        fontFamily:(Platform.OS==='android')? 'Roboto': 'System',
        fontWeight:'bold',
        fontSize:22,
    }
})

export default FlatWindow;
    

