import React, { useContext } from 'react';
import { Dimensions, View } from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import { NegociosContext } from '../context/NegociosContext';
import { Negocio } from '../interfaces/appInterfaces';

const windowWidth = Dimensions.get('window').width;

export const Mapa = ( listado: Negocio[]) => {

    // const { negocios } = useContext( NegociosContext );

    // negocios.map( (item, index) => {
    //     console.log( item.nombre);
    //     console.log( item.descripcion);
    //     console.log( item.longitude);
    //     console.log( item.latitude);
    //     console.log( index);
    // })

    return (
        <View style={{ flex: 1}}>

            <MapView
            style={{ 
                flex: 1, 
                width: windowWidth,}}
            initialRegion={{
                latitude: 37.237341,
                longitude: -5.103318,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            >
                
                {
                    listado.map( (item, index) => (
                        <Marker
                            // image={ require('../../assets/custom-marker.png')}
                            key={ index }
                            coordinate={{
                                latitude: Number(item.latitude),
                                longitude: Number(item.longitude)
                            }}
                            title={ item.nombre}
                            description={ item.categoria.nombre || ''}
                        />
                    ))
                }

                        {/* <Marker
                            // image={ require('../../assets/custom-marker.png')}
                            coordinate={{
                                latitude: 37.238030385934174,
                                longitude: -5.103299716785019
                            }}
                            // title={ item.nombre}
                            // description={ item.descripcion || ''}
                            title={ '3Joli'}
                            description={ 'Tienda de moda'}
                        /> */}
                

            </ MapView>
        </View>

    );
}
