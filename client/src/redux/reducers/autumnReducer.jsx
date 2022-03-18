import { SET_AUTUMN } from "../constants/actionType";

const INITIAL_STATE = {
    autumnMode: 'autumn',
    autumnValue: 0,
}

const autumnReducer = (state = INITIAL_STATE , action) => {
    switch (action.type){
        case SET_AUTUMN:
            return{
                ...state,
                autumnMode: action.autumnMode,
                autumnValue: action.autumnValue,
            };
        default:
            return state;
    }
}

export default autumnReducer;