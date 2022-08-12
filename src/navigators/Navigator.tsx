import React, { useContext, useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Comercios } from '../screens/Comercios';
import { Inicio } from '../screens/Inicio';
import { Tarjeta } from '../screens/Tarjeta';
import { MapaScreen } from '../screens/MapaScreen';
import { NegociosContext } from '../context/NegociosContext';


const Tab = createMaterialTopTabNavigator();

export const Navigator = () => {

    const { loadNegocios } = useContext( NegociosContext );
    useEffect(() => {
        loadNegocios();
    }, [])
    
  return (

    <Tab.Navigator
        style={{}}
        sceneContainerStyle={{
            // backgroundColor: 'red'
        }}
        screenOptions={ ( {route} ) => ({
        tabBarLabelStyle: { fontSize: 11},
        // tabBarContentContainerStyle: {
        //     // backgroundColor: 'red'
        // },
        tabBarStyle: {
            borderTopColor: 'blue',
            borderTopWidth: 0,
            elevation: 0,
            shadowColor: 'transparent'
          },
          tabBarPressColor: '#79a3e8s',
          tabBarPressOpacity: 0.5,
          tabBarShowIcon: true,
          tabBarIndicatorStyle: {
            borderColor: 'blue',
            borderWidth: 1 ,        
          },
        //   tabBarShowLabel: false,
          
        tabBarIcon: ( props ) => {
            let iconName = '';
            
            switch(route.name) {
                case 'Comercios' :
                    iconName = 'gift-outline'
                break;
  
                case 'Tarjeta' :
                    iconName = 'qr-code-outline'
                break;

                case 'Mapa' :
                    iconName = 'location-outline'
                break;

                case 'Ofertas' :
                    iconName = 'star-outline'
                break;
  
            }
            return <Ionicons name={iconName} size={25} color='black' />
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
        <Tab.Screen name="Mapa" component={MapaScreen} />
        <Tab.Screen name="Tarjeta" component={Tarjeta} />
    </Tab.Navigator>
    
  )
}
