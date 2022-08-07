import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { styles } from '../theme/styles';

export const Tarjeta = () => {
  return (
    <View style={{
      ...styles.container, 
      flex: 1,
      // alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center'
      
    }}
    >
        <Image
          source={ require('../../assets/tarjeta.jpg')}
          style={ stylesInicio.logoFondo }
          resizeMode='contain' 
        />
        {/* <Text>Tarjeta</Text> */}
    </View>
  )
}

const stylesInicio = StyleSheet.create({
    logoFondo: {
      // position: 'absolute',
      height: 900,
      width: 400,
      // bottom: -40,
      // right: -40,
      // opacity: 0.1
    }
})