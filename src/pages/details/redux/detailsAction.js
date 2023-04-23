export const DETAILSPOST_FETCH = "detailsPost/fecth";

export const detailsPostFetch = (detailsPost) => {
  return {
    type: DETAILSPOST_FETCH,
    payload: detailsPost,
  };
};
