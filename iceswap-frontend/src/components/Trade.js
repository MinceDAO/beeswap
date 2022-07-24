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
  Center,
  FormControl,
  FormLabel,
  Container,
} from "@chakra-ui/react";
import { FaArrowDown, FaChevronDown, FaSync } from "react-icons/fa";

function TradeWrapper({ children }) {
  return (
    <Container maxW={'container.sm'}>
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
    </Container>
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
          <Center py={6}>
            <VStack p={4} alignItems="stretch" w="full">
              <form>
                <Box maxW={"full"} border={"1px"}>
                  <HStack
                    m={6}
                    size="2xs"
                    lineHeight={"24px"}
                    color={"gray.500"}
                    fontWeight="400"
                  >
                    <Text>From:</Text>
                 
                  </HStack>
                  <HStack
                    borderRadius={"10px"}
                    borderWidth={"1px"}
                    p={2}
                    m={6}
                    size="2xs"
                    lineHeight={"12px"}
                    fontWeight="400"
                  >
                    <Avatar size={"sm"} src="/images/tether-usdt.svg" />
                    <FormLabel color={"gray.100"}>Tether</FormLabel>
                    <IconButton
                      size={"xs"}
                      icon={<FaChevronDown />}
                      isRound="true"
                    />
                    <Spacer />

                    <Text color={"gray.100"}>0</Text>
                  </HStack>

                  <Center py={6}>
                    <IconButton
                      icon={<FaArrowDown />}
                      size="sm"
                      isRound="true"
                    />
                  </Center>

                  <HStack
                    m={6}
                    size="2xs"
                    lineHeight={"24px"}
                    color={"gray.500"}
                    fontWeight="400"
                  >
                    <Text>To:</Text>
                  </HStack>
                  <HStack
                    borderRadius={"10px"}
                    borderWidth={"1px"}
                    p={2}
                    m={6}
                    size="2xs"
                    lineHeight={"12px"}
                    fontWeight="400"
                  >
                    <Avatar size={"sm"} src="/images/matic.svg" />
                    <Text color={"gray.100"}>MATIC</Text>
                    <IconButton
                      size={"xs"}
                      icon={<FaChevronDown />}
                      isRound="true"
                    />
                    
                    <Text color={"gray.100"}>0</Text>
                  </HStack>

                  <Center py={2}>
                    <Text color={"gray.500"} m={4}>
                      I USDT = 2.308 MATIC
                      <IconButton
                        ml={2}
                        size={"xs"}
                        icon={<FaSync />}
                        bg={"gray.100"}
                        isRound="true"
                      />
                    </Text>
                  </Center>
                  
                </Box>
              </form>
            </VStack>
          </Center>
        </TradeWrapper>
      </Stack>
    </Box>
  );
}
