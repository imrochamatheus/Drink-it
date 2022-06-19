import Card from "../Card";
import { FC } from "react";

import { useDrinks } from "../../providers/DrinksProvider";
import { Center, HStack, Box, Text } from "@chakra-ui/react";

interface CardProps {
  strDrink: string;
  strDrinkThumb?: string;
  idDrink: string;
}

const Showcase: FC = () => {
  const { drinks, searchParameter } = useDrinks();

  return (
    <Box px={4} pt={4} bg="white.500">
      <Text fontSize="2xl">{searchParameter}</Text>
      <Center>
        <HStack
          direction={{ base: "column", md: "row" }}
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
          {drinks &&
            drinks.map(({ strDrink, strDrinkThumb, idDrink }: CardProps) => (
              <Box key={idDrink}>
                <Card key={idDrink} {...{ strDrink, strDrinkThumb, idDrink }} />
              </Box>
            ))}
        </HStack>
      </Center>
    </Box>
  );
};

export default Showcase;
