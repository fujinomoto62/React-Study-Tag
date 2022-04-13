import { FC } from "react";
import { SButtonWrapper, SCheckboxContainer } from "../../../styled/styled";
import { TypeCheckboxFrom } from "../../../types/atomsTypes";
import { Checkbox } from "../../atoms/checkbox/Checkbox";
import { Label } from "../../atoms/label/label";

export const CheckboxForm: FC<TypeCheckboxFrom> = (props) => {
  const { mainName, ids, name, values, labelNames, changeFunction } = props;
  if (ids.length !== labelNames.length || values.length !== labelNames.length) {
    throw new Error("CheckboxFromの要素数が違います。");
  }
  return (
    <>
        <Label labelName={mainName}>
          {ids.map((id, number) => {
            return (
              <SCheckboxContainer key={id}>
                <Label labelName={labelNames[number]}>
                  <SButtonWrapper>
                  <Checkbox id={id} name={name} value={values[number]} changeFunction={changeFunction} />
                  </SButtonWrapper>
                </Label>
              </SCheckboxContainer>
            );
          })}
        </Label>
    </>
  );
};

