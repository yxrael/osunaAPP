import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Dimensions, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NegociosContext } from '../context/NegociosContext';
import { FadeInImage } from './FadeInImage';
import { Negocio } from '../interfaces/appInterfaces';
import { ComercioIndividual } from './ComercioIndividual';

interface Props {
  sector?: string,
  url: string
}

const windowWidth = Dimensions.get('window').width;

export const OfertaIndividual = ( { oferta }: any ) => {

  const { negocios } = useContext( NegociosContext );
  let negocio: any = [];

  const navigation = useNavigation<any>();

  for( let i = 0; i < negocios.length; i++){
    if( negocios[i]._id === oferta.negocio ){
      negocio = negocios[i];
    }
  }

  const muestraOferta = () => {
    navigation.navigate('DetalleOferta', {
      // oferta: oferta, negocio: establecimiento, url: url, testNegocio
      oferta: oferta, negocio
    } );
}

  return (
    <TouchableOpacity
      activeOpacity={ 0.8 }
      onPress={ muestraOferta }
    >

    <View style={{
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,
                
                elevation: 9,
                borderRadius: 15,
                marginBottom: 15,
                marginTop: 15,
    }}>
        {/* <Image 
            source={ url }
            style={{ 
                // height: 150,
                // width: 300, 
                width: windowWidth * 0.9,
                height: (windowWidth * 0.9) * 0.45,
                borderRadius: 15,
            }}
        /> */}


        <FadeInImage 
          // uri={'https://nodocios.com.ar/wp-content/uploads/oferta.jpg'}
          uri={'https://www.rotulatumismo.com/2344-thickbox_default/cartel-colgante-super-oferta.jpg'}
          style={{ 
            width: windowWidth * 0.9,
            height: (windowWidth * 0.9) * 0.45,
            borderRadius: 15,

        }}
        />
        <Text style={{ 
          position: 'absolute',
           fontWeight: 'bold',
           fontSize: 20,
           top: 0,
           paddingLeft: 5
           }}>
            { oferta.nombre } 
        </Text>
        <Text style={{ 
          position: 'absolute',
           fontWeight: 'bold',
           fontSize: 30,
           bottom: 30,
           left: 10,
           paddingLeft: 5
           }}>
            { negocio.nombre } 
        </Text>
        <Text style={{ 
          position: 'absolute',
           fontWeight: 'bold',
           fontSize: 15,
           bottom: 0,
           right: 0,
           paddingRight: 5
           }}>
            { oferta.descripcion } 
        </Text>

    </View>
    </TouchableOpacity>
  )
}
