import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { FadeInImage } from './FadeInImage';

interface Props {
    nombre: string,
    direccion: string,
    categoria: string,
    id: string
    url?: string,
    height?: number
}

const windowWidth = Dimensions.get('window').width;

export const ComercioIndividual = (  {
        nombre ,
        direccion ,
        categoria,
        url,
        id,
        height = ((windowWidth * 0.9) * 0.35)
    }: Props) => {

    const navigation = useNavigation<any>();

    const muestraComercio = () => {

        navigation.navigate('ComercioOsuna', {
            nombre, id: id, url: url
        } );
    }

  return (

    <TouchableOpacity
        activeOpacity={ 0.8 }
        onPress={ muestraComercio }
    >
        <LinearGradient 
            colors={['#c0d1eb', '#dde4eb', '#edf1f5']} 
            style={ {...styles.contenedor, height } }>
            
            {/* <Image 
                source={ require('../../assets/logoasempro.png')}
                style={ styles.imagenFondo }
            /> */}

            {
                ( url ) && 
                <FadeInImage
                    uri={ url }
                    style={{ 
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: windowWidth * 0.18,
                    height: windowWidth * 0.18,
                    borderTopRightRadius: 10,
                    borderBottomLeftRadius: 7
                    }}
                />
            }

            <Text style={ styles.comercio }>{ nombre }</Text>
            <Text style={ styles.direccion }>{ direccion }</Text>

            <View style={ styles.rotuladoCategoria }>
                <Text style={ styles.categoria }>{ categoria }</Text>
            </View>
            
        </LinearGradient>
    </TouchableOpacity>
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
        justifyContent: 'space-between',
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
        alignSelf: 'flex-start',
        paddingStart: 10,
        fontSize: 15,
        fontWeight: 'bold',
        padding: 2,
        marginTop: 10,
        marginBottom: 10
    },
    direccion: {
        alignSelf: 'flex-end',
        fontSize: 14,
        fontWeight: '300',
        padding: 2,
        paddingHorizontal: 10,
        top: 20
    },
    rotuladoCategoria: {
        alignSelf: 'flex-end',
        backgroundColor: 'rgba(103, 142, 240,0.8)',
        // borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        padding: 2,
        paddingHorizontal: 10,
        marginTop: 15,
        // marginBottom: 3
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
