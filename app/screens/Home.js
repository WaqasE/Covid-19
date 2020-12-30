import React, { useContext, useState, useEffect } from 'react';
import {  StyleSheet,View, StatusBar, FlatList } from 'react-native';

import AppHeader from '../comps/AppHeader';
import ThemeContext from '../context/Theme'
import colors from '../config/colors'
import Card from '../comps/Card';
import covidApi from '../api/CovidApi'
import worldApi from '../api/WorldApi'
import Strip from '../comps/Strip';


export default function Home({navigation})  {
    const themeProvider = useContext(ThemeContext)
    const [lastUpdated, setLastUpdated] = useState('2020-08-09')
    const [worldPopulation, setWorldPopulation] = useState(0)
    const [active, setActive] = useState(0)
    const [confirmed, setConfirmed] = useState(0)
    const [recovered, setRecovered] = useState(0)
    const [deaths, setDeaths] = useState(0)
    var list = [
        {
            id:1,
            title:'Active',
            percentage:(active/worldPopulation*100).toFixed(1),
            color:'active',
            colorBg:'activeBg',
            count:active
        },
        
        {
            id:2,
            title:'confirmed',
            percentage:(confirmed/worldPopulation*100).toFixed(1),
            color:'confirm',
            colorBg:'confirmBg',
            count:confirmed
        },
        {
            id:3,
            title:'Recovered',
            percentage:(recovered/worldPopulation*100).toFixed(1),
            color:'total',
            colorBg:'totalBg',
            count:recovered
        },
    
        {
            id:4,
            title:'Deaths',
            percentage:(deaths/worldPopulation*100).toFixed(2),
            color:'danger',
            colorBg:'dangerBg',
            count:deaths
        },
       
    ]

    var strip = [
        {
            id:1,
            title:'World Population',
            icon:'people',
            data:worldPopulation,
            color:'total',
        },
        
        {
            id:2,
            title:'Last Updates',
            icon:'playlist-add-check',
            data:lastUpdated,
            color:'active',
        },
    ]
    const getData = async()=>{
            const response = await covidApi.get('/report/totals',{"date": "2020-08-09"})
            if(response){
                setActive(response.data[0].active)
                setConfirmed(response.data[0].confirmed)
                setRecovered(response.data[0].recovered)
                setDeaths(response.data[0].deaths)
            }
          const response2 = await worldApi.get('/worldpopulation')
            if(response2){
                setWorldPopulation(response2.data.body.world_population)
            }
    }

    useEffect(
        ()=>{
            getData()
        },[]
    )

    return  (
        <View style={[styles.container,{backgroundColor:themeProvider.theme==='light'?colors.light.primary:colors.dark.primary}]}>
            <StatusBar hidden={true}/>
              <AppHeader  themeProvider={themeProvider} navigation={navigation}/>
              <FlatList
                  data={list}
                  contentContainerStyle={{marginBottom:20}}
                  keyExtractor={item=>item.id.toString()}
                  numColumns={2}
                  ItemSeparatorComponent={()=>{return(<View style={{height:10}}/>)}}
                  renderItem={
                      ({item})=>{
                          return(
                              <Card title={item.title} percentage={item.percentage} bg={item.colorBg} color={item.color} count={item.count} theme={themeProvider.theme}/>
                          ); }}
            />
             <FlatList
                  data={strip}
                  keyExtractor={item=>item.id.toString()}
                  ItemSeparatorComponent={()=>{return(<View style={{height:10}}/>)}}
                  renderItem={
                      ({item})=>{
                          return(
                              <Strip  theme={themeProvider.theme} title={item.title} icon={item.icon} data={item.data} color={item.color}/>
                          ); }}
            />
            
             </View>
     );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        paddingHorizontal:20,
        paddingTop:30,
    },
    
    
 });