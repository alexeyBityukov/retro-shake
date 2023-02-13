import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
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
      stopGame,
      path,
    } = this.props;

    const prevPositions = {
      x: headPositionX,// + (SHAKE_HEAD_WIDTH - SHAKE_BODY_WIDTH),
      y: headPositionY + 1// + SHAKE_BODY_HEIGHT + (SHAKE_HEAD_HEIGHT - SHAKE_BODY_HEIGHT),
    }

    // const shakeBodyLenght = SHAKE_BODY_WIDTH * shakeLenght;

    // if(prevPositions.x - shakeBodyLenght < 0 ||
    //   headPositionY === 0 ) {
    //   stopGame();
    // }

    return (
      <div className={styles.root}>
        <ShakeHead
          x={headPositionX}
          y={headPositionY}
          direction={shakeDirection}
          stopGame={stopGame}
        />
        {
          [...new Array(shakeLenght).keys()].map((elem, index) => {
            const position = path[path.length - index - 1];
            // position.y += 1;

            return <ShakeBody
              key={index}
              { ...position }
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
  shakeDirection: PropTypes.oneOf(Object.values(DIRECTIONS)),
  shakeLenght: PropTypes.number
};

GameWindow.defaultProps = {
  headPositionX: MIN_X,
  headPositionY: MIN_Y,
  shakeDirection: DIRECTIONS.right,
  shakeLenght: DEFAULT_SHAKE_LENGHT
};

export default GameWindow;
