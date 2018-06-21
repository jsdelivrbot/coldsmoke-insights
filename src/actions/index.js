import axios from "axios";

export const FETCH_POSTS = "fetch_posts";
export const FETCH_POST = "fetch_post";

const ROOT_URL = "https://work-place.herokuapp.com";

export function fetchPosts(perPage,page,sortBy,criteria,filter) {
  const request = axios.get(`${ROOT_URL}/api/addresses/${perPage}/${page}?sortBy=${sortBy}&criteria=${criteria}&filter=${filter}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}
