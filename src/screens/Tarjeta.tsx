import React, { useContext } from 'react';
import QRCode from 'react-native-qrcode-svg';

import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import { styles } from '../theme/styles';
import { AuthContext } from '../context/AuthContext';

const windowWidth = Dimensions.get('window').width;

export const Tarjeta = () => {

  const { user } = useContext( AuthContext )
  const uriLogo = ''

  

  return (
    <View style={{
      ...styles.container, 
      flex: 1,
      // alignContent: 'center',
      // justifyContent: 'center',
      alignItems: 'center'
      
    }}
    >

        {
         ( user ) 
          ? <>
              <Text style={ stylesInicio.nombreTarjeta }>{ user.nombre }</Text>
              <QRCode
                value={ user?.uid }
                size={ 180 }
                logo={ require('../../assets/logoasempro.png')}
                logoSize={20}
                logoBackgroundColor='white'
              />
            </>
          : <Text style={{ ...stylesInicio.nombreTarjeta,
            width: 150
          }}>Inicia sesión para ver tus datos</Text>
        }
      
        {/* <Image
          source={ require('../../assets/tarjeta.jpg')}
          style={ stylesInicio.logoFondo }
          resizeMode='contain' 
        /> */}
        
    </View>
  )
}

const stylesInicio = StyleSheet.create({
    logoFondo: {
      // position: 'absolute',
      height: 500,
      width: windowWidth,
      // bottom: -40,
      // right: -40,
      // opacity: 0.1
    },
    nombreTarjeta: {
      // position: 'absolute',
      // bottom: 250,
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 35,
      marginTop: 30
    }
})