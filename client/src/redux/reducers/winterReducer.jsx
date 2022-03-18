import { SET_WINTER } from "../constants/actionType";

const INITIAL_STATE = {
    winterMode: 'winter',
    winterValue: 0,
}

const winterReducer = (state = INITIAL_STATE , action) => {
    switch (action.type){
        case SET_WINTER:
            return{
                ...state,
                winterMode: action.winterMode,
                winterValue: action.winterValue,
            };
        default:
            return state;
    }
}

export default winterReducer;