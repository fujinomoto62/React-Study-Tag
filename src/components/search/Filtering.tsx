import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router-dom";
import { userData } from "../../data/userData";
import { User, Tag } from "../../types/userType";

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
    setTimeout(() => {
      setResult(fetchResult(result.length));
    }, 100);
  }

  let tags = [""];
  if (tag) {
    let editTag: string = tag!.replace("or", "");
    editTag = editTag.slice(0, -1);
    tags = editTag.split(",") as Tag[];
  }

  useEffect(() => {
    let data = copyData;

    if (name) {
      data = data.filter((user) => user.name.indexOf(name) >= 0);
    }

    if (gender) {
      switch (gender) {
        case "male":
          data = data.filter((user) => user.gender === "男性");
          break;
        case "female":
          data = data.filter((user) => user.gender === "女性");
          break;
      }
    }

    if (grade) {
      switch (grade) {
        case "B1":
          data = data.filter((user) => user.grade === "B1");
          break;
        case "B2":
          data = data.filter((user) => user.grade === "B2");
          break;
        case "B3":
          data = data.filter((user) => user.grade === "B3");
          break;
        case "B4":
          data = data.filter((user) => user.grade === "B4");
          break;
        case "M1":
          data = data.filter((user) => user.grade === "M1");
          break;
        case "M2":
          data = data.filter((user) => user.grade === "M2");
          break;
      }
    }

    if (belong) {
      switch (belong) {
        case "EE":
          data = data.filter((user) => user.belong === "EE");
          break;
        case "IS":
          data = data.filter((user) => user.belong === "IS");
          break;
        case "PH":
          data = data.filter((user) => user.belong === "PH");
          break;
        case "CU":
          data = data.filter((user) => user.belong === "CU");
          break;
        case "BS":
          data = data.filter((user) => user.belong === "BS");
          break;
        case "AR":
          data = data.filter((user) => user.belong === "AR");
          break;
      }
    }

    // if (tags[0].length !== 0) {
    //   data = data.filter((user) => {
    //     if (user.tag?.length === 0) return false;

    //     let flag: boolean = true; //or検索の場合はここをfalseにし、↓
    //     for (const tag of tags) {
    //       for (const userTag of user.tag!) {
    //         flag = flag || userTag === tag;
    //       }
    //     }
    //   });
    // }
    if (tags[0].length !== 0) {
      data = data.filter((user) => {
        if (user.tag?.length === 0) return false;

        let flag: boolean = false; //or検索の場合はここをfalseにし、↓
        for (const userTag of user.tag!) {
          for (const tag of tags!) {
            flag = flag || userTag === tag; //ここを||にする。
          }
        }
        return flag;
      });
    }

    setFilteredData(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, gender, grade, belong, tag]);

  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {setResult(fetchResult())}, [filteredData]);

  return (
    <>
      <InfiniteScroll
        dataLength={result.length}
        next={loardMoreResult}
        hasMore={result.length !== filteredData.length}
        loader={<h2>Now Loading...</h2>}
      >
        {filteredData.length > 0 &&
          filteredData.length !== copyData.length &&
          result.map((user) => {
            return (
              <ul key={user.id}>
                <li>ID：{user.id}</li>
                <li>名前：{user.name}</li>
                <li>性別：{user.gender}</li>
                <li>学年：{user.grade}</li>
                <li>所属：{user.belong}</li>
                <li>タグ：{user.tag?.join(', ')}</li>
              </ul>
            );
          })}

        {filteredData.length === 0 && <h3>該当する学生が見当たりません</h3>}
      </InfiniteScroll>
    </>
  );
};
