import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router-dom";
import { userData } from "../../data/userData";
import { SUserCardsContainer, SUserArea } from "../../styled/styled";
import { User, Tag } from "../../types/userType";
import { paramsFiltering } from "../../function/paramsFiltering";
import { UserCard } from "../organisms/UserCard";
import { UserCards } from "../template/UserCards";

const filtering = new paramsFiltering();

export const Filtering = () => {
  const [searchParams] = useSearchParams();
  const [copyData] = useState<User[]>(userData());
  const [filteredData, setFilteredData] = useState<User[]>([]);
  const [result, setResult] = useState<User[]>([]);

  const name = searchParams.get("name");
  const gender = searchParams.get("gender");
  const grade = searchParams.get("grade");
  const belong = searchParams.get("belong");
  const tag = searchParams.get("tag");

  function fetchResult(length: number = 0) {
    return filteredData.slice(0, length + 10);
  }
  function loardMoreResult() {
    setResult(fetchResult(result.length));
  }

  let tags = [""];
  if (tag) {
    let editTag: string = tag!.replace("or", "");
    editTag = editTag.slice(0, -1);
    tags = editTag.split(",") as Tag[];
  }

  useEffect(() => {
    // let data = copyData;
    let data: User[] = copyData;

    data = filtering.nameFilter(data, name);
    data = filtering.genderFilter(data, gender);
    data = filtering.gradeFilter(data, grade);
    data = filtering.belongFilter(data, belong);
    data = filtering.tagsFilter(data, tags);

    setFilteredData(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, gender, grade, belong, tag]);

  useEffect(() => {
    setResult(fetchResult());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredData]);

  return (
    <>
      <InfiniteScroll
        dataLength={result.length}
        next={loardMoreResult}
        hasMore={result.length !== filteredData.length}
        loader={<h2>Now Loading...</h2>}
      >

        {/* いずれはこっちに変えたい。 */}
        {/* <UserCards
          inviewedData={result}
          filteredData={copyData}
          baseDataLength={copyData.length}
        /> */}


        <SUserCardsContainer>
          <SUserArea>
            {filteredData.length > 0 &&
              filteredData.length !== copyData.length &&
              result.map((user) => {
                return <UserCard key={user.id} user={user} />;
              })}
          </SUserArea>
        </SUserCardsContainer>
        {}
        {filteredData.length === 0 && <h3>該当する学生が見当たりません</h3>}
      </InfiniteScroll>
    </>
  );
};
