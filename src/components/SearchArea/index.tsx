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

import bgDrinks from "../../assets/img/background-drinks.webp";

import { ChangeEvent, useState } from "react";
import { Search2Icon } from "@chakra-ui/icons";
import { useDrinks } from "../../providers/DrinksProvider";
import { KeyboardEvent } from "react";

export default function SearchArea() {
  const { getByName } = useDrinks();
  const [inputValue, setInputValue] = useState<string>("");

  const handleSearchClick = () => {
    getByName(inputValue);
    setInputValue("");
  };

  const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      getByName(inputValue);

      setInputValue("");
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;

    setInputValue(target.value);
  };

  return (
    <Box>
      <Container
        maxW={"100%"}
        backgroundImage={`url(${bgDrinks})`}
        borderRadius="0 0 80px 0"
        bgSize="cover"
        bgRepeat="no-repeat"
        position="relative"
        px={0}
      >
        <Stack
          w="100%"
          backdropFilter="auto"
          backdropBrightness="60%"
          borderRadius="0 0 80px 0"
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 5 }}
          py={{ base: 20, md: 24 }}
        >
          <Center>
            <Heading
              fontWeight={400}
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
              maxW={"3xl"}
              color={"white"}
            >
              Faça você mesmo os seus drinks favoritos <br />
              <Text as={"span"} color={"white"}>
                em casa
              </Text>
            </Heading>
          </Center>
          <Center px={4}>
            <InputGroup size="md" maxW="3xl">
              <Input
                pr="2rem"
                type="text"
                placeholder="Pesquise por um drink"
                value={inputValue}
                bg="white"
                onKeyDown={handleOnKeyDown}
                onChange={handleChange}
              />
              <InputRightElement width="4.5rem">
                <Button
                  aria-label="Search"
                  h="1.75rem"
                  size="sm"
                  mr={-5}
                  onClick={handleSearchClick}
                >
                  <Search2Icon />
                </Button>
              </InputRightElement>
            </InputGroup>
          </Center>
        </Stack>
      </Container>
    </Box>
  );
}
