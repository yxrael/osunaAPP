import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export const Comercio = (  {route}: any ) => {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>COMERCIO</Text>
            <Text style={{ fontSize: 30, fontWeight: 'bold'}}>{ route.params.nombre }</Text>
            <Text>{ route.params.id }</Text>
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