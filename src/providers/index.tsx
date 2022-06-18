import { ChakraProvider } from "@chakra-ui/react";
import { DrinksProvider } from "./DrinksProvider";
import { ReactNode } from "react";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProviderProps) => (
  <DrinksProvider>
    <ChakraProvider>{children}</ChakraProvider>
  </DrinksProvider>
);
