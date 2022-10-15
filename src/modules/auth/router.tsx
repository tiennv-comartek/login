import { RouteObject } from "react-router-dom"
import Login from "./pages/Login"

export const RouteAuth = {
    ROOT:'/auth',
    LOGIN_ROUTE: '/auth/login',
}
export const routerAuth: RouteObject[] = [
    {
        path: '/auth',
        children: [
            {
                path: 'login',
                element:<Login/>
                
            },
        ],
    },
];
