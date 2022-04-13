import { Route, Routes } from "react-router-dom";
import { About } from "../components/pages/About";
import { UserInformation } from "../components/organisms/UserInformation";
import { List } from "../components/pages/List";
import { UserDetail } from "../components/pages/UserDetail";
import { Search } from "../components/pages/Search";
import { Home } from "../components/pages/Home";

export const RouteHandling = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="list" element={<List />} />
      <Route path="search" element={<Search />} />
      <Route path="about" element={<About />} />
      <Route path="userdetail" element={<UserDetail />}>
        <Route index element={<h3>index</h3>} />
        <Route path=":id" element={<UserInformation />} />
      </Route>
      <Route path="*" element={<h2>404 Not Found.</h2>} />
    </Routes>
  );
};
