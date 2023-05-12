import { HStack, Heading, Text, Container } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Container maxW="container.xl" p="0" top="0" justifyContent="flex-start">
      <HStack>
        <Heading minW="max-content" flexGrow="1">
          Lela Filo
        </Heading>
        <HStack gap="8" justifyContent="flex-end">
          <Text margin="0">Produtos</Text>
          <Text margin="0">Conta</Text>
        </HStack>
      </HStack>
    </Container>
  );
};

export default Header;
