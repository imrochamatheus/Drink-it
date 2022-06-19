import { ChakraProvider } from "@chakra-ui/react";
import { DrinksProvider } from "./DrinksProvider";
import { ReactNode } from "react";
import ModalProvider from "./ModalProvider";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProviderProps) => (
  <DrinksProvider>
    <ModalProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </ModalProvider>
  </DrinksProvider>
);
