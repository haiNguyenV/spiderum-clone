import React from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../common/assets/img/logo.png';
import { NavLink } from 'react-router-dom';
import './loginUser.scss';
import authServices from '../../common/api/authServices';

const LoginUser = () => {
    const navigate = useNavigate();

    const userName = useRef();
    const password = useRef();

    const handleUserLogin = () => {
        const usn = userName.current.value;
        const psw = password.current.value;
        console.log(usn, psw);
        authServices.login(usn, psw)
        .then((response) => {
            console.log(response)
            localStorage.setItem('userName', response.data.username)
            navigate('/', {state: {
                userName: response.data.username
            }});
        })
        .catch((error) => {
            alert('Tên đăng nhập hoặc mật khẩu không đúng, xin vui lòng nhập lại!');
            console.log(error.message);
        })
    }

    return (
        <div className="loginUser">
            <div>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div>
                    <input type="text" placeholder='Tên đăng nhập' ref={userName}/>
                    <input type="password" placeholder='Mật khẩu' ref={password}/>
                    <button onClick={handleUserLogin}>Đăng nhập</button>
                </div>
                <div className="loginUser__bottom">
                    <NavLink>Quên mật khẩu?</NavLink>
                    <div>
                        <span>không có tài khoản?</span>
                        <NavLink>Đăng ký ngay</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginUser;