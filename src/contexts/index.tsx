import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { theme } from "../styles/theme";
import { PlayerProvider } from "./PlayerContext";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <PlayerProvider>
    <ChakraProvider resetCSS={true} theme={theme}>
      {children}
    </ChakraProvider>
  </PlayerProvider>
);
