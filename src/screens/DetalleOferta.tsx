import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const DetalleOferta = ( { route }: any ) => {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{}}>OFERTA</Text>
            <Text style={{ fontSize: 30, fontWeight: 'bold'}}>{ route.params.oferta.nombre}</Text>
            <Text style={{ fontSize: 20 }}>{ route.params.negocio}</Text>
            <Text>{ route.params.oferta.descripcion}</Text>
            <View style={{ height: 20}}></View>
            <Button
                title='<- Atrás'
                onPress={ () => navigation.goBack() }
            />
        </View>
    );
}

const styles = StyleSheet.create({

});