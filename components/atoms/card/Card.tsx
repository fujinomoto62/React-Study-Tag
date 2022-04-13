import { FC } from "react";
import { SCard } from "../../../styled/styled";

export const Card: FC = (props) => {
  const { children } = props;
  return <SCard>{children}</SCard>;
};

