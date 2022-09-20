import {
  Button,
  Center,
  Flex,
  Heading,
  Text,
  Grid,
  GridItem,
  keyframes,
} from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const PlayArea = () => {
  const animationKeyFrames = keyframes`
  from {
    background-size:95% 100%;
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
          //   background="radial-gradient(62.76% 66.42% at 50.05% 44.95%, #323B45 0%, rgba(50, 59, 69, 0) 100%);"
          background="radial-gradient(50.05% 163.35% at 50.05% 50.09%, #00BA75 0%, #0F1923 100%);"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          px="20px"
          animation={animation}
        >
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
              <Button
                bg="none"
                padding="2px"
                borderRadius="100%"
                minW="1px"
                fontSize="30px"
                h="max-content"
                _hover={{ bg: "none" }}
                _active={{ bg: "none" }}
                color="green.500"
              >
                <AiFillGithub />
              </Button>
              <Button
                bg="none"
                padding="2px"
                borderRadius="100%"
                minW="1px"
                fontSize="30px"
                h="max-content"
                _hover={{ bg: "none" }}
                _active={{ bg: "none" }}
                color="green.500"
              >
                <AiFillLinkedin />
              </Button>
            </Flex>
          </Flex>
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
                >
                  JOGAR
                </Button>
              </Center>
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
    </Flex>
  );
};
