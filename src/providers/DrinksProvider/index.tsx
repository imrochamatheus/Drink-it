import { AxiosError, AxiosResponse } from "axios";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { api } from "../../services/api";

interface DrinksProviderProps {
  children: ReactNode;
}

interface DrinksContextData {
  categories: Array<any>;
}

const DrinksContext = createContext<DrinksContextData>({} as DrinksContextData);

const DrinksProvider = ({ children }: DrinksProviderProps) => {
  const [categories, setCategories] = useState<any>([]);

  useEffect(() => {
    api
      .get("/list.php?c=list")
      .then((response: AxiosResponse) => setCategories(response.data.drinks))
      .catch((error: AxiosError) => console.log(error));
  }, []);

  return (
    <DrinksContext.Provider value={{ categories }}>
      {children}
    </DrinksContext.Provider>
  );
};

export const useDrinks = () => useContext(DrinksContext);

export { DrinksProvider };
