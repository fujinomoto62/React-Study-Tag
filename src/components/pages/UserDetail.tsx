import { Outlet } from "react-router-dom";
import { SLink } from "../../styled/styled";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { DefaultLayout } from "../template/DefaultLayout";

export const UserDetail = () => {
  return (
    <>
      <DefaultLayout>
        <h2>User Detail</h2>
        <Outlet />

        <SLink to="/list">
          <PrimaryButton>LIST</PrimaryButton>
        </SLink>

        <SLink to="/search">
          <PrimaryButton>SEARCH</PrimaryButton>
        </SLink>
      </DefaultLayout>
    </>
  );
};

