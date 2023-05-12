import {
  VStack,
  Flex,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Card,
} from "@chakra-ui/react";
import React from "react";
export interface SubheroCardProps {
  image: string;
  title: string;
  content: string;
}
const SubheroCard = ({ image, title, content }: SubheroCardProps) => {
  return (
    <>
      <Card maxW="300px">
        <VStack bgColor="primary.50">
          <Flex bgColor="white" w="300px" h="140px">
            {image}
          </Flex>
          <CardHeader px="0" alignItems="flex-start" w="100%">
            {title}
          </CardHeader>
          <CardBody px="0">{content}</CardBody>
          <CardFooter px="0" alignItems="flex-start" w="100%">
            <Button variant="link">Ver mais...</Button>
          </CardFooter>
        </VStack>
      </Card>
    </>
  );
};

export default SubheroCard;
