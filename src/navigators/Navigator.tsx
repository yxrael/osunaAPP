import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Comercios } from '../screens/Comercios';
import { Inicio } from '../screens/Inicio';
import { Tarjeta } from '../screens/Tarjeta';
import { Text } from 'react-native';
// import { TabBarItem } from 'react-native-tab-view';

// const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

export const Navigator = () => {

  return (
    
    // <Stack.Navigator>
    //     <Stack.Screen name="Inicio" component={Inicio} />
    //     <Stack.Screen name="Comercios" component={Comercios} 
    //     <Stack.Screen name="Tarjeta" component={Tarjeta} />
    // </Stack.Navigator>

    <Tab.Navigator
        style={{}}
        sceneContainerStyle={{
            // backgroundColor: 'red'
        }}
        screenOptions={ ( {route} ) => ({
        tabBarContentContainerStyle: {
            // backgroundColor: 'red'
        },
        tabBarStyle: {
            borderTopColor: 'blue',
            borderTopWidth: 0,
            elevation: 0,
            shadowColor: 'transparent'
          },
          tabBarPressColor: 'blue',
          tabBarPressOpacity: 0.3,
          tabBarShowIcon: true,
          tabBarIndicatorStyle: {
            borderColor: 'blue',
            borderWidth: 1 ,        
          },
          
        tabBarIcon: ( props ) => {
            let iconName = '';
            
            switch(route.name) {
                case 'Comercios' :
                    iconName = 'gift-outline'
                break;
  
                case 'Tarjeta' :
                    iconName = 'qr-code-outline'
                break;

                case 'Ofertas' :
                    iconName = 'star-outline'
                break;
  
            }
            return <Ionicons name={iconName} size={25} color='black' />
            // return <Text>ICONO</Text>
        } 

        })
        }  
           
    >
        <Tab.Screen 
            name="Ofertas" 
            component={Inicio}
            // screenOptions={ ({route}) => ({
                
            // })}
                
        />
        <Tab.Screen name="Comercios" component={Comercios} />
        <Tab.Screen name="Tarjeta" component={Tarjeta} />
    </Tab.Navigator>
    
  )
}
