import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import CadUser from './src/screens/CadUser';
import CadSolicitacao from './src/screens/CadSolicitacao';
import CadPrest from './src/screens/CadPrest';
import PerfilUser from './src/screens/PerfilUser';
import PerfilPrest from './src/screens/PerfilPrest';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CadUser" component={CadUser} />
          <Stack.Screen name="CadSolicitacao" component={CadSolicitacao} />
          <Stack.Screen name="CadPrest" component={CadPrest} />
          <Stack.Screen name="PerfilUser" component={PerfilUser} />
          <Stack.Screen name="PerfilPrest" component={PerfilPrest} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
