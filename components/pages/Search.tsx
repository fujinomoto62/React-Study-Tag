import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { CheckboxForm } from "../molecules/form/CheckboxForm";
import { InputForm } from "../molecules/form/InputForm";
import { SelectForm } from "../molecules/form/SelectForm";
import { Filtering } from "./Filtering";
import { HeaderOnly } from "../templates/HeaderOnly";
import { createParams } from "../../function/createParams";

export const Search = () => {
  const navigate = useNavigate();

  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    const params = createParams(e);
    navigate(`/search/?${params}`, { replace: false });
  };

  return (
    <>
      <HeaderOnly>
        <h2>検索フォーム</h2>
        <form onSubmit={handleChange} onChange={handleChange}>
          <InputForm
            labelName="名前："
            name="userName"
            placeholder="名前を入力"
          />
          <SelectForm
            labelName="性別："
            name="gender"
            value={["", "male", "female"]}
            title={["未選択", "男性", "女性"]}
          />
          <SelectForm
            labelName="学年："
            name="grade"
            value={["", "B1", "B2", "B3", "B4", "M1", "M2"]}
            title={["未選択", "B1", "B2", "B3", "B4", "M1", "M2"]}
          />
          <SelectForm
            labelName="学科："
            name="belong"
            value={["", "EE", "IS", "PH", "CU", "BS", "AR", "CA"]}
            title={["未選択", "EE", "IS", "PH", "CU", "BS", "AR", "CA"]}
          />
          <br />

          <CheckboxForm
            mainName="タグ："
            ids={[
              "power",
              "programming",
              "circuit",
              "chemistry",
              "physics",
              "engineering",
            ]}
            values={[
              "power",
              "programming",
              "circuit",
              "chemistry",
              "physics",
              "engineering",
            ]}
            name="tag"
            labelNames={[
              "力仕事",
              "プログラミング",
              "電気回路",
              "化学",
              "物理",
              "工学",
            ]}
          />
        </form>
        <h3>注意）タグは”ダブルクリック”で選択</h3>

        <Suspense fallback={<h3>Now Searching...</h3>}>
          <Filtering />
        </Suspense>
      </HeaderOnly>
    </>
  );
};
