import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import React, { memo, useEffect, useState, VFC } from "react";

type Props = {
  setName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
};

export const SignIn: VFC<Props> = memo((props) => {
  const { setName, setEmail } = props;
  const [disabled, setDisabled] = useState<boolean>(true);
  const [NameString, setNameString] = useState("");
  const [EmailString, setEmailString] = useState("");

  useEffect(() => {
    const disabled = NameString === "" || EmailString === "";
    setDisabled(disabled);
  }, [NameString, EmailString]);

  const LogIn = () => {
    //ログインに成約をかけるならばここ
    setName(NameString);
    setEmail(EmailString);
  };

  return (
    <Flex align={"center"} justify={"center"} height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow={"md"}>
        <Heading as="h1" size={"lg"} textAlign="center">
          User Handling
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input
            variant={"flushed"}
            placeholder="Name"
            onChange={(e) => setNameString(e.target.value)}
          />
          <Input
            variant={"flushed"}
            placeholder="Email"
            onChange={(e) => setEmailString(e.target.value)}
          />
          <Button
            type="submit"
            bg={"teal.400"}
            color="white"
            _hover={{ opacity: 0.8 }}
            isActive={disabled}
            onClick={LogIn}
          >
            Log In
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
});
