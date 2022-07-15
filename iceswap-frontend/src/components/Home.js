import {
  Container,
  Stack,
  Flex,
  Box,
  Center,
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

const IMAGE = 'https://s3-alpha-sig.figma.com/img/45a7/1d85/7dfdd0593552a0460beb9bb6b831fd03?Expires=1658707200&Signature=MEwsuF5tX~j6xgZcNieX06NMpyow~yrt0rJYLT81DaoxV82KskVSfHamYYg2Phxw~ZnXL45oGejFvGYAD7ZUMQDM6QgsY4ZACO24rGiiWp973eW6hGkiZXJSksqYnLFimfs~or1hHXYiIMlBQHOH6okDT4ZYS7TzOKoZU~PIh-na3J2oUiFDlw-PZuGhIDeP8nLjlA1Az2pqHBjP49TPcFN08~G1RGkn~jbxBk8CuMZed0nV2PJ879vOOijWH1I3n7qcVoiMiFkn7aYWz6dWL6fu0yZcxxcSLyPssDiEYhikrZ3ndP-7Af6Lv9lWMkcjM-YI6F8klYN9JaSii6oIaA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'


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
      <Center py={12}>
        <Box
            role={'group'}
            p={6}
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('#12131a', 'gray.500')}
            boxShadow={'2x1'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}
            >
            <Box 
                rounded={'lg'}
                mt={-12}
                pos={'relative'}
                height={'230px'}
                _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 0,
                    backgroundImage: `url($IMAGE)`,
                    filter: 'blur(15px)',
                    zIndex: -1,

                }}
                _groupHover={{
                    _after: {
                        filter: 'blur(20px)',
                    },
                }}>
                <Image 
                    rounded={'lg'}
                    height={230}
                    width={282}
                    objectFit={'cover'}
                    src={IMAGE}   
                />
            </Box>
            <Stack pt={10} align={'center'}>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    24h Transactions
                </Text>
                <Heading fontSize={'2x1'} fontFamily={'body'} fontWeight={500}>
                    245,568
                </Heading>
                <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={800} fontSize={'x1'}>$570,345</Text>

                </Stack>

            </Stack>

        </Box>
        <Box
            role={'group'}
            p={6}
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('#12131a', 'gray.500')}
            boxShadow={'2x1'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}
            >
            <Box 
                rounded={'lg'}
                mt={-12}
                pos={'relative'}
                height={'230px'}
                _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 0,
                    backgroundImage: `url($IMAGE)`,
                    filter: 'blur(15px)',
                    zIndex: -1,

                }}
                _groupHover={{
                    _after: {
                        filter: 'blur(20px)',
                    },
                }}>
                <Image 
                    rounded={'lg'}
                    height={230}
                    width={282}
                    objectFit={'cover'}
                    src={IMAGE}   
                />
            </Box>
            <Stack pt={10} align={'center'}>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    24h Transactions
                </Text>
                <Heading fontSize={'2x1'} fontFamily={'body'} fontWeight={500}>
                    245,568
                </Heading>
                <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={800} fontSize={'x1'}>$570,345</Text>

                </Stack>

            </Stack>
        </Box>
        <Box
            role={'group'}
            p={6}
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('#12131a', 'gray.500')}
            boxShadow={'2x1'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}
            >
            <Box 
                rounded={'lg'}
                mt={-12}
                pos={'relative'}
                height={'230px'}
                _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 0,
                    backgroundImage: `url($IMAGE)`,
                    filter: 'blur(15px)',
                    zIndex: -1,

                }}
                _groupHover={{
                    _after: {
                        filter: 'blur(20px)',
                    },
                }}>
                <Image 
                    rounded={'lg'}
                    height={230}
                    width={282}
                    objectFit={'cover'}
                    src={IMAGE}   
                />
            </Box>
            <Stack pt={10} align={'center'}>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    24h Transactions
                </Text>
                <Heading fontSize={'2x1'} fontFamily={'body'} fontWeight={500}>
                    245,568
                </Heading>
                <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={800} fontSize={'x1'}>$570,345</Text>

                </Stack>

            </Stack>

        </Box>
        <Box
            role={'group'}
            p={6}
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('#12131a', 'gray.500')}
            boxShadow={'2x1'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}
            >
            <Box 
                rounded={'lg'}
                mt={-12}
                pos={'relative'}
                height={'230px'}
                _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 0,
                    backgroundImage: `url($IMAGE)`,
                    filter: 'blur(15px)',
                    zIndex: -1,

                }}
                _groupHover={{
                    _after: {
                        filter: 'blur(20px)',
                    },
                }}>
                <Image 
                    rounded={'lg'}
                    height={230}
                    width={282}
                    objectFit={'cover'}
                    src={IMAGE}   
                />
            </Box>
            <Stack pt={10} align={'center'}>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    24h Transactions
                </Text>
                <Heading fontSize={'2x1'} fontFamily={'body'} fontWeight={500}>
                    245,568
                </Heading>
                <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={800} fontSize={'x1'}>$570,345</Text>

                </Stack>

            </Stack>

        </Box>
        <Box
            role={'group'}
            p={6}
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('#12131a', 'gray.500')}
            boxShadow={'2x1'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}
            >
            <Box 
                rounded={'lg'}
                mt={-12}
                pos={'relative'}
                height={'230px'}
                _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 0,
                    backgroundImage: `url($IMAGE)`,
                    filter: 'blur(15px)',
                    zIndex: -1,

                }}
                _groupHover={{
                    _after: {
                        filter: 'blur(20px)',
                    },
                }}>
                <Image 
                    rounded={'lg'}
                    height={230}
                    width={282}
                    objectFit={'cover'}
                    src={IMAGE}   
                />
            </Box>
            <Stack pt={10} align={'center'}>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    24h Transactions
                </Text>
                <Heading fontSize={'2x1'} fontFamily={'body'} fontWeight={500}>
                    245,568
                </Heading>
                <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={800} fontSize={'x1'}>$570,345</Text>

                </Stack>

            </Stack>

        </Box>

      </Center>
      
    </Container>
  );
};

