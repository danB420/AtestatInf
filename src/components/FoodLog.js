import { React, useState, useEffect } from 'react';
import { ScrollView, View, Text, SafeAreaView, FlatList, StyleSheet, ImageBackground, TextInput } from 'react-native';
import TitleWindow from './TitleWindow';
import NavigationBar from './NavBar';
import CustomBTN from './CustomButton';
const calories = 1250;

console.disableYellowBox=true;


var dKey =0;



export default function FoodLogScreen() {
    const params = {
        api_key: '0xRY1mZ5dPHFL9W5ZQupcw8rWK2a4uuNyJgbQTLk',
        query: 'banana',
        dataType: ["Survey (FNDDS)"],
        pagesize: 20,
    }
    
    const api_url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${encodeURIComponent(params.api_key)}&query=${encodeURIComponent(params.query)}&dataType=${encodeURIComponent(params.dataType)}&pageSize=${encodeURIComponent(params.pagesize)}`
    

    const [globalID, setID] = useState(0)
    const [foodData, setFoodData] = useState([])
    const [foodItem, setFoodItem] = useState()
    const [apiData, setApiData] = useState()

    /*Fetching data from FDC API*/
    useEffect(() => {
        fetch(api_url).then(response => response.json()).then(data => setApiData(data.foods)).catch(erorr => console.log(erorr));

    }, [])
    /* automatically fetches once parameter changes */
    const parseQueryData = () => {
        for (let i = 0; i < apiData.length; i++) {
            console.log(apiData[i].fdcId);
        }
    }




    const handleAddItem = () => {

        if (foodItem === null || foodItem === undefined) {
            console.log("empty,no item was added")
        }
        else {
            setFoodData([...foodData, { name: foodItem, id: globalID }]);
            setID(globalID + 1);
            setFoodItem(null);
            console.log("item added");
            console.log(foodItem);
        }


    }

    /*Search functionality within local json - offline alternative*/
    /*
    const queryDB=(foodName)=>{
        let i=0;
        let foodId=-1;
        
        while(i<=foodDB.foods.length)
        {
            
            if(foodDB.foods[i].name.localeCompare(foodName)==0)
            {
                console.log(foodDB.foods[i].name);
                console.log(foodDB.foods[i].protein);
                console.log(foodDB.foods[i].carbs);
                console.log(foodDB.foods[i].fat);
                return foodId;
            }
            i=i+1;
                
        
        }
        
    }
    */



    return (


        <SafeAreaView style={{ flex: 1 }}>
            <TitleWindow
                style={{ flex: 0, marginTop: '10%' }}
                titleText="Today's Log"
            />

            <FlatList
                keyExtractor={(item,index) => {index}}
                data={apiData}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.itemText}>{item.description}</Text>
                    </View>
                )}
            />


            <View style={styles.searchBarWrapper}>

                <TextInput
                    placeholder={"Add Food"}
                    style={styles.searchBarText}
                    value={foodItem}
                    onChangeText={(foodItem) => { setFoodItem(foodItem) }}
                    onSubmitEditing={() => { handleAddItem() }}
                />
                <CustomBTN />

            </View>

            <CustomBTN

                btnColor='#ff0000'
                onPress={parseQueryData}
                btnTitle="Get Started!"
            />
            <View style={styles.caloriesLeft}>
                <Text style={styles.flatBarText}>Calories left: {calories}</Text>
            </View>



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    item: {
        margin: '1%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: "95%",
        height: 45,
        backgroundColor: '#252525',
        padding: '3%',
        borderRadius: 10,
    },
    itemText: {
        color: 'white',
        fontFamily: (Platform.OS === 'android') ? 'Roboto' : 'System',
        fontWeight: 'normal',
        fontSize: 16,
    },
    flatBar: {
        backgroundColor: '#252525',
        flexDirection: 'row',
        height: '15%',
        padding: '2%',
        marginTop: '8%',
        marginBottom: '2%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    flatBarText: {
        color: 'white',
        fontFamily: (Platform.OS === 'android') ? 'Roboto' : 'System',
        fontWeight: 'bold',
        fontSize: 22,
        flex: 1,

    }
    , searchBarWrapper: {
        backgroundColor: '#e7e7e7',
        borderWidth: 2,
        borderColor: '#ff0000',
        borderRadius: 10,
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        width: '90%',

        padding: "2%",
        marginTop: '2%',
    },
    searchBarText: {
        fontFamily: (Platform.OS === 'android') ? 'Roboto' : 'System',
        fontSize: 16,
        fontWeight: 'bold',


    },


    caloriesLeft: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '12%',
        marginBottom: '0%',
        marginTop: '5%',
        backgroundColor: '#252525',
        padding: '5%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,





    },
    naviBar: {
        width: '100%',
        height: '12%',
    }

})