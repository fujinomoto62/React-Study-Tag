import { ChangeEventHandler } from "react";

export type TypeCheckbox = { id: string; name: string; value: string; changeFunction?: ChangeEventHandler<HTMLInputElement>};
export type TypeLabel = { children?: any; labelName: string };
export type TypeInput = { name: string; placeholder: string };
export type TypeSelect = { name: string; value: string[]; title: string[] };

export type TypeCheckboxFrom = {
  mainName: string;
  labelNames: string[];
  ids: string[];
  name: string;
  values: string[];
  changeFunction?: ChangeEventHandler<HTMLInputElement>;
};
