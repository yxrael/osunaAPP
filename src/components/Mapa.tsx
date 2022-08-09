import React from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const Mapa = () => {
    return (
        <Image 
                source={ require('../../assets/mapaDemo.png')}
                style={{
                    width: windowWidth,
                    height: 400
                }}
            />
    );
}

const styles = StyleSheet.create({

});