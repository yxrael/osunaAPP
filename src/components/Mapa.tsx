import React, { useContext } from 'react';
import { Dimensions, View } from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import { Negocio } from '../interfaces/appInterfaces';
import { MapMarkerProps } from 'react-native-maps'

const windowWidth = Dimensions.get('window').width;

type Props = {
    markers: Negocio[]
}

export const Mapa = ( {markers}: Props) => {


    let listado: MapMarkerProps[] = [];

    markers.map( (item ) => {
        listado.push({
            coordinate: { latitude: Number(item.latitude), longitude: Number(item.longitude)},
            title: item.nombre,
            description: item.descripcion
        })
    })

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
                zoomEnabled={true}
                zoomTapEnabled={true}
            >

{
                listado.map( (item, index ) => (
                    <Marker
                        key={ index }
                        coordinate={ item.coordinate }
                        title={ item.title}
                        description={ item.description }
                    />
                ))
            }

                        {/* <Marker  
                            coordinate={{
                                latitude: 37.238030385934174,
                                longitude: -5.103299716785019
                            }}
                            title={ '3Joli'}
                            description={ 'Tienda de moda'}
                        /> */}
                

            </ MapView>
        </View>

    );
}
