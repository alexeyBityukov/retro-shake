import React from 'react';
import PropTypes from 'prop-types';
import Row from '../Row';
import styles from '../../common.scss';
import Pixel, { PIXEL_COLORS } from '../Pixel';
import GameWindowPosition from '../GameWindowPosition';
import { DIRECTIONS } from '../../Controller/const';
import { turnedRight, turnedTop, turnedBottom, turnedLeft } from './turnedHead';

const shakeHeadWidth = 5;
const shakeHeadHeight = 3;

class ShakeHead extends React.PureComponent {
  render() {
    const { direction, ...props } = this.props;
    
    const isTurnedTop = direction === DIRECTIONS.top;
    const isTurnedBottom = direction === DIRECTIONS.bottom;
    const isTurnedRight = direction === DIRECTIONS.right;
    const isVertical = isTurnedTop || isTurnedBottom;

    return (<GameWindowPosition
        {...props}
        width={isVertical ? shakeHeadHeight: shakeHeadWidth}
        height={isVertical? shakeHeadWidth : shakeHeadHeight}
      >
        <div className={styles.displayInlineBlock}>
          {
            isTurnedRight ? turnedRight : isTurnedTop ? turnedTop : isTurnedBottom ? turnedBottom : turnedLeft 
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
