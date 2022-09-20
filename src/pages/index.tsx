import type { NextPage } from "next";
// import Head from 'next/head'
// import Image from 'next/image'
import {
  Box,
  Flex,
  Stack,
  VStack,
  HStack,
  Text,
  Heading,
  Button,
} from "@chakra-ui/react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Box bg="green" h="300px" w="300px" margin="auto" mt="32px">
        <Text fontSize="32px"> This is style props example </Text>
        <Button mt="32px" colorScheme="blue" _hover={{background: "blue"}} _focus={{background: "yellow"}} color='black'> Click me </Button>
      </Box>

      {/* <Flex justify="space-between">
        <HStack spacing="24px">
          <Box as="section" bg="green" w="100px" h="200px">
            item 1
          </Box>
          <Box as="section" bg="blue" w="100px" h="200px">
            item 2
          </Box>
          <Box as="section" bg="red" w="100px" h="200px">
            item 3
          </Box>
          <Box as="section" bg="tomato" w="100px" h="200px">
            item 4
          </Box>
        </HStack>
      </Flex> */}
    </div>
  );
};

export default Home;

