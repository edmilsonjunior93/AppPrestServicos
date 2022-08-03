import React from 'react';
import { Button, Center, Input, VStack } from 'native-base';

const CadUser = ({ navigation }) => {
  return (
    <VStack space={3} my="20">
      <Center>
        <Input placeholder="E-mail" w="75%" maxWidth="300px" />
      </Center>
      <Center>
        <Input placeholder="Celular" w="75%" maxWidth="300px" />
      </Center>
      <Center>
        <Input placeholder="Nome" w="75%" maxWidth="300px" />
      </Center>
      <Center>
        <Button onPress={() => navigation.navigate('PerfilUser')}>
          Cadastrar
        </Button>
      </Center>
    </VStack>
  );
};

export default CadUser;
