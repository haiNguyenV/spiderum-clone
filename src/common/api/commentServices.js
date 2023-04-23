import axiosClient from "./axiosClient";

const API_PATH = "/api/v1/comments";

const getHeaderConfig = () => {
  return {
    headers: {
      token: localStorage.getItem("token"),
    },
  };
};

const getComment = (postId) => {
  axiosClient.get(API_PATH + `/${postId}`, getHeaderConfig());
};

const postComment = (postId) => {
  axiosClient.post(API_PATH + `/${postId}`, getHeaderConfig());
};

const commentServices = {
  getComment,
  postComment,
};

export default commentServices;
