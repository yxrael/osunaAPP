import React, { useContext, useEffect } from 'react';
import {Alert, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { WhiteLogo } from '../components/Logo';
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../hooks/useForm';
import { loginStyles } from '../theme/loginTheme';


// interface Props extends StackNavigationProp<any, any>{}

export const RegisterScreen = ( { navigation }: any) => {

    const {email, password, name, nif, onChange }= useForm({
        name: '',
        email: '',
        password: '',
        nif: ''
     });

    const { signUp, removeError, errorMessage } = useContext( AuthContext);

    useEffect(() => {

        if(errorMessage.length === 0) return;
 
        Alert.alert(
         'Registro incorrecto', 
         errorMessage,
         [
             {
                 text: 'Ok',
                 onPress: removeError
             }
         ] 
         );
      }, [errorMessage]); 

     const onRegister = () => {
      console.log('registrando');
        Keyboard.dismiss();
        signUp({nombre: name, correo: email, password, nif});
        navigation.navigate('e-Comercios');
     }

    return (
        <>
          
            <KeyboardAvoidingView
                style={{ flex: 1, backgroundColor: '#5856D6' }}
                behavior={ (Platform.OS === 'ios') ? 'padding' : 'height' }
            >

                <View style={ loginStyles.formContainer }>
                    {/* Keyboard avoid view */}
                    {/* <WhiteLogo /> */}

                    <Text style={ loginStyles.title }>Nueva cuenta</Text>

                    <Text style={ loginStyles.label }>Nombre</Text>
                    <TextInput 
                        placeholder='Introduce tu nombre'
                        placeholderTextColor='rgba(255,255,255,0.4'
                        keyboardType='default'
                        underlineColorAndroid='white'
                        style={[
                            loginStyles.inputField,
                            ( Platform.OS === 'ios') && loginStyles.inputFieldIOS
                        ]}
                        selectionColor='white'
                        
                        onChangeText={ (value) => onChange( value, 'name')}
                        value={ name }
                        onSubmitEditing={ onRegister }

                        autoCapitalize='none'
                        autoCorrect={ false }
                    />

                    <Text style={ loginStyles.label }>NIF/NIE</Text>
                    <TextInput 
                        placeholder='Introduce tu NIF/NIE'
                        placeholderTextColor='rgba(255,255,255,0.4'
                        keyboardType='default'
                        underlineColorAndroid='white'
                        style={[
                            loginStyles.inputField,
                            ( Platform.OS === 'ios') && loginStyles.inputFieldIOS
                        ]}
                        selectionColor='white'
                        
                        onChangeText={ (value) => onChange( value, 'nif')}
                        value={ nif }
                        onSubmitEditing={ onRegister }

                        autoCapitalize='none'
                        autoCorrect={ false }
                    />

                    <Text style={ loginStyles.label }>Email</Text>
                    <TextInput 
                        placeholder='Introduce tu email'
                        placeholderTextColor='rgba(255,255,255,0.4'
                        keyboardType='email-address'
                        underlineColorAndroid='white'
                        style={[
                            loginStyles.inputField,
                            ( Platform.OS === 'ios') && loginStyles.inputFieldIOS
                        ]}
                        selectionColor='white'
                        
                        onChangeText={ (value) => onChange( value, 'email')}
                        value={ email }
                        onSubmitEditing={ onRegister }

                        autoCapitalize='none'
                        autoCorrect={ false }
                    />

                    <Text style={ loginStyles.label }>Contraseña</Text>
                    <TextInput 
                        placeholder='*****'
                        placeholderTextColor='rgba(255,255,255,0.4'
                        underlineColorAndroid='white'
                        secureTextEntry
                        style={[
                            loginStyles.inputField,
                            ( Platform.OS === 'ios') && loginStyles.inputFieldIOS
                        ]}
                        selectionColor='white'
                        
                        onChangeText={ (value) => onChange( value, 'password')}
                        value={ password }
                        onSubmitEditing={ onRegister }

                        autoCapitalize='none'
                        autoCorrect={ false }
                    />

                    <View style={ loginStyles.buttonContainer }>
                        <TouchableOpacity
                            activeOpacity={ 0.8 }
                            style={ loginStyles.button }
                            onPress={ onRegister }
                        >
                            <Text style={ loginStyles.buttonText }>Crear cuenta</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        activeOpacity={ 0.8}
                        style={ loginStyles.buttonReturn }
                        onPress={ () =>  navigation.navigate('LoginScreen')}
                    >
                        <Text style={ loginStyles.buttonText }>Login</Text>

                    </TouchableOpacity>

                </View>

            </KeyboardAvoidingView>
            
        </>
    );
}

