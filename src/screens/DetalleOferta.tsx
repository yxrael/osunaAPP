import React from 'react';
import {Button, Dimensions, StyleSheet, Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FadeInImage } from '../components/FadeInImage';
import MapView, { Marker } from 'react-native-maps';
import { ComercioIndividual } from '../components/ComercioIndividual';

const windowWidth = Dimensions.get('window').width;

export const DetalleOferta = ( { route }: any ) => {

    const navigation = useNavigation();

    

    const { negocio } = route.params;
    console.log( negocio.latitude );

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>

            <ComercioIndividual  
                    nombre={ negocio.nombre } 
                    direccion={ negocio.direccion }
                    categoria={ negocio.categoria.nombre }
                    id={ negocio._id }
                    url={ negocio.img }
                    height={ 150 }
                    // comercio={ item }
            />

            {/* {
                ( negocio.img ) && (
                    <FadeInImage
                        uri={ negocio.img }
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
            } */}

            {/* <Text style={{}}>OFERTA</Text> */}
            <Text style={{ fontSize: 30, fontWeight: 'bold', marginVertical: 20}}>{ route.params.oferta.nombre}</Text>
            {/* <Text style={{ fontSize: 20 }}>{ route.params.negocio.nombre}</Text> */}
            <Text>{ route.params.oferta.descripcion}</Text>
            <View style={{ height: 20}}></View>

            <MapView
                style={{ 
                    // flex: 1, 
                    width: windowWidth,
                    height: 200,
                    marginBottom: 15}}
                initialRegion={{
                    latitude: negocio.latitude,
                    longitude: negocio.longitude,
                    latitudeDelta: 0.002,
                    longitudeDelta: 0.002,
                }}
                zoomEnabled={true}
                zoomTapEnabled={true}
                provider='google'
            >

                <Marker 
                    key={ negocio._id }
                    coordinate={{
                        latitude: negocio.latitude,
                        longitude: negocio.longitude
                    }}
                    title={ negocio.title}
                    description={ negocio.description}
                />

            </MapView>

            <Button
                title='<- Atrás'
                onPress={ () => navigation.goBack() }
            />
        </View>
    );
}

const styles = StyleSheet.create({

});