import { SET_SPRING } from '../constants/actionType';

const INITIAL_STATE = {
    springMode: 'spring',
    springValue: 0,
    summerValue: 0,
    autumnValue: 0,
    winterValue: 0,
};

const springReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SPRING:
      return {
        ...state,
        springMode: action.springMode,
        springValue: action.springValue,
        summerValue: action.summerValue,
        autumnValue: action.autumnValue,
        winterValue: action.winterValue,
      };
    default:
      return state;
  }
};

export default springReducer;
