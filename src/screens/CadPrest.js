import React from 'react';
import { Button, Center, Input, TextArea, VStack } from 'native-base';

const CadastroPrestadores = () => {
  return (
    <VStack space={3} safeArea>
      <Center>
        <Input
          placeholder="Nome Completo ou Razão Social"
          w="75%"
          maxWidth="300px"
        />
      </Center>
      <Center>
        <Input placeholder="CPF ou CNPJ" w="75%" maxWidth="300px" />
      </Center>
      <Center>
        <Input placeholder="E-mail" w="75%" maxWidth="300px" />
      </Center>
      <Center>
        <Input placeholder="Celular" w="75%" maxWidth="300px" />
      </Center>
      <Center>
        <Input placeholder="Endereço Completo" w="75%" maxWidth="300px" />
      </Center>
      <Center>
        <Input placeholder="Especialidades" w="75%" maxWidth="300px" />
      </Center>
      <Center>
        <TextArea h={20} placeholder="Anuncio" w="75%" maxW="300" />
      </Center>
      <Center>
        <Button>Cadastrar</Button>
      </Center>
    </VStack>
  );
};

export default CadastroPrestadores;
