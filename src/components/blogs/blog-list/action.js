import axios from 'axios';

import {FETCH_BLOGS} from '../type';

import {BLOG_API_BASE_URL as API_BASE_URL, BLOG_API_KEY as API_KEY} from '../../api';


export function fetchBlogs() {
    const url = `${API_BASE_URL}posts${API_KEY}`;
    const request = axios.get(url);

    return {
        type: FETCH_BLOGS,
        payload: request
    }
}