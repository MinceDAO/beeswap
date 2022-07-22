import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  IconButton,
  Spacer,
  Avatar,
} from "@chakra-ui/react";
import { FaChevronDown, FaSun } from "react-icons/fa";

function TradeWrapper({ children }) {
  return (
    <Box
      mb={4}
      shadow="0px 1px 50px rgba(187, 107, 218, 0.5)"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.100", "gray.200")}
      borderRadius={"24px"}
    >
      {children}
    </Box>
  );
}

export default function TradeCard() {
  return (
    <Box py={-4} bg={"#1F1933"} w="100%" id="tradecard">
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl" color={"gray.500"}>
          Swap with ease
        </Heading>
        <Text fontSize="lg" color={"gray.500"}>
          Start your journey of enjoying near-zero swap fees
        </Text>
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <TradeWrapper>
          <VStack p={4} alignItems="stretch" w="100%">
            <HStack
              m={6}
              size="2xs"
              lineHeight={"24px"}
              color={"gray.500"}
              fontWeight="400"
            >
              <Text>Currency</Text>
              <Spacer />
              <Text>Chain</Text>
              <Spacer />
              <Text>Available 500</Text>
            </HStack>
            <HStack
              borderRadius={"10px"}
              borderWidth={"1px"}
              m={6}
              size="2xs"
              lineHeight={"12px"}
              fontWeight="400"
              p={2}
            >
              <Avatar size={'sm'} src="/images/tether-usdt.svg" />
              <Text  color={"gray.100"}>Tether</Text>
              <IconButton size={"sm"} icon={<FaChevronDown />} isRound="true" />
              <Spacer />
              <Avatar
              size={"sm"}
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg"
            />
              <Text  color={"gray.100"}>ETH</Text>
              <IconButton size={"sm"} icon={<FaChevronDown />} isRound="true" />
              <Spacer />
              <Text  color={"gray.100"}>0</Text>
            </HStack>

            <Box w={"554px"} h={"540px"} border={"1px"}></Box>
          </VStack>
        </TradeWrapper>
      </Stack>
    </Box>
  );
}
