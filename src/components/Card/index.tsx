import { Button, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { usePlayers } from "../../contexts/PlayerContext";

interface ICardProps {
  avatar1: string;
  countryFlag1: string;
  username1: string;
  username2: string;
  avatar21: string;
  countryFlag2: string;
}

export const Card = () => {
  const { players } = usePlayers();
  return (
    <Flex
      w="267px"
      h="112px"
      borderRadius="20px"
      background="linear-gradient(256.62deg, #0F1923 -0.29%, #323B45 99.69%);"
      px="25px"
      justifyContent="space-between"
    >
      <VStack h="100%" spacing={2}>
        <Text>Jogador</Text>
        <Image src={players[0].avatar} h="55px" w="55px" borderRadius="100%" />
        <Image src={players[0].countryFlag.flag} h="10px" />
      </VStack>
      <VStack h="100%" justify="center" spacing={2}>
        <Text color="red.300" fontSize="20px" fontWeight="700">
          V
        </Text>
        <Text color="red.300" fontSize="20px" fontWeight="700">
          S
        </Text>
      </VStack>
      <VStack h="100%" spacing={2}>
        <Text>Jogador</Text>
        <Image src={players[0].avatar} h="55px" w="55px" borderRadius="100%" />
        <Image src={players[0].countryFlag.flag} h="10px" />
      </VStack>
    </Flex>
  );
};
