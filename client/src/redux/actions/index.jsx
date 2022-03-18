import {
  SET_USER,
  SET_MODE,
  SET_MOOD,
  SET_VOLUME,
  SET_SPRING,
  SET_SUMMER,
  SET_AUTUMN,
  SET_WINTER,
  LIST_ADD,
  LIST_REMOVE,
  LIST_ADD_DONE,
  LIST_REMOVE_DONE,
  FETCH_ALL,
  CREATE,
  UPDATE,
} from '../constants/actionType';

import * as api from '../../api/api.jsx';

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export const setMode = (payload) => ({
  type: SET_MODE,
  mode: payload,
});

export const setSpring = (payload, value) => ({
  type: SET_SPRING,
  springMode: payload,
  springValue: value,
  summerValue: value,
  autumnValue: value,
  winterValue: value,
});

export const setSummer = (payload, value) => ({
  type: SET_SUMMER,
  summerMode: payload,
  summerValue: value,
});

export const setAutumn = (payload, value) => ({
  type: SET_AUTUMN,
  autumnMode: payload,
  autumnValue: value,
});


export const setWinter = (payload, value) => ({
  type: SET_WINTER,
  winterMode: payload,
  winterValue: value,
});

export const setMood = (payload) => ({
  type: SET_MOOD,
  moodMode: payload,
});

export const setVolume = (payload) => ({
  type: SET_VOLUME,
  volumeValue: payload,
});

export function changeMorningNight(currentStatus){
  let status;
  if (currentStatus === 'spring') status = 'winter';
  else if (currentStatus === 'winter') status = 'spring';
  return (dispatch) => {
    dispatch(setSpring(status));
  };
}

export function changeSpring(currentStatus , value){
  let status;
  if (currentStatus === 'spring') status = 'spring';
  else if(currentStatus === 'spring') status = 'winter';
  else if(currentStatus === 'summer') status = 'spring';
  else if(currentStatus === 'autumn') status = 'spring';
  else if(currentStatus === 'winter') status = 'spring';
  return (dispatch) => {
    dispatch(setSpring(status , value));
  };
}

export function changeAutumn(currentStatus , value){
  let status;
  if (currentStatus === 'autumn') status = 'autumn';
  return (dispatch) => {
    dispatch(setSpring(status , value));
  };
}

export function changeWinter(currentStatus , value){
  let status;
  if (currentStatus === 'winter') status = 'winter';
  return (dispatch) => {
    dispatch(setSpring(status , value));
  };
}

export function changeSummer(currentStatus , value){
  let status;
  if (currentStatus === 'summer') status = 'summer';
  return (dispatch) => {
    dispatch(setSpring(status , value));
  };
}

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// export const updatePost = (id , post) => async (dispatch) => {
//   try{
//     const { data } = await api.updatePost(id, post);

//     dispatch({ type: UPDATE , payload: data});
//   } catch(error){
//     console.log(error.message);
//   }
// };

export function changeVolume(currentStatus) {
  return (dispatch) => {
    dispatch(setVolume(currentStatus));
  };
}