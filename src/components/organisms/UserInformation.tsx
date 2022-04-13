import { Link, useParams } from "react-router-dom";
import { searchUser } from "../../data/userData";
import {
  SUserInfoContainer,
  STextCenterContainer,
  SImg,
  SName,
  SDl,
} from "../../styled/styled";
import { Card } from "../atoms/card/Card";

export const UserInformation = () => {
  const { id } = useParams();
  const user = searchUser(+id!)!;

  return (
    <>
      <SUserInfoContainer>
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
            <dt>性別</dt>
            <dd>{user.gender}</dd>
            <dt>タグ</dt>
            <dd>{user.tag?.join(", ")}</dd>
          </SDl>
        </Card>
      </SUserInfoContainer>
    </>
  );
};
