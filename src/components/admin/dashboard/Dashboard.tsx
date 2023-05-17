import { FirebaseCtx } from "@/config/FirebaseCtx";
import { Main } from "@/layout/Main";
import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Stack,
  Select,
  Button,
  FormErrorMessage,
  Textarea,
  Spinner,
  Toast,
  useToast,
} from "@chakra-ui/react";
import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import React, { useContext, useMemo, useState } from "react";
import { useForm } from "react-hook-form";

export type RegisterVasosDTO = {
  nome: string;
  status: string;
  informacoes: string;
  preco: string;
};

const Dashboard = () => {
  const { db } = useContext(FirebaseCtx);
  const [loading, setLoading] = useState<Boolean>(false);
  const toast = useToast();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      categoria: "plantas",
      nome: "",
      status: "",
      informacoes: "",
      preco: "",
    },
  });

  const options = ["vasos", "plantas", "eventos"];

  const categoriaAtual = watch("categoria");

  // const categoriaDecider = () => {
  //   if (categoriaAtual === "plantas") {
  //     return "plantas";
  //   } else if (categoriaAtual === "vasos") {
  //     return "vasos";
  //   } else categoriaAtual === "eventos";
  //   return "eventos";
  // };

  const categoriaDecider = () => {
    switch (categoriaAtual) {
      case "plantas":
      case "vasos":
        return categoriaAtual;
      default:
        return "eventos";
    }
  };

  const collectionDecider = () => {
    return categoriaAtual === "eventos" ? "events" : "products";
  };

  const deciderCategory = categoriaDecider();
  const deciderCollection = collectionDecider();

  const onSubmit = async (data: RegisterVasosDTO) => {
    console.log("data", data);
    const productName = data.nome;
    const collectionRef = collection(
      db,
      `${deciderCollection}/${deciderCategory}/${productName}`
    );

    try {
      const docRef = doc(collectionRef);

      const uid = docRef.id;
      console.log("uid", uid);

      await setDoc(docRef, { uid, ...data });
      toast({
        title: "Cadastrado com sucesso!",
        status: "success",
      });
      if (!uid) {
        toast({
          title: "Error sending form data!",
          status: "error",
        });
        throw new Error("error sending form data");
      }
      reset();
      console.log("top!");
    } catch (error: any) {
      toast({
        title: "Ops!",
        status: "error",
      });
      console.error("Error subtting form:", error);
    }
  };
  console.log(categoriaAtual);

  useMemo(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 500);
  }, [categoriaAtual]);

  return (
    <Main alignItems="flex-start">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          bgColor="green.100"
          p="10"
          spacing="10"
          minW="50vw"
          minH="90vh"
          border="1px"
        >
          {loading ? (
            <Spinner></Spinner>
          ) : (
            <>
              <Heading>Cadastre {categoriaAtual}</Heading>
              <Text>QUERO UMA INFO AQUI</Text>
              <FormControl pb="8">
                <FormLabel>Categoria</FormLabel>
                <Select {...register("categoria", { required: true })}>
                  {options.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </Select>
              </FormControl>
              {categoriaAtual !== "eventos" ? (
                <>
                  <FormControl>
                    <FormLabel>Nome do produto</FormLabel>
                    <Input
                      type="text"
                      {...register("nome", { required: true })}
                    />

                    <FormErrorMessage>
                      {errors.nome && <span color="red">nome is required</span>}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Status</FormLabel>
                    <Input
                      type="text"
                      {...register("status", { required: true })}
                    />
                    <FormErrorMessage>
                      {errors.status && (
                        <span color="red">status is required</span>
                      )}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl>
                    <FormLabel>Informacoes adicionais</FormLabel>
                    <Textarea
                      variant="filled"
                      bgColor="green.50"
                      minH="100px"
                      {...register("informacoes", { required: true })}
                    ></Textarea>

                    <FormErrorMessage>
                      {errors.informacoes && (
                        <span color="red">information is required</span>
                      )}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl>
                    <FormLabel>Preco</FormLabel>
                    <Input
                      type="text"
                      {...register("preco", { required: true })}
                    />
                    <FormErrorMessage>
                      {errors.preco && (
                        <span color="red">preco is required</span>
                      )}
                    </FormErrorMessage>
                  </FormControl>
                </>
              ) : (
                <FormControl>
                  <FormLabel>Nome</FormLabel>
                  <Input
                    type="text"
                    {...register("nome", { required: true })}
                  />
                  <FormErrorMessage>
                    {errors.nome && <span color="red">preco is required</span>}
                  </FormErrorMessage>
                </FormControl>
              )}
              <Button
                isDisabled={isSubmitting}
                type="submit"
                bgColor="accent.600"
              >
                CADASTRAR
              </Button>
            </>
          )}
        </Stack>
      </form>
    </Main>
  );
};

export default Dashboard;
