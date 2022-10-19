import { RouteObject } from "react-router-dom";
import DashBoard from "./pages/DashBoard";


export const RoutesDashboard = {
    DASH_BOARD: '/',
};
export const routeDashboard: RouteObject[] = [
    {
      path: '/',
      element: <DashBoard/>
    },
  ];