import { VFC } from "react";
import { Link } from "react-router-dom";
import { STextCenterContainer, SImg, SName, SDl } from "../../styled/styled";
import { User } from "../../types/userType";
import { Card } from "../atoms/card/Card";

export const UserCard: VFC<{ user: User }> = (props) => {
  const { user } = props;
  return (
    <>
      <Card>
        <STextCenterContainer>
          <Link to={`/userdetail/${user.id}`}>
            <SImg src={user.image} alt={user.name} />
          </Link>
          <SName>{user.name}</SName>
        </STextCenterContainer>
        <SDl>
          <dt>学年</dt>
          <dd>{user.grade}</dd>
          <dt>所属</dt>
          <dd>{user.belong}</dd>
        </SDl>
      </Card>
    </>
  );
};


