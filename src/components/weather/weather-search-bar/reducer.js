import { FETCH_WEATHER } from './type';

export default function(state=[], action) {
    switch (action.type) {
        case FETCH_WEATHER:
                console.log('STATE WEATHER FETCH REDUCER: ', state);
            /*console.log('state', state);
            console.log('action.payload.data', action.payload.data);
            console.log('[action.payload.data, ...state]', [action.payload.data, ...state])*/
            //return state.concat([action.payload.data]);
            return [action.payload.data, ...state];
    }
    return state;
}