import React from 'react';
import PropTypes from 'prop-types';
import Row from '../Row';
import styles from '../../common.scss';
import Pixel, { PIXEL_COLORS } from '../Pixel';
import GameWindowPosition from '../GameWindowPosition';
import { DIRECTIONS } from '../../Controller/const';
import { turnedRight, turnedTop, turnedBottom, turnedLeft, testHead, testHeadVertical } from './turnedHead';

export const SHAKE_HEAD_WIDTH = 5;
export const SHAKE_HEAD_HEIGHT = 3;

class ShakeHead extends React.PureComponent {
  render() {
    const { direction, ...props } = this.props;
    
    const isTurnedTop = direction === DIRECTIONS.top;
    const isTurnedBottom = direction === DIRECTIONS.bottom;
    const isTurnedRight = direction === DIRECTIONS.right;
    const isVertical = isTurnedTop || isTurnedBottom;
    console.log(props.x, props.y);

    return (<GameWindowPosition
        {...props}
        width={isVertical ? SHAKE_HEAD_WIDTH: SHAKE_HEAD_HEIGHT}
        height={isVertical? SHAKE_HEAD_HEIGHT : SHAKE_HEAD_WIDTH}
      >
        <div className={styles.displayInlineBlock}>
          {
            //isTurnedRight ? turnedRight : isTurnedTop ? turnedTop : isTurnedBottom ? turnedBottom : turnedLeft 
            isTurnedRight ? testHead : isTurnedTop ? testHeadVertical : isTurnedBottom ? testHeadVertical : testHead 
          }
        </div>
    </GameWindowPosition>);
  }
}

ShakeHead.propTypes = {
  direction: PropTypes.oneOf(Object.values(DIRECTIONS))
};

ShakeHead.defaultProps = {
  direction: DIRECTIONS.right
};

export default ShakeHead;
