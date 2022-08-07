import React from 'react';
import {Image, View, Text} from 'react-native';

export const WhiteLogo = () => {
    return (
        <View style={{
            alignItems: 'center'
        }}>
            <Text style={{ color: 'white'}}>LOGO</Text>
            {/* <Image 
                source={ require('../../assets/logoasempro.png')}
                style={{
                    width: 170,
                    height: 140
                }}
            /> */}
        </View>
    );
}