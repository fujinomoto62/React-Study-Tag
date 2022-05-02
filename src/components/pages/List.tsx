import { useState } from "react";
import { slicedData, userData } from "../../data/userData";
import InfiniteScroll from "react-infinite-scroll-component";
import { UserCard } from "../organisms/UserCard";
import { HeaderOnly } from "../template/HeaderOnly";
import { SUserCardsContainer, SUserArea } from "../../styled/styled";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { UserCards } from "../template/UserCards";

export const List = () => {
  const [inviewedData, setInviewedData] = useState(slicedData());
  const [copyData] = useState(userData);

  const fetchMoreData = () => {
    setInviewedData(slicedData(inviewedData.length));
  };

  const loader = <span>Now Loading...</span>;

  return (
    <>
      <HeaderOnly>
        <h2>User List</h2>
        <InfiniteScroll
          dataLength={inviewedData.length} //現在のデータの長さ
          next={fetchMoreData} // スクロール位置を監視してコールバック（次のデータを読み込ませる）
          hasMore={inviewedData.length !== copyData.length} // さらにスクロールするかどうか（ある一定数のデータ数に達したらfalseを返すことで無限スクロールを回避）
          loader={loader} // ローディング中のコンポーネント
        >
          <UserCards inviewedData={inviewedData} />
        </InfiniteScroll>
      </HeaderOnly>
    </>
    // return (
    //   <>
    //     <HeaderOnly>
    //       <h2>User List</h2>
    //       <InfiniteScroll
    //         dataLength={inviewedData.length} //現在のデータの長さ
    //         next={fetchMoreData} // スクロール位置を監視してコールバック（次のデータを読み込ませる）
    //         hasMore={inviewedData.length !== copyData.length} // さらにスクロールするかどうか（ある一定数のデータ数に達したらfalseを返すことで無限スクロールを回避）
    //         loader={loader} // ローディング中のコンポーネント
    //       >
    //         <SUserCardsContainer>
    //           <SUserArea>
    //             {inviewedData.map((user) => (
    //               <UserCard key={user.id} user={user} />
    //             ))}
    //           </SUserArea>
    //         </SUserCardsContainer>
    //       </InfiniteScroll>
    //     </HeaderOnly>
    //   </>
  );
};
