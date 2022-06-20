import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Text,
  Box,
  Image,
  Center,
  Divider,
  Stack,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useDrawer } from "../../providers/DrawerProvider";
import { FC } from "react";

const DrinkDrawer: FC<{}> = () => {
  const { isOpen, onClose, infos, measures, ingredients } = useDrawer();

  return (
    <>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            {infos.strDrink}
            <Text fontSize="xs">{infos.strCategory}</Text>
          </DrawerHeader>
          <DrawerBody>
            <Center>
              <Image
                rounded={"full"}
                width="full"
                objectFit={"cover"}
                src={infos.strDrinkThumb}
              />
            </Center>
            <Divider py={4} />
            <Stack direction="row" py={4}>
              <Box>
                <Text fontWeight={400}>Ingredient:</Text>
                <List>
                  {ingredients.map((ingredient: string, i: number) => (
                    <ListItem key={i} fontWeight={300}>
                      <ListIcon as={ArrowForwardIcon} color="green.500" />
                      {ingredient}
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Divider orientation="vertical" />
              <Box>
                <Text fontWeight={400}>Measure:</Text>
                <List display="column">
                  {measures.map((measure: string, i: number) => (
                    <ListItem key={i} fontWeight={300}>
                      {measure}
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Stack>
            <Text fontSize="lg">Prepare:</Text>
            <Text py={2} fontWeight={300}>
              {infos.strInstructions}
            </Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrinkDrawer;
