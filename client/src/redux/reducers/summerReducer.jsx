import { SET_SUMMER } from "../constants/actionType";

const INITIAL_STATE = {
    summerMode: 'summer',
    summerValue: 0,
}

const summerReducer = (state = INITIAL_STATE , action) => {
    switch (action.type){
        case SET_SUMMER:
            return{
                ...state,
                summerMode: action.summerMode,
                summerValue: action.summerValue,
            };
        default:
            return state;
    }
}

export default summerReducer;