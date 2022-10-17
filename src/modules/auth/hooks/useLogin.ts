import { notification } from 'antd';

import { useCallback } from 'react';

import { useNavigate } from 'react-router-dom';
import { systemRoutes } from '../../../routes';

const useLogin = () => {
    const navigate = useNavigate();
    const onLogin = useCallback((value: any): any => {
        if ((value.username === "ngocxinxu@gmail.com" && value.password === '123') || (value.username === "karik@gmail.com" && value.password === 'lll')) {
            notification.open({
                message: 'Đăng nhập thành công...'
            })
            navigate(systemRoutes.HOME_PAGE);

             localStorage.setItem('name', value.username);
           
           
            if (localStorage.getItem('name')===null)
            {
                console.log('a')
            }
            else {
                console.log('b')
            }

        }
        else {
            notification.open({
                message: 'Tên tài khoản hoặc mật khẩu không đúng!'
            })
         
    
            navigate(systemRoutes.LOGIN_ROUTE);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return {
        onLogin
    }
};


export default useLogin;