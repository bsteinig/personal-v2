import React, {useEffect, useState} from "react";
import styles from "../styles/hero.module.css";
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
import Typed from 'typed.js'

function Hero() {

  const [Type, setType] = useState(false)

  useEffect(() => {
    const typed = new Typed('#typed-text', {
        strings: ["<span class='grad1'>software</span>", "<span class='grad2'>web</span>", "<span class='grad3'>ml+ai</span>", "<span class='grad1'>software</span>"],
        startDelay: 100,
        backSpeed: 40,
        typeSpeed: 70,
        backDelay: 250,
        showCursor: false,
      });
  
    return () => {
      typed.reset(false)
    }
  }, [Type])
    

  let skills = [
    { name: "software", class: "stlyes.grad1" },
    { name: "ml + ai", class: "stlyes.grad2" },
    { name: "web", class: "stlyes.grad3" },
  ];

  return (
    <Container maxW="container.lg">
      <Stack
        align={"left"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} align={'left'}>
          <Text
            lineHeight={1.0}
            fontWeight={300}
            fontSize={{ base: "sm", sm: "2sm", md: "md", lg: "lg" }}
          >
            Hi, my name is
          </Text>
          <Heading
            lineHeight={0.85}
            fontWeight={900}
            fontSize={{ base: "4xl", sm: "5xl", lg: "6xl" }}
            className={styles.intro}
          >
            Ben Steinig.
          </Heading>
          <button onClick={() => {setType(!Type)}}>
            <Heading
                align={'left'}
                lineHeight={1.0}
                fontWeight={700}
                fontSize={{ base: "4xl", sm: "5xl", lg: "6xl" }}
            >
                I&apos;m a&nbsp;
                <span id="typed-text" className="grad">software</span>
                <br />
                developer.
            </Heading>
          </button>
        </Stack>
      </Stack>
    </Container>
  );
}

export default Hero;
