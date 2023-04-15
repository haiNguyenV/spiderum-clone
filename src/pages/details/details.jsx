import React from "react";

import './details.scss';
import Header from "../../common/component/header/header";
import Footer from "../../common/component/footer/footer";
import Content from "./components/content/content";
import Sidebar from "./components/sidebar/sidebar";
import OthersPost from './components/othersPost/othersPost';
import Comments from "./components/comments/comments";

const Details = () => {
  return (
    <div className="details">
      <Header />
      <div className="details__main">
        <Content />
        <Sidebar />
        <OthersPost />
        <Comments />
      </div>
      <Footer />
    </div>
  );
};

export default Details;
