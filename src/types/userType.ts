export type Tag =
  | "power"
  | "programming"
  | "circuit"
  | "chemistry"
  | "physics"
  | "engineering";

export type User = {
  id: number;
  name: string;
  gender: "男性" | "女性";
  grade: "B1" | "B2" | "B3" | "B4" | "M1" | "M2";
  belong: "EE" | "IS" | "PH" | "CU" | "BS" | "AR" | "CA";
  tag?: Tag[]
};



