"use client";

import Header from "@/components/header/Header";
import Cart from "@/components/paymentScreen/cart";
import Details from "@/components/paymentScreen/details";
import { Container, Flex } from "@chakra-ui/react";

export default function Payment() {
  return (
    <Container maxWidth="container.xl" p="0">
      <Header />
      <Flex
        direction={{ base: "column-reverse", md: "row" }}
        h={{ base: "auto", md: "100vh" }}
        py={[0, 10, 20]}
      >
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
}
