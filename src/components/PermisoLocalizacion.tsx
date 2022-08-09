import React, { useContext } from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { PermissionsContext } from '../context/PermissionsContext';

export const PermisoLocalizacion = () => {
    
    const { requestLocationPermission } = useContext( PermissionsContext );

    return (
        <View style={ styles.container }>
            <Text style={{ marginBottom: 5}}>Por favor, activa los permisos de localizacion</Text>
            <Text>para poder mostrar las ofertas más cercanas</Text>

            <View style={{ marginBottom: 50, marginTop: 20}}>
                <Button 
                    title='Activar localización'
                    onPress={ requestLocationPermission }
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});