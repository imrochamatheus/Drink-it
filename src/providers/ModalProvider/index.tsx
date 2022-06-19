import { createContext, ReactNode, useContext } from "react";
import { useDisclosure } from "@chakra-ui/react";

interface ModalProviderProps {
  children: ReactNode;
}

interface ModalContextData {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const ModalProvider = ({ children }: ModalProviderProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ModalContext.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);

export default ModalProvider;
