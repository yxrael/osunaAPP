import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { Ajustes } from '../screens/Ajustes';
import { Inicio } from '../screens/Inicio';
import { Navigator } from './Navigator';
import { Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {

    // const { width } = useWindowDimensions();
    

  return (
    <Drawer.Navigator
        screenOptions={{
            drawerPosition: 'left',
            // drawerType: width >= 768 ? 'permanent' : 'front'
        }}
        drawerContent={ (  ) => <MenuInterno /> } 
    >

      <Drawer.Screen name="e-ASEMPRO" component={Navigator} />
      <Drawer.Screen name="Ajustes" component={Ajustes} />
      <Drawer.Screen name="LoginScreen" component={LoginScreen} />
      <Drawer.Screen name="RegisterScreen" component={RegisterScreen} />

    </Drawer.Navigator>
  );
}

const MenuInterno = (  ) => {

    const navigation = useNavigation();

    return (

        <DrawerContentScrollView>
            <View style={{ marginTop: 80, marginLeft: 20}}>
                <TouchableOpacity 
                    style={{ flexDirection: 'row'}}
                    onPress={ () => navigation.navigate( 'e-ASEMPRO' )}     
                >
                    <Ionicons 
                        name='star-outline'
                        size={30}
                    />
                    <Text style={{ marginLeft: 20, marginBottom: 30, fontSize: 17}}>Ofertas</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{ flexDirection: 'row'}}
                    onPress={ () => navigation.navigate('LoginScreen')}     
                >
                    <Ionicons 
                        name='person-outline'
                        size={30}
                    />
                    <Text style={{ marginLeft: 20, fontSize: 17, marginBottom: 30}}>Mi cuenta</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{ flexDirection: 'row'}}
                    onPress={ () => navigation.navigate('Ajustes')}     
                >
                    <Ionicons 
                        name='settings-outline'
                        size={30}
                    />
                    <Text style={{ marginLeft: 20, fontSize: 17, marginBottom: 30}}>Ajustes</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{ flexDirection: 'row'}}
                    // onPress={ () => navigation.navigate('Navigator')}    
                    onPress={ () => navigation.goBack() }    
                >
                    <Ionicons 
                        name='arrow-undo-outline'
                        size={30}
                    />
                    <Text style={{ marginLeft: 20, fontSize: 17}}>Volver</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>



    )
}