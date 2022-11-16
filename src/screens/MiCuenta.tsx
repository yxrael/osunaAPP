import React, { useContext } from 'react';
import {Button, Text, View} from 'react-native';
import { styles } from '../theme/styles';
import { AuthContext } from '../context/AuthContext';
import { NavigatorComercios } from '../navigators/NavigatorComercios';

export const MiCuenta = ( { navigation }) => {

    const { logOut } = useContext( AuthContext );

    const cierraSesion = () => {
        logOut();
        navigation.navigate('e-ASEMPRO')
    }

    return (
        <View style={{ 
            flex: 1, 
            alignItems: 'center', 
            justifyContent: 'center'
            }}>
            <Text style={{ marginBottom: 10 }}>Mi Cuenta</Text>
            <Button 
                title='Logout'
                onPress={ () => cierraSesion() }
            />
        </View>
    );
}

