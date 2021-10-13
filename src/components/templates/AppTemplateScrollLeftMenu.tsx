import { Flex, HStack, SimpleGrid, VStack } from "@chakra-ui/layout";
import { calc } from "@chakra-ui/styled-system";
import { ReactNode } from "react";

interface Props {
  farLeftSideBar: ReactNode;
  innerLeftSideBar: ReactNode;
  header: ReactNode;
  mainSection: ReactNode;
}

export const AppTemplateScrollLeftMenu = ({
  farLeftSideBar,
  innerLeftSideBar,
  header,
  mainSection,
}: Props) => {
  return (
    <Flex w="screen" minH="100vh" justify="center">
      <Flex
        w="full"
        h="full"
        position="relative"
        justify="space-between"
        maxW="1440px"
      >
        <SimpleGrid
          templateColumns="1fr 2fr"
          w="300px"
          position="fixed"
          h="full"
          bg="gray.50"
        >
          <VStack w="full" h="full" p="2">
            {farLeftSideBar}
          </VStack>
          <VStack w="full" h="full" p="2">
            {innerLeftSideBar}
          </VStack>
        </SimpleGrid>

        <HStack
          justify="space-between"
          h="15vh"
          position="fixed"
          bg="white"
          zIndex="99"
          ml="300px"
          p="2"
          style={{
            width: "calc(100% - 300px)",
            maxWidth: "calc(1440px - 300px)",
          }}
        >
          {header}
        </HStack>

        <Flex w="full" h="full" p="2">
          {mainSection}
        </Flex>
      </Flex>
    </Flex>
  );
};
