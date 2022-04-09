import { useState } from "react";
import { Link } from "react-router-dom";
import { slicedData, userData } from "../../data/userData";
import InfiniteScroll from "react-infinite-scroll-component";

export const List = () => {
  const [inviewedData, setInviewedData] = useState(slicedData());
  const [copyData] = useState(userData);

  const fetchMoreData = () => {
    setTimeout(() => {
      setInviewedData(slicedData(inviewedData.length));
    }, 500);
  };

  const loader = (
    <span>Now Loading...</span>
  )
  

  return (
    <>
      <h2>User List</h2>

      <InfiniteScroll
        dataLength={inviewedData.length} //現在のデータの長さ
        next={fetchMoreData} // スクロール位置を監視してコールバック（次のデータを読み込ませる）
        hasMore={inviewedData.length !== copyData.length} // さらにスクロールするかどうか（ある一定数のデータ数に達したらfalseを返すことで無限スクロールを回避）
        loader={loader} // ローディング中のコンポーネント
      >
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
      </InfiniteScroll>
      <hr />


    </>
  );
};


/* <p>最下端にあるボタンで更に表示</p> */
// {inviewedData.map((user) => (
  // <div key={user.id}>
    // <ul>
      // <Link to={`/userdetail/${user.id}`}>
        // <h3>{user.name}</h3>
      // </Link>
      // <li>学年：{user.grade}</li>
      // <li>所属：{user.belong}</li>
    // </ul>
    // {/* <Outlet /> */}
    // <hr />
  // </div>
// ))}
// 
/* <button onClick={() => setInviewedData(slicedData(inviewedData.length))}> */
  // 更に表示
// </button>