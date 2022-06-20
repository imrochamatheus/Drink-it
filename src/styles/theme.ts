import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    black: {
      500: "#333333",
    },
    yellow: {
      500: "#ffcc00",
    },
    white: {
      500: "#fafafa",
    },
    brown: "#47352b",
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
});
