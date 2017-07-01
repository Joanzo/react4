import axios from 'axios';
import {DELETE_BLOG} from '../type';
import {BLOG_API_BASE_URL as API_BASE_URL, BLOG_API_KEY as API_KEY} from '../../api';

export function deleteBlog(id, callback) {
    const url = `${API_BASE_URL}posts/${id}${API_KEY}`;
    const request = axios.delete(url)
        .then(() => callback());

    return {
        type: DELETE_BLOG,
        payload: id
    }
}