import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { useDisclosure } from "@chakra-ui/react";

interface ModalProviderProps {
  children: ReactNode;
}

interface DrinkInfos {
  strDrink: string;
  strCategory?: string;
  strInstructions?: string;
  strDrinkThumb?: string;
}

interface ModalContextData {
  isOpen: boolean;
  infos: DrinkInfos;
  setData: (data: DrinkInfos[]) => void;
  onClose: () => void;
  onOpen: () => void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const ModalProvider: FC<ModalProviderProps> = ({
  children,
}: ModalProviderProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [infos, setInfos] = useState<DrinkInfos>({} as DrinkInfos);

  const setData = useCallback((data: DrinkInfos[]): void => {
    setInfos(data[0]);
  }, []);

  return (
    <ModalContext.Provider value={{ isOpen, onOpen, onClose, setData, infos }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);

export default ModalProvider;
