import React from 'react';
import {  StyleSheet,View, Text, Dimensions } from 'react-native';
import colors from '../config/colors';
import Flag from 'react-native-flags';

const {width, height} = Dimensions.get('screen')

export default function Card({title, percentage, bg, color, theme, count, flag})  {
    return  (
        <View style={[styles.container, {backgroundColor:theme==='light'?'#f7f7f7':'#39393b'}]}>
                <Text style={[styles.heading,{color:theme==='light'?colors.light.secondary:colors.dark.secondary}]}>{title}</Text>
                <View style={[styles.pCircle, {backgroundColor:colors.other[bg]}]}>
                        <View style={styles.percentWrapper}>
                           {flag? <Flag  code={flag} size={32} />:
                            <Text style={[styles.percent,{color:colors.other[color]}]}>{percentage}%</Text>}
                        </View>
                </View>
                <Text style={[styles.digit,{color:theme==='light'?colors.light.secondary:colors.dark.secondary}]}>{count}</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    container:{
        width:width/2.3,
        height:210,
        borderRadius:20,
        padding:20,
        marginRight:5,
        backgroundColor:'#FFFFFF',
    },
    heading:{
        alignSelf:'flex-start',
        fontSize:18,
        fontWeight:'bold',
        marginBottom:10,
        textTransform:'capitalize',
    },
     pCircle:{
        width:width/3.5,
        height:width/3.5,
        borderRadius:width/7,
        alignSelf:'center',
        backgroundColor:'rgba(0, 85, 255,0.2)',
        justifyContent:'center',
        alignItems:'center'
    },
    digit:{
        alignSelf:'flex-end',
        fontSize:18,
        marginTop:10,
        letterSpacing:1
    },
    percentWrapper:{
        width:width/6,
        height:width/6,
        borderRadius:width/12,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    },
    percent:{
        fontSize:20,
        fontWeight:'bold',
        color:'rgba(0, 85, 255,1)',
        width:'100%',
        textAlign:'center',
        letterSpacing:2
    }
 });