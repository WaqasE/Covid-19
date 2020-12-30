import React, { useContext, useState, useEffect } from 'react';
import {  StyleSheet,View, StatusBar, FlatList, Text } from 'react-native';

import AppHeader from '../comps/AppHeader';
import CountryStrip from '../comps/CountryStrip';
import ThemeContext from '../context/Theme'
import colors from '../config/colors'
import AppSearch from '../comps/AppSearch';
import countryApi from '../api/CountryApi'
import worldApi from '../api/WorldApi'




export default function Country({navigation})  {
    const themeProvider = useContext(ThemeContext)
    const [countries, setCountries] = useState([])
   
    const getData = async()=>{
        const res = await   countryApi.get('summary')
        var data=[]
        if(res){
            res.data.Countries.map(
                ({Country, TotalConfirmed, TotalDeaths, TotalRecovered, CountryCode, NewConfirmed})=>{
                    data=[...data,{id:data.length,Country:Country, TotalConfirmed:TotalConfirmed, TotalDeaths:TotalDeaths, TotalRecovered:TotalRecovered, CountryCode:CountryCode, NewConfirmed:NewConfirmed}]
                }
            )
            setCountries(data)
        }
}

useEffect(
    ()=>{
        getData()
    },[]
)

const CountryStats = (item) =>{
    navigation.navigate('CountryStats', {Country:item.Country, TotalConfirmed:item.TotalConfirmed, TotalDeaths:item.TotalDeaths, TotalRecovered:item.TotalRecovered, CountryCode:item.CountryCode, NewConfirmed:NewConfirmed, CountryCode:CountryCode})
}

    return  (
        <View style={[styles.container,{backgroundColor:themeProvider.theme==='light'?colors.light.primary:colors.dark.primary}]}>
            <StatusBar hidden={true}/>
              <AppHeader  themeProvider={themeProvider} navigation={navigation}/>
              <AppSearch theme={themeProvider.theme}/>
              <View style={{marginTop:10}}>
                <FlatList
                    data={countries}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item=>item.id.toString()}
                    renderItem={
                        ({item})=>{
                            return(
                                <CountryStrip onPress={()=>CountryStats(item)} theme={themeProvider.theme} title={item.Country} CountryCode={item.CountryCode} TotalConfirmed={item.TotalConfirmed} TotalDeaths={item.TotalDeaths}/>
                            )
                        }
                    }
                />
                </View>
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