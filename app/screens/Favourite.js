import React, { useContext, useState, useEffect } from 'react';
import {  StyleSheet,View, StatusBar, FlatList } from 'react-native';

import AppHeader from '../comps/AppHeader';
import ThemeContext from '../context/Theme'
import colors from '../config/colors'



export default function Favourite({navigation})  {
    const themeProvider = useContext(ThemeContext)
  
    return  (
        <View style={[styles.container,{backgroundColor:themeProvider.theme==='light'?colors.light.primary:colors.dark.primary}]}>
            <StatusBar hidden={true}/>
              <AppHeader  themeProvider={themeProvider} navigation={navigation}/>

            
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