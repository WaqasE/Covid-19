import React, { useContext, useState, useEffect } from 'react';
import {  StyleSheet,View, StatusBar, Text, FlatList } from 'react-native';

import AppHeader from '../comps/AppHeader';
import ThemeContext from '../context/Theme'
import colors from '../config/colors'
import Card from '../comps/Card';


export default function CountryStats({navigation, route})  {
    const themeProvider = useContext(ThemeContext)
    const {Country, TotalConfirmed, TotalDeaths, TotalRecovered, NewConfirmed, CountryCode}= route.params;

    var list = [
        {
            id:1,
            title:'Confirmed',
            color:'active',
            colorBg:'activeBg',
            count:TotalConfirmed,
            CountryCode:CountryCode
        },
        
        {
            id:2,
            title:'New Confirmed',
            color:'confirm',
            colorBg:'confirmBg',
            count:NewConfirmed,
            CountryCode:CountryCode
        },
        {
            id:3,
            title:'Recovered',
            color:'total',
            colorBg:'totalBg',
            count:TotalRecovered,
            CountryCode:CountryCode
        },
    
        {
            id:4,
            title:'Deaths',
            color:'danger',
            colorBg:'dangerBg',
            count:TotalDeaths,
            CountryCode:CountryCode
        },
       
    ]
    
   
   

    return  (
        <View style={[styles.container,{backgroundColor:themeProvider.theme==='light'?colors.light.primary:colors.dark.primary}]}>
            <StatusBar hidden={true}/>
              <AppHeader  themeProvider={themeProvider} back={true} navigation={navigation}/>
              <Text style={[styles.heading,{color:themeProvider.theme==='light'?colors.light.secondary:colors.dark.secondary}]}>{Country}</Text>
              <FlatList
                  data={list}
                  contentContainerStyle={{marginBottom:20}}
                  keyExtractor={item=>item.id.toString()}
                  numColumns={2}
                  ItemSeparatorComponent={()=>{return(<View style={{height:10}}/>)}}
                  renderItem={
                      ({item})=>{
                          return(
                              <Card title={item.title} percentage={item.percentage} bg={item.colorBg} color={item.color} count={item.count} theme={themeProvider.theme} flag={item.CountryCode}/>
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