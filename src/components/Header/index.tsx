import trevo from "../../assets/trevo.svg";
import { Button, Flex, Heading, Image } from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

export const Header = () => {
  return (
    <Flex
      h={["80px", "105px"]}
      w="100%"
      borderBottom="1.5px solid"
      borderColor="gray.400"
      px={["3vw", "10vw"]}
      align="center"
      justify="space-between"
    >
      <Flex>
        <Image src={trevo} mixBlendMode="hard-light" h={["58px", "80px"]} />
        <Heading
          fontSize={["30px", "40px"]}
          fontWeight="700"
          lineHeight={["38px", "50px"]}
          pl="15px"
          display="flex"
          alignItems="center"
        >
          lucky day
        </Heading>
      </Flex>
      <Button
        bg="none"
        padding="2px"
        borderRadius="100%"
        minW="1px"
        fontSize="21px"
        h="max-content"
        _hover={{ bg: "none" }}
        _active={{ bg: "none" }}
      >
        <AiOutlineMenu />
      </Button>
    </Flex>
  );
};
