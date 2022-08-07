import React from 'react'
import { Image, View } from 'react-native'

interface Props {
  sector?: string,
  url: string
}

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
                marginBottom: 20,
                marginTop: 20
    }}>
        <Image 
            source={ url }
            style={{ 
                height: 150,
                width: 300, 
                borderRadius: 15,
            }}
        />
    </View>
  )
}
