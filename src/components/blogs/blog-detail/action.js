import axios from 'axios';

import {FETCH_BLOG} from '../type';

import {BLOG_API_BASE_URL as API_BASE_URL, BLOG_API_KEY as API_KEY} from '../../api';


export function fetchBlog(id) {
    const url = `${API_BASE_URL}posts/${id}${API_KEY}`;
    const request = axios.get(url);

    return {
        type: FETCH_BLOG,
        payload: request
    }
}