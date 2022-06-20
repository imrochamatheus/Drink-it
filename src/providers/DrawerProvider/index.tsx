import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useDisclosure } from "@chakra-ui/react";

interface DrawerContextProps {
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
  measures: string[];
  ingredients: string[];
  onClose: () => void;
  onOpen: () => void;
  setData: (data: DrinkInfos[]) => void;
}

const DrawerContext = createContext<ModalContextData>({} as ModalContextData);

const DrawerProvider: FC<DrawerContextProps> = ({
  children,
}: DrawerContextProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [infos, setInfos] = useState<DrinkInfos>({} as DrinkInfos);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [measures, setMeasures] = useState<string[]>([]);

  const setData = useCallback((data: DrinkInfos[]): void => {
    setInfos(data[0]);
  }, []);

  useEffect(() => {
    if (infos) {
      const ingredients = Object.fromEntries(
        Object.entries(infos).filter((info) => {
          return (
            info[0].includes("Ingredient") && info[1] !== null && info[1] !== ""
          );
        })
      );
      const measures = Object.fromEntries(
        Object.entries(infos).filter((info) => {
          return (
            info[0].includes("Measure") && info[1] !== null && info[1] !== ""
          );
        })
      );

      setIngredients([...Object.values(ingredients)]);
      setMeasures([...Object.values(measures)]);
    }
  }, [infos]);

  return (
    <DrawerContext.Provider
      value={{ isOpen, onOpen, onClose, setData, infos, ingredients, measures }}
    >
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => useContext(DrawerContext);

export default DrawerProvider;
