import { ChakraProvider } from "@chakra-ui/react";
import { DrinksProvider } from "./DrinksProvider";
import { ReactNode } from "react";
import ModalProvider from "./ModalProvider";
import { theme } from "../styles/theme";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProviderProps) => (
  <DrinksProvider>
    <ModalProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </ModalProvider>
  </DrinksProvider>
);
