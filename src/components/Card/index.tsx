import { Flex, Image, Text, VStack, keyframes } from "@chakra-ui/react";

interface ICardProps {
  avatar1: string;
  countryFlag1: string;
  username1: string;
  username2: string;
  avatar2: string;
  countryFlag2: string;
  animationState: boolean;
  setAnimationState: (value: boolean) => void;
}

export const Card = ({
  avatar1,
  avatar2,
  countryFlag1,
  countryFlag2,
  username1,
  username2,
  animationState,
  setAnimationState,
}: ICardProps) => {
  const animationKeyFrames = keyframes`
  from {
    transform: rotateY(180deg);
    opacity: 0;
  }
  to {
    transform: rotateY(0deg);
    opacity: 1;
  }
  `;
  const animation = `${animationKeyFrames} 1s linear`;
  return (
    <Flex
      w="267px"
      h="112px"
      borderRadius="20px"
      background="linear-gradient(256.62deg, #0F1923 -0.29%, #323B45 99.69%);"
      px="25px"
      justifyContent="space-between"
      animation={animationState ? animation : "none"}
      onAnimationEnd={() => setAnimationState(false)}
    >
      <VStack h="100%" spacing={2}>
        <Text>{username1}</Text>
        <Image src={avatar1} h="55px" w="55px" borderRadius="100%" />
        <Image src={countryFlag1} h="10px" />
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
        <Text>{username2}</Text>
        <Image src={avatar2} h="55px" w="55px" borderRadius="100%" />
        <Image src={countryFlag2} h="10px" />
      </VStack>
    </Flex>
  );
};
