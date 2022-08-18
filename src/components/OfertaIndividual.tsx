import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import React, { useContext } from 'react'
import { Image, View, Dimensions, Text } from 'react-native'
import { NegociosContext } from '../context/NegociosContext';
import { Negocio, Oferta } from '../interfaces/appInterfaces';
import { FadeInImage } from './FadeInImage';
import { Background } from './fondo';


interface Props {
  sector?: string,
  url: string
}

let negocio = ''

const windowWidth = Dimensions.get('window').width;

export const OfertaIndividual = ( { ofertas }: any ) => {
  // console.log('_______');
  // console.log( ofertas._id);
  // console.log( ofertas.negocio);

  const { negocios } = useContext( NegociosContext );



  // const negocio = negocios.filter( item => item._id === oferta.ofertas.negocio) 
  // negocios.filter( item => {
  //   if( item._id === oferta.ofertas.negocio ){
  //     console.log( item.nombre );
  //     negocio = item.nombre
  //   }
  // }) 

  return (
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
            { ofertas.nombre} 
        </Text>
        <Text style={{ 
          position: 'absolute',
           fontWeight: 'bold',
           fontSize: 15,
           bottom: 0,
           right: 0,
           paddingRight: 5
           }}>
            { ofertas.descripcion} 
        </Text>

    </View>
  )
}
