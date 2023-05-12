"use client";
import {
  Flex,
  Heading,
  HStack,
  VStack,
  Text,
  Button,
  Image,
  Container,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";
import Header from "../header/Header";

const Hero = () => {
  const router = useRouter();

  return (
    <Container maxW="container.xl" p="0">
      <HStack
        h={{ base: "auto", md: "100vh" }}
        justifyContent="space-between"
        alignItems="space-between"
      >
        <VStack
          zIndex="1"
          py={[10, 20, 30]}
          pr="10"
          h="100%"
          w="40%"
          minW={{ md: "50vw", lg: "40vw" }}
          bgColor="primary.50"
          alignItems="flex-start"
          color="white"
          justifyContent="space-between"
          alignContent="space-between"
        >
          <Header />
          <VStack spacing={10} alignItems="flex-start">
            <Heading>Quem somos</Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </Text>
            <Button
              onClick={() => router.push("/produtos")}
              w="full"
              variant="primary"
            >
              Conheca nossos produtos
            </Button>
          </VStack>
        </VStack>
        <Flex h="100%" w="60%">
          <Image
            maxH="100vh"
            position="absolute"
            top="0"
            right="0"
            src="hero-img.png"
            objectFit="fill"
            alt="foto"
          />
        </Flex>
      </HStack>
    </Container>
  );
};

export default Hero;
