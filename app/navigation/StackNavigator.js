import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
const Stack = createStackNavigator();

import Drawer from './AppNavigator'
import CountryStats from '../screens/CountryStats'

export default  function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Drawer" screenOptions={{headerShown:false}}>
      <Stack.Screen name="Drawer" component={Drawer} />
      <Stack.Screen name="CountryStats" component={CountryStats} />
    </Stack.Navigator>
  );
}