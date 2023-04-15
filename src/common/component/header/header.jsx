import React from 'react';
import { CgFacebook } from 'react-icons/cg';
import { AiFillYoutube, AiFillGithub } from 'react-icons/ai';
import { HiShoppingCart, HiOutlineSearch } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

import './header.scss';
import Banner from '../../assets/img/wideLogo.png';
const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <div className="header__logo">
                    <img src={Banner} />
                </div>
                <div className="header__menu-left">
                    <ul>
                        <li><a href="https://www.facebook.com/Spiderum" target='_blank'><CgFacebook /></a></li>
                        <li><a href="https://www.youtube.com/spiderum" target='_blank'><AiFillYoutube /></a></li>
                        <li><a href="https://github.com/haiNguyenV" target='_blank'><AiFillGithub /></a></li>
                        <li><a href="https://shopee.vn/spiderum?referer=at-kol-new&utm_campaign=-&utm_content=1345738-nmNuO7mvEpmQMaBNeFh54sbTQD5r2VWoaD3x2z6XwQ3Xo8K1-spiderum.com--&utm_medium=affiliates&utm_source=an_17156540000&utm_term=93nz3nmzvkw2" target='_blank'><HiShoppingCart /> Spider's Shop</a></li>
                    </ul>
                </div>
            </div>
            <div className="header__right">
                <div className="header__menu-right">
                    <ul>
                        <li><button><HiOutlineSearch /></button></li>
                        <li><NavLink to='about'>Liên hệ</NavLink></li>
                        <li><NavLink to='#'>Đăng ký</NavLink></li>
                        <li><NavLink to='#'>Đăng nhập</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;