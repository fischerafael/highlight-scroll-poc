import { Flex, HStack, Link, Text } from "@chakra-ui/layout";

import React from "react";
import Scrollspy from "react-scrollspy";

const index = () => {
  return (
    <Flex
      w="screen"
      minH="100vh"
      flexDir="column"
      position="relative"
      className=""
    >
      <HStack
        bg="gray.50"
        h="10vh"
        w="full"
        justify="center"
        align="center"
        spacing="8"
        position="fixed"
        top="0"
        as={Scrollspy}
        items={["hero", "section1", "section2"]}
        currentClassName="isCurrent"
      >
        <Link href="#hero">Hero</Link>

        <Link href="#section1">section 1</Link>

        <Link href="#section2">section 2</Link>
      </HStack>
      <Flex
        justify="center"
        align="center"
        bg="gray.100"
        h="100vh"
        w="full"
        id="hero"
      >
        hero
      </Flex>
      <Flex
        justify="center"
        align="center"
        bg="gray.200"
        h="100vh"
        w="full"
        id="section1"
      >
        section 1
      </Flex>
      <Flex
        justify="center"
        align="center"
        bg="gray.300"
        h="100vh"
        w="full"
        id="section2"
      >
        section 2
      </Flex>
    </Flex>
  );
};

export default index;
