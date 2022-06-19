import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
  Center,
  Text,
  Divider,
  Stack,
  Box,
  ListIcon,
  ListItem,
  List,
} from "@chakra-ui/react";
import { FC } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import { useModal } from "../../providers/ModalProvider";

const DrinkModal: FC<{}> = () => {
  const { isOpen, onClose, infos, measures, ingredients } = useModal();

  return (
    infos && (
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent h="auto">
          <ModalHeader>
            {infos.strDrink}
            <Text fontSize="xs">{infos.strCategory}</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src={infos.strDrinkThumb}
              />
            </Center>
            <Divider py={2} />
            <Stack direction="row" py={4}>
              <Box>
                <Text>Ingredient:</Text>
                <List>
                  {ingredients.map((ingredient: string, i: number) => (
                    <ListItem key={i}>
                      <ListIcon as={ArrowForwardIcon} color="green.500" />
                      {ingredient}
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Divider orientation="vertical" />
              <Box>
                <Text>Measure:</Text>
                <List display="column">
                  {measures.map((measure: string, i: number) => (
                    <ListItem key={i}>{measure}</ListItem>
                  ))}
                </List>
              </Box>
            </Stack>
            <Text fontSize="lg">Prepare:</Text>
            <Text py={2}>{infos.strInstructions}</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Fechar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
  );
};

export default DrinkModal;
