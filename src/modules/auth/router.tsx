import { RouteObject } from "react-router-dom";
import Login from "./pages/Login";

export const RouteAuth = {
  LOGIN_ROUTE: '/login',
};

export const routerAuth: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
];
