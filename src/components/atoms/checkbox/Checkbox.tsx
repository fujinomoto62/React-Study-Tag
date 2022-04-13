import { FC } from "react";
import { SCheckbox } from "../../../styled/styled";
import { TypeCheckbox } from "../../../types/atomsTypes";

export const Checkbox: FC<TypeCheckbox> = (
  props
) => {
  const { id, name, value, changeFunction } = props;
  return <SCheckbox type="checkbox" name={name} id={id} value={value} onChange={changeFunction}/>;
};

