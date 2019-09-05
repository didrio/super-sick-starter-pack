import React, { useCallback } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

import { toggleDarkMode as _toggleDarkMode } from '../actions';
import { getDarkMode, getBackgroundColor } from '../selectors';

const UnstyledMain = ({
  backgroundColor,
  className,
  darkMode,
  toggleDarkMode,
}) => {
  const handleDarkModeClick = useCallback(() => {
    toggleDarkMode();
  }, [toggleDarkMode]);
  
  return (
    <div
      className={classNames(className)}
      style={{ backgroundColor }}
    >
      my app hehe
      <button onClick={handleDarkModeClick}>
        dark mode: {darkMode ? 'ON' : 'OFF'}
      </button>
    </div>
  )
};

UnstyledMain.propTypes = {
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  darkMode: PropTypes.bool,
  toggleDarkMode: PropTypes.func,
};

UnstyledMain.defaultProps = {
  backgroundColor: '',
  className: '',
  darkMode: false,
  toggleDarkMode: noop,
};

const Main = styled(UnstyledMain)`
  font-size: 24px;
`;

const mapStateToProps = state => ({
  darkMode: getDarkMode(state),
  backgroundColor: getBackgroundColor(state),
});

const mapDispatchToProps = ({
  toggleDarkMode: _toggleDarkMode,
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);