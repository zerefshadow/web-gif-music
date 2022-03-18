import { combineReducers } from 'redux';

import userReducer from './userReducer';
import modeReducer from './modeReducer';
import moodReducer from './moodReducer';
import volumeReducer from './volumeReducer';
import springReducer from './springReducer';
import summerReducer from './summerReducer';
import autumnReducer from './autumnReducer';
import winterReducer from './winterReducer';
import { listReducer } from './listReducer';
import posts from './postsReducer';

export const rootReducer = combineReducers({
  userState: userReducer,
  modeState: modeReducer,
  moodState: moodReducer,
  springState: springReducer,
  summerState: summerReducer,
  autumnState: autumnReducer,
  winterState: winterReducer,
  volumeState: volumeReducer,
  todoItems: listReducer,
  posts,
});

const todoItemsFromStorage = localStorage.getItem('listItems')
  ? JSON.parse(localStorage.getItem('listItems'))
  : [];

export const initialState = {
  todoItems: { todoList: todoItemsFromStorage },
};
