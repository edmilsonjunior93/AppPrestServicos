import React from 'react';
import { NativeBaseProvider } from 'native-base';
import Home from './src/screens/Home';
import CadUser from './src/screens/CadUser';
import CadSolicitacao from './src/screens/CadSolicitacao';

export default function App() {
  return (
    <NativeBaseProvider>
      <CadSolicitacao />
    </NativeBaseProvider>
  );
}
