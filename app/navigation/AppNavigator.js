import React,{useContext} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ThemeContext from '../context/Theme'
import ThemeStorage from '../context/Storage'

import Home from '../screens/Home'
import Country from '../screens/Country'
import Favourite from '../screens/Favourite'

import colors from '../config/colors';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    const themeProvider = useContext(ThemeContext)
  return (
    <Drawer.Navigator 
        drawerStyle={{backgroundColor:themeProvider.theme==='light'?colors.light.primary:colors.dark.primary,paddingVertical:'30%', paddingLeft:'2%' }}
        drawerContentOptions={{activeTintColor:themeProvider.theme==='light'?colors.light.secondary:colors.dark.secondary, inactiveTintColor:'darkgrey',labelStyle:{fontWeight:'bold', fontSize:16,},}}
        screenOptions={({ route }) => ({
                drawerIcon: ({ focused, color, size=25 }) => {
                let iconName;
                if (route.name === 'Home') {
                    iconName = focused
                        ? 'home'
                        : 'home';
                } 
                if (route.name === 'Country') {
                    iconName = focused
                        ? 'map-marker-radius'
                        : 'map-marker-radius';
                } 
                else if (route.name === 'Favourite') {
                    iconName = focused 
                    ? 'heart'
                    : 'heart';
                }

                 // You can return any component that you like here!
                 return <MaterialCommunityIcons name={iconName} size={size} color={color} />
             },
             })}
               
    >
      <Drawer.Screen  name="Home" component={Home} />
      <Drawer.Screen name="Country" component={Country} />
      <Drawer.Screen name="Favourite" component={Favourite} />

    </Drawer.Navigator>
  );
}
