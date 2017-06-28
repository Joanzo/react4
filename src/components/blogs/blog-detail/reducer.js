import { FETCH_BLOG } from './type';
import _ from 'lodash';

export default function(state={}, action) {
    switch (action.type) {
        case FETCH_BLOG:
            /*
            // ES5 SYNTAX
            const blog = action.payload.data;
            const newState = { ...state };
            newState[blog.id] = blog;
            return newState; 
            */


            return { ...state, [action.payload.data.id]: action.payload.data };
    }
    return state;
}