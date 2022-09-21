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
import Header from "../components/Header";
import { Pricing } from "../components/Pricing";
import { Features } from "../components/Features";
import Link from "next/link";
//className={styles.container}
const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Pricing />
      <Features />     
    </div>
  );
};

export default Home;

