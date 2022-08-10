import React from 'react';
import { Dimensions, View } from 'react-native';

import MapView from 'react-native-maps';

const windowWidth = Dimensions.get('window').width;

export const Mapa = () => {
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
            />
        </View>

    );
}
