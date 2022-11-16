import React, { useContext, useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Tarjeta } from '../screens/Tarjeta';
import { NegociosContext } from '../context/NegociosContext';
import { MapaScreen } from '../screens/MapaScreen';
import { ComercioStack } from './ComercioStack';
import { OfertaStack } from './OfertaStack';

const Tab = createMaterialTopTabNavigator();

export const NavigatorComercios = () => {

    const { loadNegocios } = useContext( NegociosContext );
    useEffect(() => {
        loadNegocios();
    }, [])
    
  return (

    <Tab.Navigator
        style={{}}
        sceneContainerStyle={{
        }}
        screenOptions={ ( {route} ) => ({
        tabBarLabelStyle: { fontSize: 11},
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
            component={OfertaStack}
            // screenOptions={ ({route}) => ({
                
            // })}
                
        />
        <Tab.Screen name="Comercios" component={ComercioStack} />
        <Tab.Screen name="Mapa" component={MapaScreen} />
        <Tab.Screen name="Tarjeta" component={Tarjeta} />
    </Tab.Navigator>
    
  )
}
