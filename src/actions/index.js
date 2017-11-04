import axios from 'axios';

import { API_KEY, API_URL } from '../constants';
import { FETCH_POSTS, CREATE_POST, FIND_POST, DESTROY_POST } from '../constants';

export function fetchPosts(){
  const request = axios.get(`${API_URL}/posts?key=${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(props){
  const request = axios.post(`${API_URL}/posts?key=${API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: request
  }
}

export function findPost(id){
  const request = axios.get(`${API_URL}/posts/${id}?key=${API_KEY}`);

  return {
    type: FIND_POST,
    payload: request
  }
}

export function destroyPost(id){
  const request = axios.delete(`${API_URL}/posts/${id}?key=${API_KEY}`);

  return {
    type: DESTROY_POST,
    payload: request
  }
}
