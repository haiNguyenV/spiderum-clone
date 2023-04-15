import React from "react";
import './statistic.scss';
import Header from '../common/header/header'

const Statistic = () => {
  return (
    <div className="statistic">
      <Header />
      <div className="statistic__content">
          <h1>Thống kê số lượt xem theo tuần</h1>
      </div>
    </div>
  )
};

export default Statistic;
