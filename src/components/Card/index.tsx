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
import { useModal } from "../../providers/ModalProvider";

interface CardProps {
  strDrink: string;
  strDrinkThumb?: string;
  idDrink: string;
}

const Card: FC<CardProps> = ({ strDrink, strDrinkThumb, idDrink }) => {
  const { onOpen, setData } = useModal();
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
    <Center pt={10} pb={4} onClick={handleClick} cursor="pointer">
      <Tooltip label={strDrink}>
        <Box
          role={"group"}
          p={6}
          w={"230px"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"lg"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
          transform="scale(0.98)"
          _hover={{
            transform: "scale(1)",
          }}
        >
          <Box rounded={"lg"} mt={-12} pos={"relative"} height={"180px"}>
            <Image
              borderRadius="full"
              height={180}
              width={282}
              objectFit={"cover"}
              src={strDrinkThumb}
              boxShadow="lg"
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Heading
              fontSize={"md"}
              fontFamily={"body"}
              fontWeight={500}
              noOfLines={1}
              color="gray.500"
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
