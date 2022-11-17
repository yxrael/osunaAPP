import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Monumentos } from '../screens/monumentos/Monumentos';
import { Monumento } from '../screens/monumentos/Monumento';

const Stack = createStackNavigator();

export const MonumentoStack =() => {
  return (
    <Stack.Navigator
        screenOptions={{
           headerShown: false 
        }}
    >
      <Stack.Screen name="MonumentosOsuna" component={Monumentos} />
      <Stack.Screen name="MonumentoOsuna" component={Monumento} />

    </Stack.Navigator>
  );
}