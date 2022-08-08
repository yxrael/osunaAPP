import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';

interface Props {
    comercio: string,
    direccion: string,
    categoria: string
}

const windowWidth = Dimensions.get('window').width;

export const ComercioIndividual = ( { comercio , direccion, categoria }: Props) => {


  return (
    <View style={ styles.contenedor }>

        {/* <Image 
            source={ require('../../assets/logoasempro.png')}
            style={ styles.imagenFondo }
        /> */}

        <Text style={ styles.comercio }>{ comercio }</Text>
        <Text style={ styles.direccion }>{ direccion }</Text>

        <View style={ styles.rotuladoCategoria }>
            <Text style={ styles.categoria }>{ categoria }</Text>
        </View>
        

    </View>
  )
}

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#b1d8f0',
        borderRadius: 15,
        marginBottom: 10,
        // width: 300,
        width: windowWidth * 0.9,
        height: (windowWidth * 0.9) * 0.35,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 20
    },
    comercio: {
        fontSize: 15,
        fontWeight: 'bold',
        padding: 2,
        marginTop: 10
    },
    direccion: {
        fontSize: 14,
        fontWeight: '100',
        padding: 2,
        marginBottom: 4
    },
    rotuladoCategoria: {
        backgroundColor: '#1b8bd1',
        borderRadius: 5,
        padding: 4,
        marginBottom: 10
    },
    categoria: {
        color: 'white'
    },
    imagenFondo: {
        height: 100,
        width: 100,
        position: 'absolute',
        right: -40,
        bottom: -2,
        opacity: 0.3
    }
});
