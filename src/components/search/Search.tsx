import React, { Suspense } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import {Filtering} from './Filtering';

export const Search = () => {
  const navigate = useNavigate();

  const handleChange = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name: string = e.currentTarget.userName.value;
    const gender: string = e.currentTarget.gender.value;
    const grade: string = e.currentTarget.grade.value;
    const belong: string = e.currentTarget.belong.value;
    const tag: string = e.currentTarget.tag;

    const params = createSearchParams({
      name: name,
      gender: gender,
      grade: grade,
      belong: belong,
      // tag: tag,
    }).toString()

    navigate(`/search/?${params}`, {replace: false});
    
  };
  return (
    <>
      <h2>検索フォーム</h2>
      <form onChange={handleChange}>
        <label>
          名前：
          <input type="text" name="userName" />
        </label>
        <label>
          性別：
          <select name="gender">
            <option value="">未選択</option>
            <option value="male">男性</option>
            <option value="female">女性</option>
          </select>
        </label>
        <label htmlFor="">
          学年：
          <select name="grade">
            <option value="">未選択</option>
            <option value="B1">B1</option>
            <option value="B2">B2</option>
            <option value="B3">B3</option>
            <option value="B4">B4</option>
            <option value="M1">M1</option>
            <option value="M2">M2</option>
          </select>
        </label>
        <label>
          所属：
          <select name="belong" id="">
            <option value="">未選択</option>
            <option value="EE">EE</option>
            <option value="IS">IS</option>
            <option value="PH">PH</option>
            <option value="CU">CU</option>
            <option value="BS">BS</option>
            <option value="AR">AR</option>
            <option value="CA">CA</option>
          </select>
        </label>
        <br />
        <label htmlFor="">
          タグ：（未対応）
            <input type="checkbox" id="power" name="tag" value="power" />
            <label htmlFor="power">力仕事</label>
            <input type="checkbox" id="programming" name="tag" value="programming" />
            <label htmlFor="programming">コーディング</label>
            <input type="checkbox" id="circuit" name="tag" value="circuit" />
            <label htmlFor="circuit">電気回路</label>
            <input type="checkbox" id="chemistry" name="tag" value="chemistry" />
            <label htmlFor="chemistry">化学</label>
            <input type="checkbox" id="physics" name="tag" value="physics" />
            <label htmlFor="physics">物理</label>
            <input type="checkbox" id="engineering" name="tag" value="engineering" />
            <label htmlFor="engineering">工学</label>
        </label>
      </form>

      <Suspense fallback={<h3>Now Searching...</h3>}>
        <Filtering />
      </Suspense>
    </>
  );
};
