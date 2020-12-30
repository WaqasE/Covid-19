import React from 'react';
import {  StyleSheet,View, Text, Dimensions } from 'react-native';

import AppButton from './AppButton'
import colors from '../config/colors'
import ThemeStorage from '../context/Storage'
const {width, height} = Dimensions.get('screen')

export default function AppHeader({themeProvider, navigation, back})  {
    return  (
        <View style={styles.header}>
            <View style={{flexDirection:'row',width:width/4,justifyContent:'space-between',alignItems:'center'}}>  
               <AppButton 
                        bg={themeProvider.theme==='light'?colors.light.primary:colors.dark.primary}
                        color={themeProvider.theme==='light'?colors.light.secondary:colors.dark.secondary}
                        theme={themeProvider.theme} 
                        icon={back?'arrow-left':'align-right'}
                        onPress={()=>{back?navigation.goBack():navigation.openDrawer()}}
                        />
                <Text style={[styles.heading,{color:themeProvider.theme==='light'?colors.light.secondary:colors.dark.secondary}]}>Covid-19</Text>
            </View>
                <AppButton 
                        theme={themeProvider.theme} 
                        onPress={()=>{
                            {themeProvider.theme==='light'?themeProvider.setTheme('dark'):themeProvider.setTheme('light')}
                            {themeProvider.theme==='light'?ThemeStorage.setToken('dark'):ThemeStorage.setToken('light')}
                        }}
                        icon={themeProvider.theme==='light'?'cloud-moon':'cloud-sun'}/>
        </View>
     );
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:70,
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row'
    },
    heading:{
        fontSize:25,
        fontWeight:'bold',
        textTransform:'capitalize',
        color:'black'
    },
 });