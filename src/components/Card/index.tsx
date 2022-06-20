import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Stack,
  Image,
  Tooltip,
} from "@chakra-ui/react";

import { FC, MouseEvent, useCallback } from "react";
import { useDrinks } from "../../providers/DrinksProvider";
import { useDrawer } from "../../providers/DrawerProvider";

interface CardProps {
  strDrink: string;
  strDrinkThumb?: string;
  idDrink: string;
}

const Card: FC<CardProps> = ({ strDrink, strDrinkThumb, idDrink }) => {
  const { onOpen, setData } = useDrawer();
  const { getDetails } = useDrinks();

  const handleClick = useCallback(
    (event: MouseEvent | TouchEvent): void => {
      (async () => {
        const drinkInfos = await getDetails(idDrink);

        setData(drinkInfos);
        onOpen();
      })();
    },
    [getDetails, onOpen, setData, idDrink]
  );

  return (
    <Center pt={10} pb={12} onClick={handleClick} cursor="pointer">
      <Tooltip label={strDrink}>
        <Box
          border="1px solid rgba(0, 0, 0, 0.2)"
          borderTop="none"
          p={6}
          w={"230px"}
          bg={useColorModeValue("white.500", "gray.800")}
          boxShadow={"lg"}
          rounded={"lg"}
          borderRadius="0 0 8px 8px"
          pos={"relative"}
          zIndex={1}
          role={"group"}
        >
          <Box rounded={"lg"} mt={-12} pos={"relative"} height={"180px"}>
            <Image
              borderRadius="full"
              height={180}
              width={282}
              objectFit={"cover"}
              src={strDrinkThumb}
              boxShadow="lg"
              transform="scale(0.98)"
              _groupHover={{ transform: "scale(1)" }}
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Heading
              fontSize={"md"}
              fontFamily={"body"}
              fontWeight={300}
              noOfLines={1}
              color="brown"
            >
              {strDrink}
            </Heading>
          </Stack>
        </Box>
      </Tooltip>
    </Center>
  );
};

export default Card;
