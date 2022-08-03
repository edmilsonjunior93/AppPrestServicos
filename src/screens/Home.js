import { Button, Center, VStack } from 'native-base';
import React from 'react';

const Home = ({ navigation }) => {
  return (
    <VStack space={3} justifyContent="center" mt="20">
      <Center p="20">
        <Button onPress={() => navigation.navigate('CadUser')}>Cliente</Button>
      </Center>
      <Center p="20">
        <Button onPress={() => navigation.navigate('CadPrest')}>
          Prestador de Serviços
        </Button>
      </Center>
    </VStack>
  );
};

export default Home;
