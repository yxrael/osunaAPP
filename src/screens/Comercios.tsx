import React, { useContext } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { ComercioIndividual } from '../components/ComercioIndividual';
import { listaComercios } from '../data/listaComercios';
import { NegociosContext } from '../context/NegociosContext';

import LinearGradient from 'react-native-linear-gradient';

export const Comercios = () => {

  const { negocios } = useContext( NegociosContext );

  return (
    <LinearGradient colors={['#e4f0f2', '#62a9e3', '#3695e3']} style={{ flex: 1}}>

    <View style={{
      ...stylesInicio.container, 
      justifyContent: 'center',
      alignItems: 'center'
    
    }}
    > 

        <FlatList 
            data={ negocios }
            renderItem={ ({ item }) => ( 
              <ComercioIndividual  
                nombre={ item.nombre } 
                direccion={ item.direccion || 'Direccion' }
                categoria={ item.categoria.nombre || 'Categoría' }
                id={ item._id }
                url={ item.img || ''}
                // comercio={ item }
              />)}
            keyExtractor={ item => item.nombre }
            showsVerticalScrollIndicator={ false }
        />

    </View>
    </LinearGradient>
  )
}

const stylesInicio = StyleSheet.create({
  container: {
    marginHorizontal: 20,
}
})