import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Tag,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Link } from "react-router-dom";
import { routesBox } from "../../route/RoutesBox";
import { User } from "../../types/userType";

type Props = {
  user: User;
  isOpen: boolean;
  onClose: () => void;
};

export const UserModal: VFC<Props> = memo((props) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} size={"xl"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Wrap spacing={10}>
            <WrapItem>
              <Center w={200}>
                <Image
                  src={props.user.image}
                  alt={props.user.name}
                  boxSize="160px"
                  fit={"cover"}
                  borderRadius="50%"
                  m={"auto"}
                />
              </Center>
            </WrapItem>
            <WrapItem>
              <Stack>
                <Box fontSize={"2xl"}>{props.user.name}</Box>
                <Flex fontSize={"md"}>
                  <Box pr={4} color={"gray.500"}>
                    学年
                  </Box>
                  <Box pr={4} color={"gray.700"}>
                    {props.user.grade}
                  </Box>
                </Flex>
                <Flex fontSize={"md"}>
                  <Box pr={4} color={"gray.500"}>
                    所属
                  </Box>
                  <Box pr={4} color={"gray.700"}>
                    {props.user.belong}
                  </Box>
                </Flex>
                <Flex fontSize={"md"}>
                  <Box pr={4} color={"gray.500"}>
                    タグ
                  </Box>
                  <Box pr={4} color={"gray.700"} w={200}>
                    <Wrap>
                      {props.user.tag?.map((tag) => (
                        <WrapItem key={tag}>
                          <Tag key={tag}>{tag}</Tag>
                        </WrapItem>
                      ))}
                    </Wrap>
                  </Box>
                </Flex>
                {/* <Box color={"gray.500"} fontSize={"sm"}>
                  所属
                </Box>
                <Text>{props.user.grade}</Text>
                <Text>{props.user.belong}</Text>
                <Text>{props.user.tag}</Text> */}
              </Stack>
            </WrapItem>
          </Wrap>
        </ModalBody>

        <ModalFooter>
          <Button
            variant="ghost"
            colorScheme="gray"
            mr={3}
            onClick={props.onClose}
          >
            Close
          </Button>
          <Link to={`${routesBox.userdetail.path}/${props.user.id}`}>
            <Button variant="ghost" colorScheme="teal">
              Detail Information
            </Button>
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
});
