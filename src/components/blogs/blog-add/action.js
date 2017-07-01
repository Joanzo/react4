import axios from 'axios';
import {ADD_BLOG} from '../type';
import {BLOG_API_BASE_URL as API_BASE_URL, BLOG_API_KEY as API_KEY} from '../../api';

export function addBlog(values, callback) {
    const url = `${API_BASE_URL}posts${API_KEY}`;
    const request = axios.post(url, values)
        .then(() => {callback()});

    return {
        type: ADD_BLOG,
        payload: request
    }
}