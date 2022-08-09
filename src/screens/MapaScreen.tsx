import React, { useContext } from 'react';
import { Image, StyleSheet, Dimensions, View, Button } from 'react-native';
import { Mapa } from '../components/Mapa';
import { PermissionsContext } from '../context/PermissionsContext';
import { PermisoLocalizacion } from '../components/PermisoLocalizacion';
//
const windowWidth = Dimensions.get('window').width;

export const MapaScreen = () => {

    const { permissions, requestLocationPermission, checkLocationPermission } = useContext( PermissionsContext );

    console.log( permissions.locationStatus ); 


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            {/* <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Mapa</Text> */}

            {
                ( permissions.locationStatus === 'granted') 
                ? <Mapa />
                : <PermisoLocalizacion />
            }
            
            
        </View>
    );
}

const styles = StyleSheet.create({

});