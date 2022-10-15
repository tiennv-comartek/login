import { RouteObject } from "react-router-dom"
import Home from "./pages/Home";


export const RouteHome = {
  
    HOME_PAGE: '/home',
}
export const routerHome: RouteObject[] = [
    {
        path: '/',
        children: [
            {
                path: 'home',
                element:<Home/>
            },
        ],
    },
];
