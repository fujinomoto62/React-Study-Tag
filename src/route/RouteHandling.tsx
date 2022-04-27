import { Route, Routes } from "react-router-dom";
import { UserInformation } from "../components/organisms/UserInformation";
import { routesBox } from "./RoutesBox";

export const RouteHandling = () => {
  return (
    <Routes>
      <Route path={routesBox.home.path} element={routesBox.home.element} />
      <Route path={routesBox.list.path} element={routesBox.list.element} />
      <Route path={routesBox.search.path} element={routesBox.search.element} />
      <Route path={routesBox.about.path} element={routesBox.about.element} />
      <Route
        path={routesBox.userdetail.path}
        element={routesBox.userdetail.element}
      >
        {routesBox.userdetail.exact && (
          <>
            <Route index element={<h3>index</h3>} />
            <Route path=":id" element={<UserInformation />} />
          </>
        )}
      </Route>
      <Route path={routesBox[404].path} element={routesBox[404].element} />
    </Routes>
  );
};
