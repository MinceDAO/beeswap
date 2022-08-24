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
  Button,
  InputGroup,
  InputLeftElement,
  Checkbox,
  Link,
  Flex,
  Input,
} from "@chakra-ui/react";
import { FaArrowDown, FaExchangeAlt, FaSyncAlt } from "react-icons/fa";

function TradeWrapper({ children }) {
  return (
    <Container maxW={"container.sm"}>
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
          A highly secured and trusted decentralized exchange
        </Text>
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <TradeWrapper>
          <form>
            <Box p={6} mb={"-12"}>
              <Flex>
                <Text p="4" color={"gray.500"}>
                  From:
                </Text>
                <Spacer />

                <Input
                  color={"gray.100"}
                  ml="48"
                  variant={"unstyled"}
                  value="50%"
                  type={"text"}
                  p="4"
                />

                <Input
                  variant={"unstyled"}
                  p="4"
                  color={"gray.100"}
                  type={"text"}
                  value="MAX"
                />
              </Flex>
            </Box>
            <Box p={6}>
              <Flex>
                <Button rounded={"full"} bg={"gray.500"} color={"gray.100"}>
                  <Avatar src="../images/matic.svg" size={"sm"} mr="2" /> MATIC
                </Button>
              </Flex>
            </Box>

            <Center py={6}>
              <IconButton icon={<FaExchangeAlt />} size="sm" isRound="true" />
            </Center>

            <Box p={6} mb={"-12"}>
              <Flex>
                <Text p="4" color={"gray.500"}>
                  To:
                </Text>
                <Spacer />

                <Input
                  color={"gray.100"}
                  ml="48"
                  variant={"unstyled"}
                  value="50%"
                  type={"text"}
                  p="4"
                />

                <Input
                  variant={"unstyled"}
                  p="4"
                  color={"gray.100"}
                  type={"text"}
                  value="MAX"
                />
              </Flex>
            </Box>
            <Box p={6}>
              <Flex>
                <Button rounded={"full"} bg={"gray.500"} color={"gray.100"}>
                  <Avatar src="../images/tether-usdt.svg" size={"sm"} mr="2" /> Tether
                </Button>
              </Flex>
            </Box>

            <Center py={6}>
              <VStack p={4} alignItems="stretch" w="full">
                <Center py={2}>
                  <Text color={"gray.500"} m={4}>
                    I USDT = 2.308 MATIC
                    <IconButton
                      ml={2}
                      size={"xs"}
                      icon={<FaSyncAlt />}
                      bg={"gray.100"}
                      isRound="true"
                    />
                  </Text>
                </Center>
              </VStack>
            </Center>
          </form>
        </TradeWrapper>
      </Stack>
    </Box>
  );
}
