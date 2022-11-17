import React, { useContext } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { MonumentoIndividual } from '../../components/monumentos/MonumentoIndividual';

import { NegociosContext } from '../../context/NegociosContext';
import LinearGradient from 'react-native-linear-gradient';


export const Monumentos = () => {

  const { negocios } = useContext( NegociosContext );

  const monumentos = negocios.filter( item => item.seccion === 'museos');

  return (
    <LinearGradient colors={['#e4f0f2', '#62a9e3', '#3695e3']} style={{ flex: 1}}>

    <View style={{
      ...stylesInicio.container, 
      justifyContent: 'center',
      alignItems: 'center'
    
    }}
    > 

        <FlatList 
            data={ monumentos }
            renderItem={ ({ item }) => ( 
              <MonumentoIndividual  
                nombre={ item.nombre } 
                direccion={ item.direccion || 'Direccion' }
                categoria={ item.categoria.nombre || 'Categoría' }
                descripcion={ item.descripcion || 'Horario' }
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