import React from 'react'
import { Image, View, Dimensions } from 'react-native'
import { FadeInImage } from './FadeInImage';


interface Props {
  sector?: string,
  url: string
}

const windowWidth = Dimensions.get('window').width;

export const OfertaIndividual = ( { sector, url }: Props ) => {

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
                marginTop: 15
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
          uri={'https://nodocios.com.ar/wp-content/uploads/oferta.jpg'}
          style={{ 
            width: windowWidth * 0.9,
            height: (windowWidth * 0.9) * 0.45,
            borderRadius: 15,
        }}

        />


    </View>
  )
}
