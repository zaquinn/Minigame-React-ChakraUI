import { Button, Center, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { LoadingPage } from "../../components/LoadingPage";
import { usePlayers } from "../../contexts/PlayerContext";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { PlayArea } from "../../components/PlayArea";
import { Card } from "../../components/Card";

export const HomePage = () => {
  const { players, loadPlayers, randomPlayers, randomizePlayers } =
    usePlayers();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPlayers().then((res) => setLoading(false));
  }, []);
  return (
    <Center minHeight="100vh" minW="100%">
      {loading ? (
        <LoadingPage />
      ) : (
        <Flex direction="column" w="100%" minH="100vh" justify="space-between">
          <Header />
          <Button
            onClick={() => {
              randomizePlayers();
              console.log(randomPlayers);
            }}
          >
            Teste
          </Button>
          <PlayArea />
          <Footer />
        </Flex>
      )}
    </Center>
  );
};
