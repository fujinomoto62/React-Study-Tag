import { FC } from "react";
import { SSecondaryButton } from "../../../styled/styled";

export const SecondaryButton: FC = (props) => {
  const { children } = props;
  return <SSecondaryButton>{children}</SSecondaryButton>;
};


