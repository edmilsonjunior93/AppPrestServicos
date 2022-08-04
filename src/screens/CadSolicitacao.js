import {
  Box,
  Button,
  CheckIcon,
  Input,
  Select,
  Text,
  TextArea,
  VStack,
} from 'native-base';
import React, { useState } from 'react';
import Solicitacao from '../data/Solicitacao';

const CadSolicitacao = ({ route, navigation }) => {
  const [solicitacao, setSolicitacao] = useState(
    route.params ? route.params : {},
  );
  return (
    <VStack space={4} alignItems="center" mt="100px">
      <Box w="90%">
        <Select
          selectedValue={solicitacao.categoria}
          minWidth="200"
          accessibilityLabel="Escolha a Categoria"
          placeholder="Escolha a Categoria"
          _selectedItem={{
            bg: 'teal.600',
            endIcon: <CheckIcon size="5" />,
          }}
          onValueChange={(categoria) =>
            setSolicitacao({ ...solicitacao, categoria })
          }
        >
          <Select.Item label="teste" value="teste" />
        </Select>
      </Box>
      <Box w="90%">
        <Select
          selectedValue={solicitacao.servico}
          minWidth="200"
          accessibilityLabel="Escolha o Tipo de Serviço"
          placeholder="Escolha o Tipo de Serviço"
          _selectedItem={{
            bg: 'teal.600',
            endIcon: <CheckIcon size="5" />,
          }}
          onValueChange={(servico) =>
            setSolicitacao({ ...solicitacao, servico })
          }
        >
          <Select.Item label="teste" value="teste" />
        </Select>
      </Box>
      <Box w="90%">
        <Select
          selectedValue={solicitacao.urgencia}
          minWidth="200"
          accessibilityLabel="Escolha o Tipo de Serviço"
          placeholder="Escolha o Tipo de Serviço"
          _selectedItem={{
            bg: 'teal.600',
            endIcon: <CheckIcon size="5" />,
          }}
          onValueChange={(urgencia) =>
            setSolicitacao({ ...solicitacao, urgencia })
          }
        >
          <Select.Item label="teste" value="teste" />
        </Select>
      </Box>
      <Box>
        <TextArea
          h={20}
          placeholder="Text Area Placeholder"
          w="90%"
          value={solicitacao.descricao}
          onChangeText={(descricao) =>
            setSolicitacao({ ...solicitacao, descricao })
          }
        />
      </Box>
      <Box alignItems="center">
        <Input
          placeholder="Digite seu Endereço"
          w="90%"
          value={solicitacao.endereco}
          onChangeText={(endereco) =>
            setSolicitacao({ ...solicitacao, endereco })
          }
        />
      </Box>
      <Box alignItems="center">
        <Input
          placeholder="Digite seu telefone para contato"
          w="90%"
          onChangeText={(telefone) =>
            setSolicitacao({ ...solicitacao, telefone })
          }
          value={solicitacao.telefone}
        />
      </Box>
      <Box>
        <Button onPress={() => console.warn('Salvo')}>Salvar</Button>
      </Box>
    </VStack>
  );
};

export default CadSolicitacao;
