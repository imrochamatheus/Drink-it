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
} from "@chakra-ui/react";
import { FC } from "react";

import { useModal } from "../../providers/ModalProvider";

const DrinkModal: FC<{}> = () => {
  const { isOpen, onClose, infos } = useModal();

  return (
    infos && (
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
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
            <Text py={2}>{infos.strInstructions}</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
  );
};

export default DrinkModal;
