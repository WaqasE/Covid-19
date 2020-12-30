import React from 'react';
import {  StyleSheet,View, TouchableWithoutFeedback, Text } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function AppSearch({theme})  {
    return  (
        <TouchableWithoutFeedback>
                <View style={[styles.container,{backgroundColor:theme==='light'?'#f7f7f7':'#39393b'}]}>
                     <MaterialCommunityIcons name="magnify" size={24} color="grey" />
                     <Text style={{color:'grey',marginLeft:5, fontSize:18}}>Search</Text>
                </View>
        </TouchableWithoutFeedback>
     );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:45,
        borderRadius:10,
        paddingHorizontal:15,
        flexDirection:'row',
        alignItems:'center'
    }
 });