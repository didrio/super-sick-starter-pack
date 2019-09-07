import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchUsers,
  toggleDarkMode,
} from '../store';

const UnstyledMain = ({
  className,
}) => {
  const users = useSelector((state) => get(state, 'users', []));
  const darkMode = useSelector((state) => get(state, 'darkMode', false));
  const backgroundColor = useSelector((state) => (
    get(state, 'darkMode', false) ? '#333' : '#666'
  ));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDarkModeClick = useCallback(() => {
    dispatch(toggleDarkMode());
  }, [dispatch]);

  return (
    <div
      className={classNames(className)}
      style={{ backgroundColor }}
    >
      my app hehe ;)
      <button type="button" onClick={handleDarkModeClick}>
        dark mode:
        {darkMode ? 'ON' : 'OFF'}
      </button>
      {users.map(({ id }) => (
        <div key={id}>
          {id}
        </div>
      ))}
    </div>
  );
};

UnstyledMain.propTypes = {
  className: PropTypes.string,
};

UnstyledMain.defaultProps = {
  className: '',
};

const Main = styled(UnstyledMain)`
  font-size: 24px;
`;

export default Main;
