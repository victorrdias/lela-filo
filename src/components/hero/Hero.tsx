import {
  Flex,
  Heading,
  HStack,
  VStack,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <HStack h={{ base: "auto", md: "100vh" }}>
      <VStack
        h="100%"
        w="40%"
        bgColor="primary.50"
        alignItems="flex-start"
        color="white"
        p={[10, 20, 50]}
        justifyContent="space-between"
        alignContent="space-between"
      >
        <HStack justifyContent="space-between" w="100%">
          <Heading>Lela Filo</Heading>
          <Text margin="0">Produtos</Text>
        </HStack>
        <VStack spacing={10} alignItems="flex-start">
          <Heading>Quem somos</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </Text>
          <Button w="full" variant="primary">
            Conheca nossos produtos
          </Button>
        </VStack>
      </VStack>
      <Flex h="100%" w="60%" bgColor="accent.500">
        <Image src="hero-img.png" objectFit="fill" alt="foto" />
      </Flex>
    </HStack>
  );
};

export default Hero;
