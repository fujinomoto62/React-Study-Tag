import { About } from "../components/About";
import { Fofpage } from "../components/pages/404page";
import { Home } from "../components/pages/Home";
import { List } from "../components/pages/List";
import { Search } from "../components/pages/Search";
import { UserDetail } from "../components/pages/UserDetail";

export const routesBox = {
  home: {
    path: "/",
    element: <Home/>,
    exact: false,
  },
  list: {
    path: "/list",
    element: <List/>,
    exact: false,
  },
  search: {
    path: "/search",
    element: <Search />,
    exact: false,
  },
  about: {
    path: "/about",
    element: <About />,
    exact: false,
  },
  userdetail: {
    path: "/userdetail",
    element: <UserDetail />,
    exact: true,
  },
  404: {
    path: "*",
    element: <Fofpage />,
    exact: false,
  },
}