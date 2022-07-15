import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from "@chakra-ui/react";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Hero />
    </Box>
  );
}

const Hero = () => {
  return (
    <Container
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
      maxW={"7x1"}
      bg={"#1F1933"}
    >
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          color={"purple.100"}
          fontSize={{ base: "3x1", sm: "4x1", lg: "50" }}
        >
          Swap
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
    </Container>
  );
};
