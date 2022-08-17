import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MapaScreen } from '../screens/MapaScreen';
import { Mapa } from '../components/Mapa';

const Stack = createStackNavigator();

export const MyStack= () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="MapaOfertas" component={MapaScreen} />
      <Stack.Screen name="DibujaMapa" component={Mapa} />
    </Stack.Navigator>
  );
}