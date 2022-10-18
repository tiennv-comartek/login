import { createBrowserRouter, RouteObject } from "react-router-dom";
import { RouteAuth, routerAuth } from "../modules/auth/router";
import { RouteHome, routerHome } from "../modules/home/router";

export const systemRoutes = {
    ...RouteAuth,
    ...RouteHome,
};

const routers: RouteObject[] = [
    ...routerAuth,
    ...routerHome,
]


export const browserRouters = createBrowserRouter(routers);
  

