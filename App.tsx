import 'react-native-gesture-handler';
import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { MyDrawer } from './src/navigators/Drawer';
import { AuthContext, AuthProvider } from './src/context/AuthContext';
import { NegociosContext, NegociosProvider } from './src/context/NegociosContext';
import { OfertasProvider } from './src/context/OfertasContext';
import { PermissionsProvider } from './src/context/PermissionsContext';



const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      <NegociosProvider>
          <OfertasProvider>
            <PermissionsProvider>
              { children }
          </PermissionsProvider>
          </OfertasProvider>
        </NegociosProvider>
    </AuthProvider>
  )
}

const App = () => {



  // const { status } = useContext( AuthContext );

  return (
    <NavigationContainer>
      <AppState>
        <MyDrawer />
        {/* <Navigator /> */}
        </AppState>
    </NavigationContainer>    
  );
}

export default App;

