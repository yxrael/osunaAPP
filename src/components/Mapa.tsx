import React, { useContext, useEffect } from 'react';
import { Dimensions, View } from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import { Negocio } from '../interfaces/appInterfaces';
import { MapMarkerProps } from 'react-native-maps'

const windowWidth = Dimensions.get('window').width;

const listadoMapas:MapMarkerProps[] = [
    {
      coordinate:{
        latitude: 37.238030385934174,
        longitude: -5.103299716785019,
      },
      title: 'Mapa1',
      description:'Descripcion de Mapa 1'    
    },
    {
      coordinate:{
        latitude: 37.24759351514075,
        longitude: -5.110077494413242,
      },
      title: 'Mapa2',
      description:'Descripcion de Mapa 2'    
    },
    {
      coordinate:{
        latitude: 37.24190530736906,
        longitude: -5.10696524192263,
      },
      title: 'Mapa3',
      description:'Descripcion de Mapa 2'    
    },
    
  ]

type Props = {
    markers: MapMarkerProps[]
}


export const Mapa = ( {markers} : Props) => {

  

console.log(markers);

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
                provider='google'
            >

            {
                markers.map( (item: MapMarkerProps, index: any ) => (
                    <Marker
                        key={ index }
                        // coordinate={ item.coordinate }
                        // coordinate={{
                        //     latitude: 37.238030385934174,
                        //     longitude: -5.103299716785019
                        // }}
                        coordinate={{
                            latitude: item.coordinate.latitude,
                            longitude: item.coordinate.longitude
                        }}
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
