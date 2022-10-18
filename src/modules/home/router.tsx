import { RouteObject } from "react-router-dom";

import Home from "./pages/Home";

export const RouteHome = {
  HOME_PAGE: '/',
};
export const routerHome: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
];
