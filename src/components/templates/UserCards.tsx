import { Wrap, WrapItem } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { User } from "../../types/userType";
import { UserCard } from "../organisms/UserCard";

type Props = {
  inviewedData: User[];
  filteredData?: User[];
  baseDataLength?: number;
};

export const UserCards: VFC<Props> = memo((props) => {
  const { inviewedData, filteredData, baseDataLength } = props;
  return (
    <Wrap spacing={"40px"} p={{ base: 6, md: 15 }} justify="center">
      {filteredData ||
        baseDataLength ||
        inviewedData.map((user) => (
          <WrapItem key={user.id}>
            <UserCard user={user} />
          </WrapItem>
        ))}
      {filteredData &&
        baseDataLength &&
        filteredData.length > 0 &&
        filteredData.length !== baseDataLength &&
        inviewedData.map((user) => (
          <WrapItem key={user.id}>
            <UserCard user={user} />
          </WrapItem>
        ))}
    </Wrap>
  );
});
