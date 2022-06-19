import Card from "../Card";
import { FC } from "react";

import { useDrinks } from "../../providers/DrinksProvider";
import { Center, HStack, Box, Text, Heading } from "@chakra-ui/react";
import Loader from "../Loader";

import * as drinkLoader from "../../assets/looties/drink-loader.json";
import * as noResults from "../../assets/looties/no-results.json";

interface CardProps {
  strDrink: string;
  strDrinkThumb?: string;
  idDrink: string;
}

const Showcase: FC = () => {
  const { drinks, searchParameter, isLoading } = useDrinks();

  return (
    (drinks && (
      <Box px={4} pt={4} pb={2} bg="white.500">
        {!isLoading ? (
          <Box>
            <Text fontSize="2xl">{searchParameter}</Text>
            <Center>
              <HStack
                direction={{ base: "column", md: "row" }}
                justify={drinks.length < 2 ? "center" : "start"}
                w={"100%"}
                overflowX="auto"
                css={{
                  "&::-webkit-scrollbar": {
                    width: "0px",
                    height: "10px",
                  },
                  "&::-webkit-scrollbar-track": {
                    width: "6px",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    background: "#ffcc00",
                    borderRadius: "24px",
                  },
                }}
              >
                {drinks.map(
                  ({ strDrink, strDrinkThumb, idDrink }: CardProps) => (
                    <Box key={idDrink}>
                      <Card
                        key={idDrink}
                        {...{ strDrink, strDrinkThumb, idDrink }}
                      />
                    </Box>
                  )
                )}
              </HStack>
            </Center>
          </Box>
        ) : (
          <Loader width={150} animationData={drinkLoader} />
        )}
      </Box>
    )) || (
      <Box px={4} bg="white.500" py={{ base: 2, md: 24 }}>
        <Center>
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", md: "3xl" }}
            lineHeight={"110%"}
            maxW={"3xl"}
          >
            Nenhuma correspondência encontrada <br />
            <Text as={"span"} color={"white"}>
              <Loader width={150} animationData={noResults} />
            </Text>
          </Heading>
        </Center>
      </Box>
    )
  );
};

export default Showcase;
