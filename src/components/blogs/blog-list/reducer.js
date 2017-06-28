import { FETCH_BLOGS } from './type';
import _ from 'lodash';

export default function(state={}, action) {
    switch (action.type) {
        case FETCH_BLOGS:
            console.log('STATE BLOG FETCH REDUCER: ',  _.mapKeys(action.payload.data, 'id'));
            return _.mapKeys(action.payload.data, 'id');
    }
    return state;
}