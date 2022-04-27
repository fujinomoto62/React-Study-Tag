import { VFC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { SHeader, SLink } from "../../../styled/styled";
import {
  Box,
  Flex,
  Heading,
  Link as ChakraLink,
  useDisclosure,
} from "@chakra-ui/react";
import { MenuIconButton } from "../button/MenuIconButton";
import { MenuDrawer } from "../../molecules/menu/MenuDrawer";
import { routesBox } from "../../../route/RoutesBox";

export const Header: VFC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 2, md: 4 }}
      >
        <Flex align="center" mr={8} _hover={{ cursor: "pointer" }}>
          <Heading fontSize={{ base: "lg", md: "xl" }}>
            <ChakraLink as={RouterLink} to={routesBox.home.path}>
              User Handling
            </ChakraLink>
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="md"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <ChakraLink as={RouterLink} to={routesBox.list.path}>
              LIST
            </ChakraLink>
          </Box>
          <Box pr={4}>
            <ChakraLink as={RouterLink} to={routesBox.search.path}>
              SEARCH
            </ChakraLink>
          </Box>
          <Box pr={4}>
            <ChakraLink as={RouterLink} to={routesBox.about.path}>
              ABOUT
            </ChakraLink>
          </Box>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer isOpen={isOpen} onClose={onClose} />
    </>
    // <SHeader>
    //   <SLink to="/">HOME</SLink>
    //   <SLink to="/list">LIST</SLink>
    //   <SLink to="/search">SEARCH</SLink>
    //   <SLink to="/about">ABOUT</SLink>
    // </SHeader>
  );
};
