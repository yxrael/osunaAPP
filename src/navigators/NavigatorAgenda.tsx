import React, { useContext, useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Tarjeta } from '../screens/Tarjeta';
import { NegociosContext } from '../context/NegociosContext';
import { MapaScreen } from '../screens/MapaScreen';
import { ComercioStack } from './ComercioStack';
import { OfertaStack } from './OfertaStack';

const Tab = createMaterialTopTabNavigator();

export const NavigatorAgenda = () => {

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
                case 'Conciertos' :
                    iconName = 'musical-notes-outline'
                break;

                case 'Teatro' :
                    iconName = 'chatbox-ellipses-outline'
                break;

                case 'Cursos' :
                    iconName = 'school-outline'
                break;

                case 'Otros eventos' :
                    iconName = 'duplicate-outline'
                break;                
  
            }
            return <Ionicons name={iconName} size={25} color='black' />
        } 

        })
        }  
           
    >
        <Tab.Screen 
            name="Conciertos" 
            component={OfertaStack}
        />
        <Tab.Screen name="Teatro" component={ComercioStack} />
        <Tab.Screen name="Cursos" component={ComercioStack} />
        <Tab.Screen name="Otros eventos" component={ComercioStack} />

    </Tab.Navigator>
    
  )
}
