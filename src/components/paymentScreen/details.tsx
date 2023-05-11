"use client";
import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  Select,
  SimpleGrid,
  GridItem,
  Button,
  Checkbox,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

const details = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  return (
    <VStack w="full" h="full" p="10" spacing="10" alignItems="flex-start">
      <VStack spacing="3" alignItems="flex-start">
        <Heading size="2xl">Seus dados</Heading>
        <Text>Se voce ja criou uma conta, clique aqui!</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Nome</FormLabel>
            <Input placeholder="vitinhodev"></Input>
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Sobrenome</FormLabel>
            <Input placeholder="sousa silva"></Input>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Endereco</FormLabel>
            <Input placeholder="Rua dos noia numero 420"></Input>
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Cidade</FormLabel>
            <Input placeholder="Monte Azul Pauslita"></Input>
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Pais</FormLabel>
            <Select>
              <option value="br">BOSTIL!</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox defaultChecked>Shio to billing</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button size="lg" w="full">
            Fechar pedido
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default details;
