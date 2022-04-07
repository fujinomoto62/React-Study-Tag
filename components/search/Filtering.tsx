import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {userData} from '../../data/userData';
import {User} from '../../types/userType'

export const Filtering = () => {
  const [searchParams] = useSearchParams();
  const [copyData] = useState< User[] >(userData());
  const [filteredData, setFilteredData] = useState< User[] >([])

  const name = searchParams.get("name");
  const gender = searchParams.get("gender");
  const grade = searchParams.get("grade");
  const belong = searchParams.get("belong");

  useEffect(() => {
    let data = copyData;

    if (name) {
      data = data.filter(user => user.name.indexOf(name) >= 0)
    }

    if (gender) {
      switch (gender) {
        case 'male':
          data = data.filter(user => user.gender === '男性');
          break
        case 'female':
          data = data.filter(user => user.gender === '女性');
          break
      }
    }

    if (grade) {
      switch (grade) {
        case 'B1':
          data = data.filter(user => user.grade === 'B1');
          break;
        case 'B2':
          data = data.filter(user => user.grade === 'B2');
          break;
        case 'B3':
          data = data.filter(user => user.grade === 'B3');
          break;
        case 'B4':
          data = data.filter(user => user.grade === 'B4');
          break;
        case 'M1':
          data = data.filter(user => user.grade === 'M1');
          break;
        case 'M2':
          data = data.filter(user => user.grade === 'M2');
          break;
      }
    }

    if (belong) {
      switch (belong) {
        case "EE":
          data = data.filter(user => user.belong === "EE");
          break;
        case "IS":
          data = data.filter(user => user.belong === "IS");
          break;
        case "PH":
          data = data.filter(user => user.belong === "PH");
          break;
        case "CU":
          data = data.filter(user => user.belong === "CU");
          break;
        case "BS":
          data = data.filter(user => user.belong === "BS");
          break;
        case "AR":
          data = data.filter(user => user.belong === "AR");
          break;
      }
    }

    setFilteredData(data);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, gender, grade, belong]);

  return (
    <>
      {filteredData.length > 0 && 
      filteredData.length !== copyData.length &&
      filteredData.map(user => {
        return (
          <ul key={user.id}>
            <li>ID：{user.id}</li>
            <li>名前：{user.name}</li>
            <li>性別：{user.gender}</li>
            <li>学年：{user.grade}</li>
            <li>所属：{user.belong}</li>
            <li>タグ：{user.tag}</li>
          </ul>
        )
      })}
      
      {filteredData.length === 0 &&
      <h3>該当する学生が見当たりません</h3>}
      
    </>
  );
};
