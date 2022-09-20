import { Center, Flex, Image, keyframes } from "@chakra-ui/react";
import trevo from "../../assets/trevo.svg";

export const LoadingPage = () => {
  const animationKeyFrames = keyframes`
  100% { transform: scale(2); }
  `;
  const animation1 = `${animationKeyFrames} .6s ease-in-out alternate infinite;`;
  const animation2 = `${animationKeyFrames} .6s ease-in-out alternate .2s infinite`;
  const animation3 = `${animationKeyFrames} .6s ease-in-out alternate .4s infinite`;

  return (
    <Center flexDirection="column">
      <Image src={trevo} mixBlendMode="hard-light" h="132px" w="132px" />
      <Flex justifyContent="space-around" w="60%" mt="15px">
        <Flex
          as="span"
          borderRadius="100%"
          h="8px"
          w="8px"
          bg="gray.300"
          animation={animation1}
        ></Flex>
        <Flex
          as="span"
          borderRadius="100%"
          h="8px"
          w="8px"
          bg="gray.300"
          animation={animation2}
        ></Flex>
        <Flex
          as="span"
          borderRadius="100%"
          h="8px"
          w="8px"
          bg="gray.300"
          animation={animation3}
        ></Flex>
      </Flex>
    </Center>
  );
};
