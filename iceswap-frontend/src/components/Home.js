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
  } from '@chakra-ui/react';
import Navbar from "./Navbar";


export default function Home() {
    return (
        <Box >
            
            <Navbar />
            <Hero />

        </Box>
        
        

    );

}

const Hero = () => {
    return (
       <Container maxW={'7x1'}>
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}>
             
                    <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        color={'Highlight'}
                        fontSize={{ base: '3x1', sm: '4x1', lg: '50' }}>
                            Swap
                        <Text 
                            color={'gray.100'} maxW={'3x1'}>
                                Enjoy secure token exchange
                        </Text>

                    </Heading>
            

            </Stack>
       </Container>
    )
}

