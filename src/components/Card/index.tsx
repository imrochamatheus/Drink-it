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
    [getDetails, onOpen, setData]
  );

  return (
    <Center py={12} onClick={handleClick} cursor="pointer">
      <Tooltip label={strDrink}>
        <Box
          role={"group"}
          p={6}
          maxW={"280px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"230px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url(${strDrinkThumb})`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              src={strDrinkThumb}
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Heading
              fontSize={"md"}
              fontFamily={"body"}
              fontWeight={500}
              noOfLines={1}
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
