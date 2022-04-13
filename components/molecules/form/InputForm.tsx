import { FC } from "react";
import { Label } from "../../atoms/label/label";
import { Input } from "../../atoms/input/input";
import { TypeInput, TypeLabel } from "../../../types/atomsTypes";
// import styled from "styled-components";

export const InputForm: FC<TypeInput & TypeLabel> = (
  props
) => {
  const { labelName, name,  placeholder } = props;
  return (
    <>
      <Label labelName={labelName}>
        <Input name={name} placeholder={placeholder} />
      </Label>
    </>
  );
};

