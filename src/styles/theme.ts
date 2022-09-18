import { extendTheme, theme as ChakraTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      50: "#f6f6f7",
      300: "#9e9ea7",
      400: "#323B45",
    },
    red: {
      300: "#f51441",
    },
    green: {
      200: "#6CE98C",
      500: "#00BA75",
    },
    blue: {
      900: "#0F1923",
    },
  },
  styles: {
    global: {
      body: {
        bg: "blue.900",
        color: "gray.50",
      },
    },
  },
  fonts: {
    heading: "Outfit",
    body: "Outfit",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
});
