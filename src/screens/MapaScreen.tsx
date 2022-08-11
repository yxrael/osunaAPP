import React, { useContext } from 'react';
import { View } from 'react-native';
import { Mapa } from '../components/Mapa';
import { PermissionsContext } from '../context/PermissionsContext';
import { PermisoLocalizacion } from '../components/PermisoLocalizacion';
import { LoadingScreen } from './LoadingScreen';
import { NegociosContext } from '../context/NegociosContext';

export const MapaScreen = () => {

    const { permissions } = useContext( PermissionsContext );
    const { negocios } = useContext( NegociosContext );


    if( permissions.locationStatus === 'unavailable' ){
        return <LoadingScreen />
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>

            {
                ( permissions.locationStatus === 'granted') 
                ? <Mapa 
                    markers={negocios} 
                />
                : <PermisoLocalizacion />
            }
            
        </View>
    );
}

