import { useParams } from "react-router-dom";
import { searchUser } from "../../data/userData";

export const UserInformation = () => {
  const { id } = useParams();
  const user = searchUser(+id!)!;

  return (
      <>
          <ul key={user.id}>
            <li>ID：{user.id}</li>
            <li>名前：{user.name}</li>
            <li>性別：{user.gender}</li>
            <li>学年：{user.grade}</li>
            <li>所属：{user.belong}</li>
            <li>タグ：{user.tag}</li>
          </ul>
      </>
    );
}