import {
  Button,
  Center,
  Flex,
  Heading,
  Text,
  Grid,
  GridItem,
  keyframes,
  Link,
} from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Card } from "../Card";
import { usePlayers } from "../../contexts/PlayerContext";
import { useState } from "react";
import { IoReturnUpBackOutline } from "react-icons/io5";

export const PlayArea = () => {
  const { randomPlayers, randomizePlayers, setRandomPlayers } = usePlayers();
  const [animationState, setAnimationState] = useState(true);

  const animationKeyFrames = keyframes`
  from {
    background-size:90% 100%;
  }
  to {
    background-size:110% 100%;
  }
  `;
  const animation = `${animationKeyFrames} 3s linear infinite alternate;`;
  return (
    <Flex w="100%" h="75vh" px={["3vw", "10vw"]}>
      <Flex
        w="100%"
        borderRadius="8px"
        border="1.5px solid"
        borderColor="gray.400"
        direction="column"
      >
        <Center
          h="85%"
          background={
            randomPlayers.length > 0
              ? "radial-gradient(50.05% 163.35% at 50.05% 50.09%, #00BA75 0%, #0F1923 100%);"
              : "radial-gradient(62.76% 66.42% at 50.05% 44.95%, #323B45 0%, rgba(50, 59, 69, 0) 100%);"
          }
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          px="20px"
          animation={randomPlayers.length > 0 ? animation : "none"}
        >
          {randomPlayers.length > 0 ? (
            <Grid
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
              ]}
              gap={8}
              w={["100%", "100%", "100%", "80%", "80%", "60%"]}
              h="100%"
              py="20px"
              overflowY="auto"
              justifyContent="center"
              sx={{
                "::-webkit-scrollbar": {
                  width: "10px",
                  backgroundColor: "gray.50",
                  borderRadius: " 10px",
                },
                "::-webkit-scrollbar-thumb": {
                  borderRadius: " 10px",
                  bgGradient: "linear(to-b, green.200, green.500, green.200)",
                },
              }}
            >
              {randomPlayers.map((player, index) => (
                <GridItem
                  key={index}
                  w="100%"
                  display="flex"
                  justifyContent="center"
                  sx={{
                    perspective: "500px",
                  }}
                >
                  <Card
                    avatar1={player[0].avatar}
                    avatar2={player[1].avatar}
                    countryFlag1={player[0].countryFlag.flag}
                    countryFlag2={player[1].countryFlag.flag}
                    username1={player[0].username}
                    username2={player[1].username}
                    animationState={animationState}
                    setAnimationState={setAnimationState}
                    key={index}
                  />
                </GridItem>
              ))}
            </Grid>
          ) : (
            <Flex
              w={["300px", "300px", "352px"]}
              h="416px"
              borderRadius="15px"
              background="gray.500"
              direction="column"
              align="center"
              justify="space-between"
              py="20px"
            >
              <Text fontSize={["12px", "14px"]}>Como funciona:</Text>
              <Text px="14px" fontSize={["12px", "14px"]}>
                Ao clicar em jogar, 16 jogadores serão sorteados em dupla
                aleatoriamente, definindo assim, os 8 possíveis jogos.
              </Text>
              <Text px="14px" fontSize={["12px", "14px"]}>
                Este projeto tem como propósito tão somente comprovar minhas
                habilidades técnicas, porém de forma nenhuma as resume.
              </Text>
              <Text px="14px" fontSize={["12px", "14px"]}>
                Caso se sinta interessado em ver mais de meus projetos, me
                acompanhe nas redes abaixo.
              </Text>
              <Flex>
                <Link
                  bg="none"
                  padding="2px"
                  borderRadius="100%"
                  minW="1px"
                  fontSize="30px"
                  h="max-content"
                  _hover={{ bg: "none" }}
                  _active={{ bg: "none" }}
                  color="green.500"
                  href="https://github.com/zaquinn"
                  isExternal
                >
                  <AiFillGithub />
                </Link>
                <Link
                  bg="none"
                  padding="2px"
                  borderRadius="100%"
                  minW="1px"
                  fontSize="30px"
                  h="max-content"
                  _hover={{ bg: "none" }}
                  _active={{ bg: "none" }}
                  color="green.500"
                  href="https://www.linkedin.com/in/isaac-xavier-dev/"
                  isExternal
                >
                  <AiFillLinkedin />
                </Link>
              </Flex>
            </Flex>
          )}
        </Center>
        <Flex h="15%" borderTop="1.5px solid" borderColor="gray.400">
          <Grid templateColumns="repeat(3, 1fr)" gap={2} w="100%">
            <GridItem>
              <Flex
                h="100%"
                direction="column"
                pl={["15px", "15px", "15px", "90px"]}
              >
                <Heading
                  fontSize={["16px", "16px", "26px"]}
                  fontWeight="600"
                  w="max-content"
                >
                  Lucky Game
                </Heading>
                <Heading
                  fontSize={["11px", "11px", "16px"]}
                  fontWeight="500"
                  color="gray.200"
                  w={["", "max-content"]}
                >
                  Defina seu oponente
                </Heading>
              </Flex>
            </GridItem>
            <GridItem>
              <Center h="100%">
                <Button
                  w={["100px", "155px", "267px"]}
                  h={["40px", "45px", "58px"]}
                  background="linear-gradient(268.84deg, #00BA75 -8.26%, #6CE98C 120.6%), #00BA75;"
                  borderRadius="10px"
                  fontWeight="300"
                  fontSize={["16px", "24px"]}
                  _hover={{
                    background:
                      "linear-gradient(268.84deg, #6CE98C -8.26%, #00BA75 120.6%), #6CE98C;",
                  }}
                  _active={{
                    background:
                      "linear-gradient(268.84deg, #6CE98C -8.26%, #00BA75 120.6%), #6CE98C;",
                  }}
                  onClick={() => {
                    randomizePlayers();
                    setAnimationState(true);
                  }}
                >
                  JOGAR
                </Button>
              </Center>
            </GridItem>
            <GridItem>
              <Flex
                h="100%"
                alignItems="center"
                justifyContent="flex-end"
                pr={["15px", "15px", "15px", "90px"]}
              >
                <Button
                  w={["60px", "80px"]}
                  h={["40px", "45px", "58px"]}
                  background="transparent"
                  borderRadius="10px"
                  border="1.5px solid"
                  borderColor="gray.400"
                  fontWeight="300"
                  fontSize={["12px", "14px"]}
                  leftIcon={<IoReturnUpBackOutline />}
                  _hover={{
                    background: "transparent",
                  }}
                  _active={{
                    background: "transparent",
                  }}
                  onClick={() => {
                    setRandomPlayers([]);
                  }}
                >
                  Home
                </Button>
              </Flex>
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
    </Flex>
  );
};
