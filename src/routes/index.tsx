import { useEffect } from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import Login from "../modules/auth/pages/Login";
import { RouteAuth, routerAuth } from "../modules/auth/router";
import Home from "../modules/home/pages/Home";
import { RouteHome, routerHome } from "../modules/home/router";


const routers: RouteObject[] = [
     {
        element:  <Login/>,
        children:[...routerAuth, { path: '' }],
    },
    {
        element:  <Home/>,
        children:[...routerHome, { path: '*', element: <></> }],
    },
]
export const systemRoutes = {
    ...RouteAuth,
    ...RouteHome,
};

export const browserRouters = createBrowserRouter(routers);
  

