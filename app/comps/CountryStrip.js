import React,{useState} from 'react';
import {  StyleSheet,View, Text, Dimensions, TouchableOpacity,TouchableWithoutFeedback} from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Flag from 'react-native-flags';


const {width, height} = Dimensions.get('screen')

export default function CountryStrip({theme, title,  CountryCode, onPress })  {
    
    const [fav, setFav] = useState(false)

    return  (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.container, {backgroundColor:theme==='light'?'#f7f7f7':'#39393b'}]}>
        <View style={{flexDirection:'row',alignItems:'center',height:'100%'}}>
             <Flag  code={CountryCode} size={32} />
             <Text style={[styles.heading,{color:theme==='light'?colors.light.secondary:colors.dark.secondary}]}>{title}</Text></View>
             <TouchableOpacity onPress={()=>{setFav(!fav)}} style={{width:30,height:30,borderRadius:15,justifyContent:'center',alignItems:'center'}}>
                     <MaterialCommunityIcons name="heart" size={25} color={fav===true?'#F82716':theme==='light'?'grey':colors.dark.secondary} />
            </TouchableOpacity>
        </View>
        </TouchableWithoutFeedback>
     );
}

const styles = StyleSheet.create({
    container:{
        width:width-40,
        height:60,
        borderRadius:10,
        padding:20,
        marginRight:5,
        backgroundColor:'#FFFFFF',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:5
    },
    heading:{
        fontSize:17,
        fontWeight:'bold',
        textTransform:'capitalize',
        marginLeft:10
    },
    digit:{
        fontSize:12,
        marginVertical:5
    },
 });