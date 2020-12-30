import React from 'react';
import {  StyleSheet,View, Text, Dimensions } from 'react-native';
import colors from '../config/colors';
import { MaterialIcons } from '@expo/vector-icons';

const {width, height} = Dimensions.get('screen')

export default function Strip({theme, title, icon, data, color})  {
    return  (
        <View style={[styles.container, {backgroundColor:theme==='light'?'#f7f7f7':'#39393b'}]}>
        <View style={{flexDirection:'row',alignItems:'center',height:'100%'}}>
              <MaterialIcons name={icon} size={30} color={colors.other[color]}  style={{marginRight:5}}/>
             <Text style={[styles.heading,{color:colors.other[color]}]}>{title}</Text></View>
             <Text style={[styles.digit,{color:theme==='light'?colors.light.secondary:colors.dark.secondary}]}>{data}</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    container:{
        width:width-40,
        height:70,
        borderRadius:10,
        padding:20,
        marginRight:5,
        backgroundColor:'#FFFFFF',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    heading:{
        fontSize:17,
        fontWeight:'bold',
        textTransform:'capitalize',
    },
    digit:{
        fontSize:18,
        letterSpacing:1
    },
 });