import { useState } from "react";
import { Link } from "react-router-dom";
import { slicedData } from "../../data/userData";

export const List = () => {
  const [inviewedData, setInviewedData] = useState(slicedData());

  return (
    <>
      <h2>User List</h2>
      {inviewedData.map((user) => (
        <div key={user.id}>
          <ul>
            <Link to={`/userdetail/${user.id}`}>
              <h3>{user.name}</h3>
            </Link>
            <li>学年：{user.grade}</li>
            <li>所属：{user.belong}</li>
          </ul>
          {/* <Outlet /> */}
          <hr />
        </div>
      ))}

      <button onClick={() => setInviewedData(slicedData(inviewedData.length))}>
        更に表示
      </button>
    </>
  );
};
