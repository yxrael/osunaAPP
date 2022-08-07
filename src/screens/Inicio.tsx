import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { OfertaIndividual } from '../components/OfertaIndividual';
import { listaOfertas } from '../data/listaOfertas';

export const Inicio = () => {

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
          data={ listaOfertas }
          renderItem={ ({ item }) => ( 
            <OfertaIndividual  url={ item.imagen }/>)}
          keyExtractor={ item => item.sector }
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
