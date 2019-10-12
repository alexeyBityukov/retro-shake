import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './index.scss';
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
      height
    } = this.props;

    let left = 0;
    let top = 0;
    
    if(x < width)
      left = 0;
    else 
      left = x - width;

    if(y < height)
      top = 0;
    else   
      top = y - height;

    return <div
      className={styles.root}
      style={{
        left: PIXEL_SIZE * left,
        top: PIXEL_SIZE * top
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
