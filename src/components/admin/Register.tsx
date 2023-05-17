"use client";
import { FirebaseCtx } from "@/config/FirebaseCtx";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Stack,
  useColorMode,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { Auth, createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Grenze } from "next/font/google";

import React, { useContext } from "react";
import { useForm } from "react-hook-form";

export type RegisterFormDTO = {
  email: string;
  password: string;
};

const RegisterForm = () => {
  const toast = useToast();
  //const { auth } = useContext(FirebaseCtx);
  const auth: Auth = getAuth();

  // const { toggleColorMode } = useColorMode();

  // const secondaryTextColor = useColorModeValue("whiteAlpha.900", "gray.400");

  // const bgColor = useColorModeValue("green.50", "whiteAlpha.50");
  // const containerColor = useColorModeValue("green.100", "whiteAlpha.100");

  const {
    register,
    handleSubmit,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: RegisterFormDTO) => {
    try {
      const { email, password } = data;
      await createUserWithEmailAndPassword(auth, email, password).then(
        (res) => {
          toast({
            status: "success",
            title: "foi q foi",
          });
        }
      );
    } catch (error: any) {
      toast({
        status: "error",
        title: "deu bosta viado",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack
        w="100vw"
        bgColor="green.50"
        alignItems="center"
        h="100vh"
        justifyContent="center"
        px="4"
      >
        <Stack
          p="10"
          bgColor="green.100"
          spacing="10"
          h="max-content"
          alignItems="center"
          minW={{ md: "34rem" }}
          justifyContent="center"
        >
          <Heading>Faca seu cadastro admin</Heading>
          <FormControl isInvalid={Boolean(errors.email)}>
            <FormLabel py="2">Email</FormLabel>
            <Input
              variant="filled"
              type="email"
              {...register("email", { required: true })}
            ></Input>

            <FormErrorMessage>
              {errors.email && <span color="red">Email is required</span>}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.password)}>
            <FormLabel py="2">Senha</FormLabel>
            <Input
              variant="filled"
              type="password"
              {...register("password", { required: true })}
            ></Input>
            <FormErrorMessage>
              {errors.password && <span>password is required</span>}
            </FormErrorMessage>
          </FormControl>
          <Flex py="4" w="100%">
            <Button
              w="100%"
              bgColor="accent.600"
              type="submit"
              isDisabled={isSubmitting}
            >
              CADASTRAR
            </Button>
          </Flex>
        </Stack>
      </Stack>
    </form>
  );
};

export default RegisterForm;
