import { FETCH_COURSES } from './types';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_COURSES:
        console.log(action.payload);
        return state;
    default: 
        return state;
    }
}