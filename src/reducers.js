import { combineReducers } from 'redux';

import { TOGGLE_DARK_MODE } from './actionTypes';

const initialState = {
  darkMode: false
};

const darkModeReducer = (state = initialState.darkMode, action) => {
  switch(action.type) {
    case TOGGLE_DARK_MODE:
      return !state;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
});

export default rootReducer;