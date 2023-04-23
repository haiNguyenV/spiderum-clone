import React from "react";
import { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import './details.scss';
import Header from "../../common/component/header/header";
import Footer from "../../common/component/footer/footer";
import Content from "./components/content/content";
import Sidebar from "./components/sidebar/sidebar";
import OthersPost from './components/othersPost/othersPost';
import Comments from "./components/comments/comments";
import postServices from '../../common/api/postServices';
import ScrollToTopButton from '../../common/component/scrollToTopButton/scrollToTopButton';
import { detailsPostFetch }  from './redux/detailsAction';


const Details = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const id = location.state.id;

  const detailsPost = useSelector(state => state.detailsPost.detailsPost); 
  const [author, setAuthor] = useState({});

  console.log(detailsPost.author);

  useEffect(() => {
    dispatch(loadDetailsPost);
  }, [])

  const loadDetailsPost = (dispatch) => {
    postServices.getDetailsPost(id)
    .then((response) => {
      setAuthor(response.data.author)
      dispatch(detailsPostFetch(response.data))
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
        <div className="details">
          <Header />
          <div className="details__main">
            <Content 
                title={detailsPost.title}
                authorImg={author.avatarUrl}
                authorName={author.fullName}
                createdDate={detailsPost.createdDate}
                content={detailsPost.content}
                banner={detailsPost.coverImageUrl}
            />
            <Sidebar 
                authorAvatar={author.avatarUrl}
            />
            <OthersPost />
            <Comments />
          </div>
          <Footer />
          <ScrollToTopButton />
        </div>
  );
};

export default Details;
