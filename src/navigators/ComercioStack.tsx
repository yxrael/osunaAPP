import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Comercios } from '../screens/Comercios';
import { Comercio } from '../screens/Comercio';

const Stack = createStackNavigator();

export const ComercioStack =() => {
  return (
    <Stack.Navigator
        screenOptions={{
           headerShown: false 
        }}
    >
      <Stack.Screen name="ComerciosOsuna" component={Comercios} />
      <Stack.Screen name="ComercioOsuna" component={Comercio} />

    </Stack.Navigator>
  );
}