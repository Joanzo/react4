import { DELETE_BLOG } from './type';
import _ from 'lodash';

export default function(state={}, action) {

    switch (action.type) {
        case DELETE_BLOG:
            console.log('STATE BLOG DELETE REDUCER: ', state);
            console.log(_.omit(state, action.payload));
            return _.omit(state, action.payload);
    }
    return state;
}