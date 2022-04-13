import { VFC } from "react";
import { SHeader, SLink } from "../../../styled/styled";

export const Header: VFC = () => {
  return (
    <SHeader>
      <SLink to="/">HOME</SLink>
      <SLink to="/list">LIST</SLink>
      <SLink to="/search">SEARCH</SLink>
      <SLink to="/about">ABOUT</SLink>
    </SHeader>
  );
};




