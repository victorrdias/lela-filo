import { FirebaseCtx } from "@/config/FirebaseCtx";
import {
  VStack,
  Flex,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Card,
} from "@chakra-ui/react";
import { collection } from "firebase/firestore";
import React, { useContext } from "react";

export interface SubheroCardProps {
  image: string;
  title: string;
  content: string;
}

const SubheroCard = ({ image, title, content }: SubheroCardProps) => {
  return (
    <>
      <Card maxW="300px" left="0" border="none" boxShadow="none">
        <VStack bgColor="green.50">
          <Flex bgColor="white" w="100%" h="140px">
            {image}
          </Flex>
          <CardHeader px="0" alignItems="flex-start" w="100%">
            {title}
          </CardHeader>
          <CardBody padding="0">{content}</CardBody>
          <CardFooter px="0" alignItems="flex-start" w="100%">
            <Button variant="link">Ver mais...</Button>
          </CardFooter>
        </VStack>
      </Card>
    </>
  );
};

export default SubheroCard;
