import { FC } from "react";
import { SPrimaryButton } from "../../../styled/styled";

export const PrimaryButton: FC = (props) => {
  const { children } = props;
  return <SPrimaryButton>{children}</SPrimaryButton>;
};
