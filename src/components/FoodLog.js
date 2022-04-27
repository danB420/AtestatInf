import {React,useState} from 'react';
import { ScrollView,View,Text,SafeAreaView,FlatList,StyleSheet,ImageBackground,TextInput } from 'react-native';

import TitleWindow from './TitleWindow';
import NavigationBar from './NavBar';
import CustomBTN from './CustomButton';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';




const calories= 1250;



export default function FoodLogScreen(){

    const [globalID,setID]=useState(0)
    const [foodData,setFoodData]= useState([
       
    ])
    const [foodItem,setFoodItem]=useState()
    
    const handleAddItem=()=>{
        
        if(foodItem===null || foodItem===undefined)
        {
            console.log("empty,no item was added")
        } 
        else{
            setFoodData([...foodData,{name:foodItem,id:globalID}]);
            setID(globalID+1);
            setFoodItem(null);
            console.log("item added");
            console.log(foodItem);
        }
       
        
    }

    return(
        
        
        <SafeAreaView style={{flex:1}}>
            <View style={styles.flatBar}>
                <Text style={styles.flatBarText}>Today's Log</Text>
            </View>
            <FlatList
            keyExtractor={(item)=>item.id}
            data={foodData}
            renderItem={({item})=>(
                <View style={styles.item}>
                    <Text style={styles.itemText}>{item.name}</Text>
                </View>
            )}
            />

    
            <View style={styles.searchBarWrapper}>
                <TextInput
                placeholder={"Add Food"}
                style={styles.searchBarText}
                value={foodItem}
                onChangeText={(foodItem)=>{setFoodItem(foodItem)}}
                onSubmitEditing={()=>{handleAddItem()}}
                />
                <CustomBTN />
            </View>
            <View style={styles.caloriesLeft}>
                <Text style={styles.flatBarText}>Calories left: {calories}</Text>
            </View>
            <NavigationBar/>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    item:{
        margin:'1%',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        width:"95%",
        height:45,
        backgroundColor:'#252525',
        padding:'3%',
        borderRadius:10,
      

    },
    itemText:{
        color: 'white',
        fontFamily:(Platform.OS==='android')? 'Roboto': 'System',
        fontWeight:'normal',
        fontSize:16,
    },
    flatBar:{
            backgroundColor:'#252525',
            flexDirection:'row',
            
            height:'15%',
            padding:'2%',
            marginTop:'8%',
            marginBottom:'2%',
            justifyContent:'flex-end',
            alignItems:'center',
    },
    flatBarText:{
        color: 'white',
        fontFamily:(Platform.OS==='android')? 'Roboto': 'System',
        fontWeight:'bold',
        fontSize:22,
        flex:1,
        
    }
    ,searchBarWrapper:{
        backgroundColor:'#e7e7e7',
        borderWidth:2,
        borderColor:'#ff0000',
        borderRadius:10,
        alignContent:'center',
        alignSelf:'center',
        alignItems:'center',
        width:'90%',
        
        padding:"2%",
        marginTop:'2%',
    },
    searchBarText:{
        fontFamily:(Platform.OS==='android')? 'Roboto': 'System',
        fontSize:16,
        fontWeight:'bold',
        
        
    },
    
    
    caloriesLeft:{
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:'12%',
        marginBottom:'0%',
        marginTop:'5%',
        backgroundColor:'#252525',
        padding:'5%',

        
        
        
        
    },
    naviBar:{
        width:'100%',
        height:'12%',
    }
    
})