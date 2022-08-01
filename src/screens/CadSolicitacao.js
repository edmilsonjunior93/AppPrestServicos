import { Box, Center, CheckIcon, Select, View } from 'native-base';
import React from 'react';

const CadSolicitacao = () => {
  const [categoria, setCategoria] = React.useState('');
  const [service, setService] = React.useState('');
  return (
    <Center>
      <Box w="3/4" maxW="300">
        <Select
          selectedValue={categoria}
          minWidth="200"
          accessibilityLabel="Escolha a Categoria"
          placeholder="Escolha a Categoria"
          _selectedItem={{
            bg: 'teal.600',
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(itemValue) => setService(itemValue)}
        >
          <Select.Item label="teste" value="teste" />
        </Select>
      </Box>
      if (categoria != (''))
      {
        <Select
          selectedValue={service}
          minWidth="200"
          accessibilityLabel="Escolha o Tipo de Serviço"
          placeholder="Escolha o Tipo de Serviço"
          _selectedItem={{
            bg: 'teal.600',
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(itemValue) => setService(itemValue)}
        >
          <Select.Item label="teste" value="teste" />
        </Select>
      }
    </Center>
  );
  

  return (
    <View>
      <Text>categoria tipo urgencia Descrição endereço contato</Text>
    </View>
  );
};

export default CadSolicitacao;
