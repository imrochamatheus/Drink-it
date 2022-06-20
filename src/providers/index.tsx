import { ChakraProvider } from "@chakra-ui/react";
import { DrinksProvider } from "./DrinksProvider";
import { FC, ReactNode } from "react";
import DrawerProvider from "./DrawerProvider";
import { theme } from "../styles/theme";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProviders: FC<AppProviderProps> = ({
  children,
}: AppProviderProps) => (
  <DrinksProvider>
    <DrawerProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </DrawerProvider>
  </DrinksProvider>
);
