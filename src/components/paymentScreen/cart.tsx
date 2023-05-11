"use client";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import {
  Heading,
  VStack,
  Text,
  Button,
  Stack,
  Image,
  HStack,
  AspectRatio,
  Divider,
  Flex,
  useColorMode,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";

import React from "react";

const cart = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { toggleColorMode } = useColorMode();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const secondaryTextColor = useColorModeValue("gray.600", "gray.400");
  console.log("bg", bgColor);
  return (
    <VStack
      bgColor={bgColor}
      w="full"
      h="full"
      p="10"
      spacing="10"
      alignItems="flex-start"
    >
      <VStack spacing="3" alignItems="flex-start">
        <Heading size="2xl">Suas compras</Heading>
        <Text>Volte sempre, linda!</Text>
        <IconButton
          variant="outline"
          aria-label="butao"
          icon={bgColor === "gray.50" ? <SunIcon /> : <MoonIcon />}
          colorScheme="black"
          onClick={toggleColorMode}
        />
      </VStack>
      <HStack spacing={6} alignItems="center" w="full">
        <Flex bgColor="black" w="100px" h="70px"></Flex>
        <Stack
          margin="0"
          spacing="0"
          w="full"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <VStack w="full" spacing={0} alignItems="flex-start">
            <Heading size="md">Penn board</Heading>
            <Text>777TENIS23</Text>
          </VStack>
          <Heading size="sm" textAlign="end">
            R$350,00
          </Heading>
        </Stack>
      </HStack>
      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack spacing="4" justifyContent="space-between" w="full">
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Heading size="sm">R$120,00</Heading>
        </HStack>
        <HStack spacing="4" justifyContent="space-between" w="full">
          <Text color={secondaryTextColor}>Frete</Text>
          <Heading size="sm">R$120,00</Heading>
        </HStack>
        <HStack spacing="4" justifyContent="space-between" w="full">
          <Text color={secondaryTextColor}>taxas</Text>
          <Heading size="sm">R$120,00</Heading>
        </HStack>
        <Divider />
        <HStack spacing="4" justifyContent="space-between" w="full">
          <Text color={secondaryTextColor}>Total</Text>
          <Heading size="md">R$5440,00</Heading>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default cart;
