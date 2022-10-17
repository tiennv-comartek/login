import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { systemRoutes } from "../../../routes";


const checkLogin = (WrappedComponent: any) => {
    return function (props: any) {
        const navigate = useNavigate();
        useEffect(() => {
            if (localStorage.getItem('name') === null) {
                navigate(systemRoutes.LOGIN_ROUTE);
            }
            else if(localStorage.getItem('name') !== null)
            {
                navigate(systemRoutes.HOME_PAGE);
            }
        }, [navigate]);
        return <WrappedComponent {...props} />;
    };
};

export default checkLogin;