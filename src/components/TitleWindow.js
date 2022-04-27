import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Platform
} from 'react-native';




const TitleWindow = (props) => {
    return (
        <View style={[styles.TitleContainer, props.style]}>
            <Text style={styles.TitleTextFormat}>{props.titleText}</Text>
        </View>
    );
}




const styles = StyleSheet.create({
    TitleContainer: {
        backgroundColor: '#252525',
        width: '95%',
        height: '15%',
        borderRadius: 10,
        alignSelf: 'center',
        margin: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
    },
   
    

    TitleTextFormat: {
        color: 'white',
        fontFamily:(Platform.OS==='android')? 'Roboto': 'System',
        fontWeight:'bold',
        fontSize:26,
    }
})

export default TitleWindow