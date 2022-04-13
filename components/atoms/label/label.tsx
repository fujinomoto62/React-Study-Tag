import { FC } from "react";

export const Label: FC<{ children: any; labelName: string}> = (props) => {
  const {children, labelName} =props;
  return (
    <>
    <label>
      {labelName}
      {children}
    </label>
    </>
  )
}