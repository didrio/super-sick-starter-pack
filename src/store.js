import { createSlice, configureStore } from 'redux-starter-kit';

const darkModeSlice = createSlice({
  reducers: {
    toggleDarkMode: (state) => !state,
  },
  initialState: false,
});

export const {
  toggleDarkMode,
} = darkModeSlice.actions;

const usersSlice = createSlice({
  reducers: {
    addUsers: (state, action) => action.payload,
  },
  initialState: [],
});

export const {
  addUsers,
} = usersSlice.actions;

export const fetchUsers = () => async (dispatch) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    dispatch(addUsers(users));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Fetch users error:', error);
  }
};

const rootReducer = {
  darkMode: darkModeSlice.reducer,
  users: usersSlice.reducer,
};

const store = configureStore({ reducer: rootReducer });

export default store;
