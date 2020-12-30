import React from 'react';
import {  StyleSheet,TouchableOpacity, } from 'react-native';

import {  FontAwesome5 } from '@expo/vector-icons'
import colors from '../config/colors'

export default function AppButton({icon='cloud-moon', theme, onPress, bg="#002097", color="#FFFFFF"})  {
    return  (
        <TouchableOpacity style={[styles.container, {backgroundColor:bg}]} onPress={onPress}>
                <FontAwesome5 name={icon} size={20} color={color} />
        </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
    container:{
        width:40,
        height:40,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.light.accent
    }
 });