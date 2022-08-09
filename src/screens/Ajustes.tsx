import React from 'react';
// import Ionicons from '@expo/vector-icons/Ionicons';

import { StyleSheet, Text, View } from 'react-native'

export const Ajustes = () => {
  return (
    <View style={ styles.container }>
        <View>
            
            <Text style={ styles.texto }>Ajustes</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    texto: {
      fontSize: 30,
      fontWeight: 'bold'
    }
});
