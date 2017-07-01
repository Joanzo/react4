import { 
    FETCH_BLOGS, 
    FETCH_BLOG, 
    DELETE_BLOG, 
    ADD_BLOG 
} from './type';

import _ from 'lodash';

export default function(state={}, action) {
    switch (action.type) {
        case FETCH_BLOGS:
            console.log('STATE BLOG FETCH REDUCER: ',  _.mapKeys(action.payload.data, 'id'));
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_BLOG:
            /*
            // ES5 SYNTAX
            const blog = action.payload.data;
            const newState = { ...state };
            newState[blog.id] = blog;
            return newState; 
            */
            return { ...state, [action.payload.data.id]: action.payload.data };
        case ADD_BLOG:
            console.log('action.payload ADD_BLOG:', action.payload);
            return state;
        case DELETE_BLOG:
            console.log('STATE BLOG DELETE REDUCER: ', state);
            console.log(_.omit(state, action.payload));
            return _.omit(state, action.payload);            
    }
    return state;
}