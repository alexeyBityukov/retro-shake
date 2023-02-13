import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './index.module.scss';
import { PIXEL_SIZE } from '../../const';
import {
  windowMinMaxValidator,
  windowMinMaxDefault
} from '../../propTypesPresets';

class GameWindowPosition extends React.PureComponent {
  render() {
    const {
      x,
      y,
      children,
      width,
      height,
      stopGame
    } = this.props;

    return <div
      className={styles.root}
      style={{
        left: PIXEL_SIZE * x,
        top: PIXEL_SIZE * y
      }}
    >
      {children}
    </div>;
  }
}

GameWindowPosition.propTypes = {
  ...windowMinMaxValidator,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

GameWindowPosition.defaultProps = {
  ...windowMinMaxDefault,
};

export default GameWindowPosition;
