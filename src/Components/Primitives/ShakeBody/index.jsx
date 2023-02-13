import React from 'react';
import Row from '../Row';
import styles from '../../common.module.scss';
import Pixel, { PIXEL_COLORS } from '../Pixel';
import GameWindowPosition from '../GameWindowPosition';
import { testBody, testBodyVertical } from './turnedBody';
import { DIRECTIONS } from '../../Controller/const';

export const SHAKE_BODY_WIDTH = 4;
export const SHAKE_BODY_HEIGHT = 2;

class ShakeBody extends React.PureComponent {
  render() {
    const { direction, ...props } = this.props;

    const isTurnedTop = direction === DIRECTIONS.top;
    const isTurnedBottom = direction === DIRECTIONS.bottom;
    const isTurnedRight = direction === DIRECTIONS.right;
    const isVertical = isTurnedTop || isTurnedBottom;

    console.log(direction);

    return (<GameWindowPosition
      {...props}
      width={SHAKE_BODY_WIDTH}
      height={SHAKE_BODY_HEIGHT}
    >
      {/* <div className={styles.displayInlineBlock}>
        <Row>
          <Pixel color={PIXEL_COLORS.transparent} /> 
          <Pixel color={PIXEL_COLORS.textRegular} /> 
          <Pixel color={PIXEL_COLORS.textRegular} /> 
          <Pixel color={PIXEL_COLORS.textRegular} /> 
        </Row>
        <Row>
          <Pixel color={PIXEL_COLORS.textRegular} /> 
          <Pixel color={PIXEL_COLORS.textRegular} /> 
          <Pixel color={PIXEL_COLORS.textRegular} /> 
          <Pixel color={PIXEL_COLORS.transparent} /> 
        </Row>
      </div> */}
      <div className={styles.displayInlineBlock}>
        {isVertical ? testBodyVertical : testBody}
      </div>
    </GameWindowPosition>);
  }
}

export default ShakeBody;