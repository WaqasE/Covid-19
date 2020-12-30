import React, { useState, useEffect } from 'react';

import Home from './app/screens/Home';
import ThemeContext from './app/context/Theme'
import ThemeStorage from './app/context/Storage'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './app/navigation/StackNavigator'


export default function App() {
    const [ theme, setTheme ] = useState('light')
    const restoreToken  = async()=>{
      const token = await ThemeStorage.getToken();
      if(!token)return
      setTheme(token)
    }
  
    useEffect(()=>{
      restoreToken()
    },[])
  
  


  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
        <NavigationContainer>
           <StackNavigator/>
        </NavigationContainer>
    </ThemeContext.Provider>
  );
}
