import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { ComercioIndividual } from '../components/ComercioIndividual';
import { listaComercios } from '../data/listaComercios';

export const Comercios = () => {
  return (
    <View style={{
      ...stylesInicio.container, 
      flex: 1,
      // alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center'
    
    }}
    >
        <FlatList 
            data={ listaComercios }
            renderItem={ ({ item }) => ( 
              <ComercioIndividual  
                comercio={ item.comercio } 
                direccion={ item.direccion }
                categoria={ item.categoria }
              />)}
            keyExtractor={ item => item.comercio }
            showsVerticalScrollIndicator={ false }
        />

    </View>
  )
}

const stylesInicio = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    // marginVertical: 20,
}
})