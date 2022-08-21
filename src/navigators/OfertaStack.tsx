import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Inicio } from '../screens/Inicio';
import { DetalleOferta } from '../screens/DetalleOferta';

const Stack = createStackNavigator();

export const OfertaStack =() => {
  return (
    <Stack.Navigator
        screenOptions={{
           headerShown: false 
        }}
    >
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="DetalleOferta" component={DetalleOferta} />

    </Stack.Navigator>
  );
}