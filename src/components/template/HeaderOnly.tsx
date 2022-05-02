import { FC, memo } from "react";
import { Header } from "../atoms/layout/Header";

export const HeaderOnly: FC = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});
