


import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { systemRoutes } from "../../../routes";
import useLocalStorage from "../hooks/useCheckLogin";


const checkLogin = (WrappedComponent: any) => {
 
  
  return function (props: any) {
    const { storedValue}=useLocalStorage('my_login','')
    const navigate = useNavigate();
   
    useEffect(() => {
      if(!storedValue)
      {
        navigate(systemRoutes.LOGIN_ROUTE)
        }
      else if (storedValue)
      {
        if (storedValue !== "") {
          navigate(systemRoutes.HOME_PAGE)
        }
        else if (storedValue === "" || storedValue ===null ) {
          navigate(systemRoutes.LOGIN_ROUTE)
          
        }
        }
    }, [storedValue,navigate]);
    return <WrappedComponent {...props} />;
  };
};

export default checkLogin;
