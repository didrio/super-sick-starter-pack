import { createSelector } from 'reselect';

export const getDarkMode = state => state.darkMode;

export const getBackgroundColor = createSelector(
  getDarkMode,
  darkMode => darkMode ? '#333' : '#DDD'
);