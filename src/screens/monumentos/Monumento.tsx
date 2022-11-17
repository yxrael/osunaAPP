import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Button, Dimensions, StyleSheet, Text, View} from 'react-native';
import { FadeInImage } from '../../components/FadeInImage';
import { NavigatorMonumentos } from '../../navigators/NavigatorMonumentos';

const windowWidth = Dimensions.get('window').width;

export const Monumento = (  {route}: any ) => {

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
                        width: windowWidth * 0.7,
                        height: windowWidth * 0.7,
                        borderTopRightRadius: 10,
                        borderBottomLeftRadius: 7,
                        marginBottom: 15
                        }}
                    />
                )
            }
            
            <Text>COMERCIO</Text>
            <Text style={{ fontSize: 30, fontWeight: 'bold'}}>{ route.params.nombre }</Text>
            <Text>{ route.params.descripcion }</Text>
            <View style={{ height: 20}}></View>
            <Button 
                title='<- Volver'
                onPress={ () => navigation.goBack() }
            />
        </View>
    );
}

const styles = StyleSheet.create({

});