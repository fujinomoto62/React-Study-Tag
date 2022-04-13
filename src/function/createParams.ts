import { createSearchParams } from "react-router-dom";

export const createParams = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const name: string = e.currentTarget.userName.value;
  const gender: string = e.currentTarget.gender.value;
  const grade: string = e.currentTarget.grade.value;
  const belong: string = e.currentTarget.belong.value;
  const tags: HTMLInputElement[] = e.currentTarget.tag;

  let params = createSearchParams({
    name: name,
    gender: gender,
    grade: grade,
    belong: belong,
  }).toString();

  let checkedTag: string[] = [];
  tags.forEach((tag) => tag.checked === true && checkedTag.push(tag.value));
  const tagParams = checkedTag ? `&tag=${checkedTag},or` : "&tag=";
  params += tagParams;

  return params;
};
