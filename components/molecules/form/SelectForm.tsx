import { FC } from "react";
import { SSelectContainer } from "../../../styled/styled";
import { TypeLabel, TypeSelect } from "../../../types/atomsTypes";
import { Label } from "../../atoms/label/label";
import { Select } from "../../atoms/select/Select";

export const SelectForm: FC<TypeLabel & TypeSelect> = (props) => {
  const { labelName, name, value, title } = props;
  if (value.length !== title.length) {
    throw new Error("SelectFormのvalueとtitleの数が違います。");
  }

  return (
    <>
      <SSelectContainer>
        <Label labelName={labelName}>
          <Select name={name} value={value} title={title} />
        </Label>
      </SSelectContainer>
    </>
  );
};
