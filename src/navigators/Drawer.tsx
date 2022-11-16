import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { Ajustes } from '../screens/Ajustes';
import { NavigatorComercios } from './NavigatorComercios';
import { Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { MiCuenta } from '../screens/MiCuenta';
import { AuthContext } from '../context/AuthContext';
import { NavigatorMonumentos } from './NavigatorMonumentos';
import { NavigatorRestaurantes } from './NavigatorRestaurantes';
import { NavigatorAgenda } from './NavigatorAgenda';

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {

  return (
    <Drawer.Navigator
        screenOptions={{
            drawerPosition: 'left',
            // drawerType: width >= 768 ? 'permanent' : 'front'
        }}
        drawerContent={ (  ) => <MenuInterno /> } 
    >

      <Drawer.Screen name="e-Comercios" component={NavigatorComercios} />
      <Drawer.Screen name="e-Monumentos" component={NavigatorMonumentos} />
      <Drawer.Screen name="e-Restaurantes" component={NavigatorRestaurantes} />
      <Drawer.Screen name="e-Agenda" component={NavigatorAgenda} />
      <Drawer.Screen name="Ajustes" component={Ajustes} />
      <Drawer.Screen name="LoginScreen" component={LoginScreen} />
      <Drawer.Screen name="RegisterScreen" component={RegisterScreen} />
      <Drawer.Screen name="MiCuenta" component={MiCuenta} />

    </Drawer.Navigator>
  );
}

const MenuInterno = (  ) => {

    const navigation = useNavigation<any>();
    const { status } = useContext( AuthContext );

    return (

        <DrawerContentScrollView>
            <View style={{ flex: 1, marginTop: 80, marginLeft: 20}}>
                <View>
                    <View>
                        <TouchableOpacity 
                            style={{ flexDirection: 'row'}}
                            onPress={ () => navigation.navigate( 'e-Comercios' )}     
                        >
                            <Ionicons 
                                name='cash-outline'
                                size={30}
                            />
                            <Text style={{ marginLeft: 20, marginBottom: 30, fontSize: 17}}>Comercios</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={{ flexDirection: 'row'}}
                            onPress={ () => navigation.navigate( 'e-Monumentos' )}     
                        >
                            <Ionicons 
                                name='camera-outline'
                                size={30}
                            />
                            <Text style={{ marginLeft: 20, marginBottom: 30, fontSize: 17}}>Monumentos</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={{ flexDirection: 'row'}}
                            onPress={ () => navigation.navigate( 'e-Restaurantes' )}     
                        >
                            <Ionicons 
                                name='restaurant-outline'
                                size={30}
                            />
                            <Text style={{ marginLeft: 20, marginBottom: 30, fontSize: 17}}>Restaurantes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={{ flexDirection: 'row'}}
                            onPress={ () => navigation.navigate( 'e-Agenda' )}     
                        >
                            <Ionicons 
                                name='calendar-outline'
                                size={30}
                            />
                            <Text style={{ marginLeft: 20, marginBottom: 30, fontSize: 17}}>Agenda</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ height: 30 }}></View>

                    <View>
                        <TouchableOpacity 
                            style={{ flexDirection: 'row'}}
                            onPress={ () => 
                                ( status === 'authenticated')
                                ? navigation.navigate('MiCuenta')
                                : navigation.navigate('LoginScreen')
                            }     
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
                </View>
                
            </View>
        </DrawerContentScrollView>



    )
}