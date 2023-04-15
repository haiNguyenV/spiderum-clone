import React from 'react';
import './loginForm.scss';
import logo from '../../../../common/assets/img/logo.png'

const LoginForm = () => {
  return (
    <div className="login__form">
      <div>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <form action="#">
          <input type="text" placeholder='Tên đăng nhập'/>
          <input type="password" placeholder='Mật khẩu' />
          <button>Đăng nhập</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;