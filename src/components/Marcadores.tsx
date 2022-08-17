import React from 'react';
import MapView, { Marker } from 'react-native-maps';

import { MapMarkerProps } from 'react-native-maps'

interface Marcador{
    marcador: MapMarkerProps,
    index: any
}

export const Marcadores = ( {marcador }: Marcador, index: any ) => {
  return (
    <>
    
    <Marker
        key={ index }
        coordinate={{
            latitude: marcador.coordinate.latitude,
            longitude: marcador.coordinate.longitude
        }}
        title={ marcador.title}
        description={ marcador.description }
    />
    
    </>
  )
}


                    //     // coordinate={{
                    //     //     latitude: 37.238030385934174,
                    //     //     longitude: -5.103299716785019
                    //     // }}