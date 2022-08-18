import React, { useContext } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { OfertaIndividual } from '../components/OfertaIndividual';
import { OfertasContext } from '../context/OfertasContext';

export const Inicio = () => {

  const listadoOfertas = useContext( OfertasContext );

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
          data={ listadoOfertas.ofertas }
          renderItem={ ({ item }) => ( 
            <OfertaIndividual  ofertas={ item }/>)}
          keyExtractor={ item => item._id }
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
