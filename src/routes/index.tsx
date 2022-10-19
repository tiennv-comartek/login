import { createBrowserRouter, RouteObject } from "react-router-dom";
import MasterLayout from "../components/layout/MasterLayout";
import { RouteAuth, routerAuth } from "../modules/auth/router";
import { routeDashboard, RoutesDashboard } from "../modules/dashboard/router";



export const systemRoutes = {
    ...RouteAuth,
    ...RoutesDashboard,
};

const routers: RouteObject[] = [
     ...routerAuth ,
     {
        element: <MasterLayout />,
    children: [
                ...routeDashboard,
            ],
    }
]


export const browserRouters = createBrowserRouter(routers);
  

