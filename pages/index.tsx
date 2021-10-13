import React from "react";
import Scrollspy from "react-scrollspy";
import {
  Flex,
  HStack,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/layout";
import { AppTemplateScrollLeftMenu } from "../src/components/templates/AppTemplateScrollLeftMenu";

const index = () => {
  return (
    <AppTemplateScrollLeftMenu
      farLeftSideBar={
        <VStack w="full" h="full">
          <Text>Far left</Text>
        </VStack>
      }
      innerLeftSideBar={
        <VStack w="full" h="full">
          <Text>Inner left</Text>
        </VStack>
      }
      header={
        <HStack justify="space-between" w="full" h="full" bg="gray.200">
          <Text>Breadcrumb</Text>
          <Text>Profile Stuff</Text>
        </HStack>
      }
      mainSection={
        <>
          <VStack
            ml="300px"
            h="full"
            pt="15vh"
            w="300px"
            justify="center"
            align="center"
            spacing="0"
            position="fixed"
            as={Scrollspy}
            items={["hero", "section1", "section2", "section3", "section4"]}
            currentClassName="isCurrent"
          >
            <Link href="#hero">Hero</Link>
            <Link href="#section1">section 1</Link>
            <Link href="#section2">section 2</Link>
            <Link href="#section3">section 3</Link>
            <Link href="#section4">section 4</Link>
          </VStack>

          <VStack pl="600px" w="full" spacing="0" pt="15vh">
            <Flex
              justify="center"
              align="center"
              bg="gray.100"
              h="60vh"
              w="full"
              id="hero"
            >
              hero
            </Flex>
            <Flex
              justify="center"
              align="center"
              bg="gray.200"
              h="60vh"
              w="full"
              id="section1"
            >
              section 1
            </Flex>
            <Flex
              justify="center"
              align="center"
              bg="gray.300"
              h="60vh"
              w="full"
              id="section2"
            >
              section 2
            </Flex>
            <Flex
              justify="center"
              align="center"
              bg="gray.300"
              h="60vh"
              w="full"
              id="section3"
            >
              section 3
            </Flex>
            <Flex
              justify="center"
              align="center"
              bg="gray.300"
              h="60vh"
              w="full"
              id="section4"
            >
              section 4
            </Flex>
          </VStack>
        </>
      }
    />
  );
};

export default index;
