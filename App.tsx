import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { Navigator } from './src/navigators/Navigator';
import { MyDrawer } from './src/navigators/Drawer';
import { Text, View } from 'react-native';

export default function App() {

  return (
    <NavigationContainer>
        <MyDrawer />
        {/* <Navigator /> */}
    </NavigationContainer>
    // <View>
    //   <Text>APPSEMPRO</Text>
    // </View>
    
  );
}

