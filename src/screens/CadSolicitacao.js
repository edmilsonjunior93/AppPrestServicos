import {
  Box,
  Button,
  CheckIcon,
  Input,
  Select,
  TextArea,
  VStack,
} from 'native-base';
import React, { useState } from 'react';

const CadSolicitacao = () => {
  const [categoria, setCategoria] = useState('');
  const [service, setService] = useState('');
  const [urgencia, setUrgencia] = useState('');
  const [descricao, setDescricao] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  return (
    <VStack space={4} alignItems="center" safeArea>
      <Box w="90%">
        <Select
          selectedValue={categoria}
          minWidth="200"
          accessibilityLabel="Escolha a Categoria"
          placeholder="Escolha a Categoria"
          _selectedItem={{
            bg: 'teal.600',
            endIcon: <CheckIcon size="5" />,
          }}
          onValueChange={(itemValue) => setCategoria(itemValue)}
        >
          <Select.Item label="teste" value="teste" />
        </Select>
      </Box>
      {categoria != '' && (
        <Box w="90%">
          <Select
            selectedValue={service}
            minWidth="200"
            accessibilityLabel="Escolha o Tipo de Serviço"
            placeholder="Escolha o Tipo de Serviço"
            _selectedItem={{
              bg: 'teal.600',
              endIcon: <CheckIcon size="5" />,
            }}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label="teste" value="teste" />
          </Select>
        </Box>
      )}
      {service != '' && (
        <Box w="90%">
          <Select
            selectedValue={urgencia}
            minWidth="200"
            accessibilityLabel="Escolha o Tipo de Serviço"
            placeholder="Escolha o Tipo de Serviço"
            _selectedItem={{
              bg: 'teal.600',
              endIcon: <CheckIcon size="5" />,
            }}
            onValueChange={(itemValue) => setUrgencia(itemValue)}
          >
            <Select.Item label="teste" value="teste" />
          </Select>
        </Box>
      )}

      {urgencia != '' && (
        <Box>
          <TextArea
            h={20}
            placeholder="Text Area Placeholder"
            w="90%"
            value={descricao}
            onChangeText={setDescricao}
          />
        </Box>
      )}
      {descricao != '' && (
        <Box alignItems="center">
          <Input
            placeholder="Digite seu Endereço"
            w="90%"
            value={endereco}
            onChangeText={setEndereco}
          />
        </Box>
      )}
      {endereco != '' && (
        <Box alignItems="center">
          <Input
            placeholder="Digite seu telefone para contato"
            w="90%"
            onChangeText={setTelefone}
            value={telefone}
          />
        </Box>
      )}
      {telefone != '' && (
        <Box>
          <Button onPress={() => console.log('hello world')}>Click Me</Button>
        </Box>
      )}
    </VStack>
  );
};

export default CadSolicitacao;
