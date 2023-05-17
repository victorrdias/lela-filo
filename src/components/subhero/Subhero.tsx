import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Flex,
  Heading,
  HStack,
  VStack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import SubheroCard from "./SubheroCard";

const Subhero = () => {
  return (
    <Container minH="900px" maxW="container.xl" p="0" gap="12">
      <HStack justifyContent="space-between" w="100%" py={[10, 20, 32]}>
        <Heading w="50%">
          Long heading is what you see here in this feature section
        </Heading>
        <Text maxW="50%">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
          quis viverra ornare, eros dolor interdum nulla.
        </Text>
      </HStack>
      <HStack gap="8">
        <SubheroCard
          title={"Vasos"}
          image={"zuru"}
          content={
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendiss varius enim in eros elementum tristique"
          }
        />
        <SubheroCard
          title={"Plantas"}
          image={"zuru"}
          content={
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendiss varius enim in eros elementum tristique"
          }
        />
        <SubheroCard
          title={"Eventos"}
          image={"zuru"}
          content={
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendiss varius enim in eros elementum tristique"
          }
        />
        <SubheroCard
          title={"Oficinas"}
          image={"zuru"}
          content={
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendiss varius enim in eros elementum tristique"
          }
        />
      </HStack>
    </Container>
  );
};

export default Subhero;
