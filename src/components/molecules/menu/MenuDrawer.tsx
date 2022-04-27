import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { routesBox } from "../../../route/RoutesBox";

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

export const MenuDrawer: VFC<Props> = memo((props) => {
  const { onClose, isOpen } = props;
  return (
    <Drawer placement="right" size={"xs"} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <ChakraLink as={RouterLink} to={routesBox.home.path}>
              <Button w="100%">TOP</Button>
            </ChakraLink>
            <ChakraLink as={RouterLink} to={routesBox.list.path}>
              <Button w="100%">LIST</Button>
            </ChakraLink>
            <ChakraLink as={RouterLink} to={routesBox.search.path}>
              <Button w="100%">SEARCH</Button>
            </ChakraLink>
            <ChakraLink as={RouterLink} to={routesBox.about.path}>
              <Button w="100%">ABOUT</Button>
            </ChakraLink>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
