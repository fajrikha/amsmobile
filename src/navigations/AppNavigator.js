import * as React from 'react';
import {
    createStackNavigator,
  } from '@react-navigation/stack';
import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/register'
import LupaPasswordScreen from '../screens/lupaPassword';

const Stack = createStackNavigator();

 export function AppStack() {
     return (
         <Stack.Navigator headerMode="none" initialRouteName="Login">
             <Stack.Screen name="Login" component={LoginScreen} />
             <Stack.Screen name="Register" component={RegisterScreen} />
             <Stack.Screen name="Lupa Password" component={LupaPasswordScreen} />
         </Stack.Navigator>
     )
 } 