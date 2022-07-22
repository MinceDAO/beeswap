import {
  Container,
  Stack,
  Box,
  Heading,
  Text,
  Button,
  Flex,
  SimpleGrid,
  Avatar,
  Badge,
  useColorModeValue,
  ButtonGroup,
  Center,
} from "@chakra-ui/react";

import Footer from "./Footer";
import Navbar from "./Navbar";
import SwapCard from "./Swap";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <SwapCard />
      <Footer />
    </Box>
  );
}

const Hero = () => {
  return (
    <Container
      mt={10}
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
      maxW={"7x1"}
      bg={"#1F1933"}
    >
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 10, md: 18 }}
      >
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          color={"purple.100"}
          fontSize={{ base: "3x1", sm: "4x1", lg: "50" }}
        >
          <Button colorScheme="teal" variant="outline">
            Switch to Polygon
          </Button>
          <Text color={"gray.500"} maxW={"3x1"}>
            Enjoy secure token exchange
          </Text>
        </Heading>

        <Stack spacing={6} direction={"column"}>
          <Text
            color={"purple.500"}
            fontSize={{ base: "3x1", sm: "4x1", lg: "30" }}
            maxW={"3x1"}
          >
            Total Value Locked
          </Text>
          <Text
            color={"gray.100"}
            fontSize={{ base: "3x1", sm: "4x1", lg: "50" }}
          >
            $367,450,230
          </Text>
        </Stack>
      </Stack>

      <SimpleGrid
        minChildWidth="120px"
        spacing="40px"
        m={2}
        textAlign="center"
        py={{ base: 14, md: 18 }}
      >
        <Box bg={"gray.600"} height="120px" boxShadow="base" p="6" rounded="md">
          <Stack spacing={6} direction={"column"}>
            <Heading color={"purple.100"} fontSize={{ base: "3xl", sm: "4xl" }}>
              245,387
            </Heading>
            <Text color={"teal.300"}>24H Transactions</Text>
          </Stack>
        </Box>
        <Box bg={"gray.600"} height="120px" boxShadow="base" p="6" rounded="md">
          <Stack spacing={6} direction={"column"}>
            <Heading color={"purple.100"} fontSize={{ base: "3xl", sm: "4xl" }}>
              $35M
            </Heading>
            <Text color={"teal.300"}>24H TRADING VOLUME</Text>
          </Stack>
        </Box>
        <Box bg={"gray.600"} height="120px" boxShadow="base" p="6" rounded="md">
          <Stack spacing={6} direction={"column"}>
            <Heading color={"purple.100"} fontSize={{ base: "3xl", sm: "4xl" }}>
              $80,354.35
            </Heading>
            <Text color={"teal.300"}>REWARDS DISTRIBUTED</Text>
          </Stack>
        </Box>
        <Box bg={"gray.600"} height="120px" boxShadow="base" p="6" rounded="md">
          <Stack spacing={6} direction={"column"}>
            <Heading color={"purple.100"} fontSize={{ base: "3xl", sm: "4xl" }}>
              34,456
            </Heading>
            <Text color={"teal.300"}>TOTAL TRADING PAIRS</Text>
          </Stack>
        </Box>
        <Box bg={"gray.600"} height="120px" boxShadow="base" p="6" rounded="md">
          <Stack spacing={6} direction={"column"}>
            <Heading color={"purple.100"} fontSize={{ base: "3xl", sm: "4xl" }}>
              46.37%
            </Heading>
            <Text color={"teal.300"}>dICSWP APY</Text>
          </Stack>
        </Box>
      </SimpleGrid>

      <Box
        bg={"#271e45"}
        w="100%"
        h="50%"
        rounded={"lg"}
        p={6}
        shadow="md"
        borderWidth="1px"
        borderColor={"gray.600"}
      >
        <Text mb={4} color={"gray.500"}>
          24H MOST TRADED VOLUME
        </Text>
        <SimpleGrid
          minChildWidth="120px"
          spacing="40px"
          color={useColorModeValue("gray.50", "gray.200")}
        >
          <Flex>
            <Avatar
              size={"md"}
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg"
            />
            <Box ml="3">
              <Text fontWeight="bold">WETH</Text>
              <Text fontSize="sm">
                $1,500.78
                <Badge ml="1" colorScheme="green">
                  23.5%
                </Badge>
              </Text>
            </Box>
          </Flex>
          <Flex>
            <Avatar size={"md"} src="/images/usdc-coin.svg" />
            <Box ml="3">
              <Text fontWeight="bold">USDC</Text>
              <Text fontSize="sm">
                $1.00
                <Badge ml="1" colorScheme="green">
                  34.6%
                </Badge>
              </Text>
            </Box>
          </Flex>
          <Flex>
            <Avatar size={"md"} src="/images/polygon-matic.svg" />
            <Box ml="3">
              <Text fontWeight="bold">WMATIC</Text>
              <Text fontSize="sm">
                $0.8691
                <Badge ml="1" colorScheme="green">
                  0.90%
                </Badge>
              </Text>
            </Box>
          </Flex>
          <Flex>
            <Avatar src="/images/tether-usdt.svg" />
            <Box ml="3">
              <Text fontWeight="bold">USDT</Text>
              <Text fontSize="sm">
                $1
                <Badge ml="1" colorScheme="green">
                  0.05%
                </Badge>
              </Text>
            </Box>
          </Flex>
          <Flex>
            <Avatar src="/images/bee-swap.svg" />
            <Box ml="3">
              <Text fontWeight="bold">BSWP</Text>
              <Text fontSize="sm">
                $15.89
                <Badge ml="1" colorScheme="green">
                  24.7%
                </Badge>
              </Text>
            </Box>
          </Flex>
        </SimpleGrid>
      </Box>

      <Stack direction="column" spacing={4} py={{ base: 20, md: 28 }}>
        <Text
          align={"center"}
          textAlign="center"
          color={"gray.100"}
          fontSize={{ base: "3xl", sm: "4xl", lg: "30" }}
        >
          BeeSwap provides highly secured platform for token exchange and
          top-of-the-shelf rewards for liquidity farming
        </Text>
        <Center>
          <Stack direction={"row"} align="center" textAlign={"center"} py={{ base: 10, md: 18 }}>
            <Button colorScheme="teal" variant="solid">
              Swap
            </Button>
            <Button colorScheme="teal" variant="outline">
              Liquidity
            </Button>
          </Stack>
        </Center>
      </Stack>
    </Container>
  );
};
