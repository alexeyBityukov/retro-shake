import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';
import ShakeBody from '../Primitives/ShakeBody';
import ShakeHead from '../Primitives/ShakeHead';
import {
  DIRECTIONS
} from '../Controller/const';
import {
  MIN_X,
  MIN_Y,
  MAX_X,
  MAX_Y
} from '../const';

class GameWindow extends PureComponent {
  render() {
    const { headPositionX, headPositionY} = this.props;

    return (
      <div className={styles.root}>
        <ShakeHead x={headPositionX} y={headPositionY} direction={DIRECTIONS.right} />
        {/* <ShakeBody /> */}
        {/* <ShakeBody /> */}
      </div>
    );
  }
}

GameWindow.propTypes = {
  headPositionX: PropTypes.oneOf([...new Array(MAX_X + 1).keys()]),
  headPositionY: PropTypes.oneOf([...new Array(MAX_Y + 1).keys()])
};

GameWindow.defaultProps = {
  headPositionX: MIN_X,
  headPositionY: MIN_Y
};

export default GameWindow;
