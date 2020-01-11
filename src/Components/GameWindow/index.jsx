import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';
import ShakeBody, {
  SHAKE_BODY_WIDTH,
  SHAKE_BODY_HEIGHT
} from '../Primitives/ShakeBody';
import ShakeHead, {
  SHAKE_HEAD_HEIGHT,
  SHAKE_HEAD_WIDTH
} from '../Primitives/ShakeHead';
import {
  DIRECTIONS
} from '../Controller/const';
import {
  DEFAULT_SHAKE_LENGHT
} from '../default';
import {
  MIN_X,
  MIN_Y,
  MAX_X,
  MAX_Y
} from '../const';

class GameWindow extends PureComponent {
  render() {
    const {
      headPositionX,
      headPositionY,
      shakeDirection,
      shakeLenght,
      stopGame
    } = this.props;

    const prevPositions = {
      x: headPositionX + (SHAKE_HEAD_WIDTH - SHAKE_BODY_WIDTH),
      y: headPositionY + SHAKE_BODY_HEIGHT + (SHAKE_HEAD_HEIGHT - SHAKE_BODY_HEIGHT),
    }

    const shakeBodyLenght = SHAKE_BODY_WIDTH * shakeLenght;

    if(prevPositions.x - shakeBodyLenght < 0 ||
      headPositionY === 0 ) {
      stopGame();
    }

    return (
      <div className={styles.root}>
        <ShakeHead
          x={headPositionX}
          y={headPositionY}
          direction={shakeDirection}
        />
        {
          [...new Array(shakeLenght).keys()].map((elem, index) => {
            prevPositions.x -= 4;

            return <ShakeBody
              key={index}
              x={prevPositions.x}
              y={prevPositions.y}
            />;
          })
        }
      </div>
    );
  }
}

GameWindow.propTypes = {
  headPositionX: PropTypes.oneOf([...new Array(MAX_X + 1).keys()]),
  headPositionY: PropTypes.oneOf([...new Array(MAX_Y + 1).keys()]),
  shakeDirection: PropTypes.oneOfType(DIRECTIONS),
  shakeLenght: PropTypes.number
};

GameWindow.defaultProps = {
  headPositionX: MIN_X,
  headPositionY: MIN_Y,
  shakeDirection: DIRECTIONS.right,
  shakeLenght: DEFAULT_SHAKE_LENGHT
};

export default GameWindow;
