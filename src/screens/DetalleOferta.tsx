import React from 'react';
import {Button, Dimensions, StyleSheet, Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FadeInImage } from '../components/FadeInImage';

const windowWidth = Dimensions.get('window').width;

export const DetalleOferta = ( { route }: any ) => {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>

            {
                ( route.params.url ) && (
                    <FadeInImage
                        uri={ route.params.url }
                        style={{ 
                        // position: 'absolute',
                        // top: 0,
                        // right: 0,
                        width: windowWidth * 0.3,
                        height: windowWidth * 0.3,
                        borderTopRightRadius: 10,
                        borderBottomLeftRadius: 7,
                        marginBottom: 10
                        }}
                    />
                )
            }

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