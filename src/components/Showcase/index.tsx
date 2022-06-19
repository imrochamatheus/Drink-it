import Card from "../Card";
import { FC } from "react";

import { useDrinks } from "../../providers/DrinksProvider";
import { Center, Wrap, WrapItem } from "@chakra-ui/react";

interface CardProps {
  strDrink: string;
  strDrinkThumb?: string;
  idDrink: string;
}

const Showcase: FC = () => {
  const { drinks } = useDrinks();

  return (
    <Center bg="white.500">
      <Wrap direction={{ base: "column", md: "row" }} justify="center">
        {drinks &&
          drinks.map(({ strDrink, strDrinkThumb, idDrink }: CardProps) => (
            <WrapItem key={idDrink}>
              <Card {...{ strDrink, strDrinkThumb, idDrink }} />
            </WrapItem>
          ))}
      </Wrap>
    </Center>
  );
};

export default Showcase;
