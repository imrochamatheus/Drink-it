import { AxiosError, AxiosResponse } from "axios";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  useCallback,
} from "react";
import { api } from "../../services/api";

interface Drink {
  strDrink: string;
  strDrinkThumb?: string;
  idDrink: string;
}

interface DrinksContextData {
  categories: Array<any>;
  drinks: Array<Drink>;
  getByCategory: any;
}

interface DrinksProviderProps {
  children: ReactNode;
}

const DrinksContext = createContext<DrinksContextData>({} as DrinksContextData);

const DrinksProvider = ({ children }: DrinksProviderProps) => {
  const [categories, setCategories] = useState<any>([]);
  const [drinks, setDrinks] = useState<any>([]);

  useEffect(() => {
    api
      .get("/list.php?c=list")
      .then((response: AxiosResponse) => setCategories(response.data.drinks))
      .catch((error: AxiosError) => console.log(error));

    api
      .get("/filter.php?c=cocktail")
      .then((response: AxiosResponse) => setDrinks(response.data.drinks))
      .catch((error: AxiosError) => console.log(error));
  }, []);

  const getByCategory = useCallback(async (category: string): Promise<void> => {
    try {
      const response: AxiosResponse = await api.get(
        `/filter.php?c=${category}`
      );
      const filteredDrinks: Array<Drink> = response.data.drinks;

      setDrinks(filteredDrinks);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <DrinksContext.Provider value={{ categories, drinks, getByCategory }}>
      {children}
    </DrinksContext.Provider>
  );
};

export const useDrinks = () => useContext(DrinksContext);

export { DrinksProvider };
