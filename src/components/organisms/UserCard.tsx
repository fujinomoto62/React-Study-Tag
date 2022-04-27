import { Image, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { VFC } from "react";
import {} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { routesBox } from "../../route/RoutesBox";
import { STextCenterContainer, SImg, SName, SDl } from "../../styled/styled";
import { User } from "../../types/userType";
import { Card } from "../atoms/card/Card";
import { UserModal } from "../templates/UserModal";

export const UserCard: VFC<{ user: User }> = (props) => {
  const { user } = props;
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <Card>
        <Stack textAlign={"center"}>
            <Image
              src={user.image}
              alt={user.name}
              boxSize="160px"
              fit={"cover"}
              borderRadius="50%"
              m={"auto"}
              onClick={onOpen}
            />
          <SName>{user.name}</SName>
        </Stack>
        <Stack textAlign={"left"} spacing={2} p={3}>
          <Text fontSize={"sm"} color="gray" >学年　{user.grade}</Text>
          <Text fontSize={"sm"} color="gray" >所属　{user.belong}</Text>
        </Stack>
      </Card>
      <UserModal isOpen={isOpen} onClose={onClose} user={user}/>
    </>
    //   <Card>
    //     <STextCenterContainer>
    //       <Link to={`/userdetail/${user.id}`}>
    //         <SImg src={user.image} alt={user.name} />
    //       </Link>
    //       <SName>{user.name}</SName>
    //     </STextCenterContainer>
    //     <SDl>
    //       <dt>学年</dt>
    //       <dd>{user.grade}</dd>
    //       <dt>所属</dt>
    //       <dd>{user.belong}</dd>
    //     </SDl>
    //   </Card>
    // </>
  );
};
