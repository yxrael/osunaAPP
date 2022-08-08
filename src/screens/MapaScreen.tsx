import React from 'react';
import {Image, StyleSheet, Dimensions, View} from 'react-native';
//
const windowWidth = Dimensions.get('window').width;

export const MapaScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            {/* <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Mapa</Text> */}
            <Image 
                source={ require('../../assets/mapaDemo.png')}
                style={{
                    width: windowWidth,
                    // height: 500
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({

});