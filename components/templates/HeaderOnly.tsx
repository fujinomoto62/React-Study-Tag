import { FC } from "react";
import { Header } from "../atoms/layout/Header";

export const HeaderOnly: FC = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};
