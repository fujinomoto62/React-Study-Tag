import { Link, Outlet } from "react-router-dom";

export const UserDetail = () => {
  return (
    <>
      <h2>User Detail</h2>
      <Outlet />
      <button><Link to='/list'>戻る</Link></button>
    </>
  );
};
