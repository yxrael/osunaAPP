import React from 'react';

// import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, View, Text} from 'react-native';

export const Background = () => {
    return (
        
        // <LinearGradient
        // style={{ flex: 1}}
        // colors={['#4c669f', '#3b5998', '#192f6a']}
        // >

        <View 
            style={{
                position: 'absolute',
                backgroundColor: '#5856D6',
                // backgroundColor: '#4885e8',
                
                top: -320,
                width: 1000,
                height: 1200,
                transform: [
                    {
                        rotate: '-70deg'
                    }
                ]
            }}
        />

        // </LinearGradient>
        
    );
}




