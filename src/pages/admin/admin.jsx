import React from "react";
import { Outlet } from "react-router-dom";

import './admin.scss';
import SideBar from "./components/sideBar/sideBar";

const Admin = () => {
  return (
    <div className="admin">
      <div className="admin-box">
        <SideBar />
        <div className="admin__content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
