import { FC } from "react";
import { Footer } from "../atoms/layout/Footer";
import { Header } from "../atoms/layout/Header";

export const DefaultLayout: FC = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
