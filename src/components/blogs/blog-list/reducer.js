import { FETCH_BLOGS } from './type';
import _ from 'lodash';

export default function(state={}, action) {
    console.log(action.payload);
    switch (action.type) {
        case FETCH_BLOGS:
            return _.mapKeys(action.payload.data, 'id');
    }
    return state;
}