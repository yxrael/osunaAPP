import React from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { MapMarkerProps } from 'react-native-maps'

interface Marcador{
    marcador: MapMarkerProps[],
}

export const Marcadores = ( { marcador }: Marcador) => {

    const listaMarcas = marcador.map( (marca, index ) => {

        return (
            <Marker 
                key={ index }
                coordinate={{
                    latitude: marca.coordinate.latitude,
                    longitude: marca.coordinate.longitude
                }}
                title={ marca.title}
                description={ marca.description}
            />

        )
    })

    return (
        <View>
            { listaMarcas }
        </View>
    )
}
