import { TOGGLE_DARK_MODE } from './actionTypes';

export const toggleDarkMode = () => dispatch => {
  dispatch({
    type: TOGGLE_DARK_MODE,
  });
};