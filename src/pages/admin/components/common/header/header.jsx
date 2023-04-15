import React from 'react';
import { useNavigate, NavLink } from "react-router-dom";
import logo from '../../../../../common/assets/img/wideLogo.png';
import adminLogo from '../../../../../common/assets/img/logo.png';

import './header.scss';

const Header = () => {
    return (
        <div className="poslist__header">
            <div className="postlist__logo">
            <img src={logo} alt="logo" />
            </div>
            <NavLink to='/'>Trang chủ</NavLink>
            <div className="postlist__favorite">
            <NavLink>Yêu thích</NavLink>
            </div>
            <div className="poslist__admin">
            <p>Xin chào, Hainv!</p>
            <img src={adminLogo} alt="logo" />
            <button>Đăng xuất</button>
            </div>
        </div>
    );
};

export default Header;