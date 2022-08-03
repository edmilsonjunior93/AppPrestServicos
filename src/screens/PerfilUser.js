import {
  Avatar,
  Box,
  FlatList,
  HStack,
  Pressable,
  Spacer,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import Solicitacao from '../data/Solicitacao';

const PerfilUser = () => {
  return (
    <Box safeArea>
      <FlatList
        data={Solicitacao}
        renderItem={({ item }) => (
          <Pressable onPress={() => console.warn("I'm Pressed")}>
            <Box
              borderBottomWidth="1"
              _dark={{
                borderColor: 'muted.50',
              }}
              borderColor="muted.800"
              pl={['2', '4']}
              pr={['2', '5']}
              py="2"
            >
              <HStack space={[2, 3]} justifyContent="space-between">
                <VStack>
                  <Text
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    color="coolGray.800"
                    bold
                  >
                    {item.categoria}
                  </Text>
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: 'warmGray.200',
                    }}
                  >
                    {item.servico}
                  </Text>
                </VStack>
                <Spacer />
                <Text
                  fontSize="xs"
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  color="coolGray.800"
                  alignSelf="flex-start"
                >
                  {item.urgencia}
                </Text>
              </HStack>
            </Box>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
};

export default PerfilUser;
