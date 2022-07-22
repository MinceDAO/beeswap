import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  Center,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { FaSun } from "react-icons/fa";

function TradeWrapper({ children }) {
  return (
    <Box
      mb={4}
      shadow="0px 1px 50px rgba(187, 107, 218, 0.5)"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.100", "gray.200")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

export default function SwapCard() {
  return (
    <Box py={-4} bg={"#1F1933"} w='100%'>
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
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <TradeWrapper>
         <VStack p={4}>
          <IconButton icon={<FaSun />} isRound='true' size={'lg'} alignSelf='flex-end'></IconButton>
          <Heading as={'h2'} size='2xs' color={'gray.100'} fontWeight='bold'>
            SWAP
          </Heading>
          <Box w={'554px'} h={'540px'} border={'1px'}>

          </Box>
         </VStack>
        </TradeWrapper>
      </Stack>
    </Box>
  );
}
