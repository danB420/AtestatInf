import {React,useState,useEffect} from 'react';

const params ={
    api_key:'DEMO_KEY',
    query: 'cheddar cheese',
    dataType:["Survey (FNDDS)"],
    pagesize:5,
}

const api_url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${encodeURIComponent(params.api_key)}&query=${encodeURIComponent(params.query)}&dataType=${encodeURIComponent(params.dataType)}&pageSize=${encodeURIComponent(params.pagesize)}`


    
function queryForData(){
    const [apiData,setApiData]=useState([])
    
    return  fetch(api_url).then(response =>response.json()).then(data=>setApiData(data)).catch(erorr =>console.log(erorr));
}

function displayData(){
    console.log(apiData);
}