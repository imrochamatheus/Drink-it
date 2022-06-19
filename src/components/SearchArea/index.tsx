// import Head from "next/head";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Center,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";

import { useState } from "react";
import { Search2Icon } from "@chakra-ui/icons";
import { useDrinks } from "../../providers/DrinksProvider";

export default function SearchArea() {
  const { getByName } = useDrinks();

  const [inputValue, setInputValue] = useState<string>("");

  return (
    <>
      <Container maxW={"100%"} bg="yellow.500">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 24 }}
        >
          <Center>
            <Heading
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
              maxW={"3xl"}
            >
              Faça você mesmo os seus drinks favoritos <br />
              <Text as={"span"} color={"white"}>
                em casa
              </Text>
            </Heading>
          </Center>
          <Center>
            <InputGroup size="md" maxW="3xl">
              <Input
                pr="2rem"
                type="text"
                placeholder="Pesquise por um drink"
                value={inputValue}
                bg="white"
                onChange={(e) => setInputValue(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button
                  aria-label="Search"
                  h="1.75rem"
                  size="sm"
                  mr={-5}
                  onClick={() => getByName(inputValue)}
                >
                  <Search2Icon />
                </Button>
              </InputRightElement>
            </InputGroup>
          </Center>
        </Stack>
      </Container>
    </>
  );
}
