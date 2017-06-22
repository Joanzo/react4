import axios from 'axios';

import {FETCH_BLOGS} from './type';

const API_BASE_URL = 'http://reduxblog.herokuapp.com/api/';
const API_KEY = '?key=PAPERCLIP1234';

export function fetchBlogs() {
    const url = `${API_BASE_URL}posts${API_KEY}`;
    const request = axios.get(url);

    return {
        type: FETCH_BLOGS,
        payload: request
    }
}