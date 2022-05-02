import {
  Box,
  Center,
  Flex,
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
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Link } from "react-router-dom";
import { routesBox } from "../../route/RoutesBox";
import { User } from "../../types/userType";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

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
        <ModalHeader>User Information</ModalHeader>
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
              </Stack>
            </WrapItem>
          </Wrap>
        </ModalBody>

        <ModalFooter>
          <SecondaryButton onClick={props.onClose}>Close</SecondaryButton>
          <Link to={`${routesBox.userdetail.path}/${props.user.id}`}>
            <PrimaryButton>Detail information</PrimaryButton>
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
});
