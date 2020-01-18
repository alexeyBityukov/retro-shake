import React from 'react';
import Row from '../Row';
import styles from '../../common.scss';
import Pixel, { PIXEL_COLORS } from '../Pixel';
import GameWindowPosition from '../GameWindowPosition';

export const SHAKE_BODY_WIDTH = 4;
export const SHAKE_BODY_HEIGHT = 2;

class ShakeBody extends React.PureComponent {
  render() {
    const { ...props } = this.props;

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
        <Row>
          <Pixel color={PIXEL_COLORS.textRegular} /> 
          <Pixel color={PIXEL_COLORS.textRegular} /> 
          <Pixel color={PIXEL_COLORS.textRegular} /> 
          <Pixel color={PIXEL_COLORS.textRegular} /> 
        </Row>
        <Row>
          <Pixel color={PIXEL_COLORS.textRegular} /> 
          <Pixel color={PIXEL_COLORS.textRegular} /> 
          <Pixel color={PIXEL_COLORS.textRegular} /> 
          <Pixel color={PIXEL_COLORS.textRegular} /> 
        </Row>
      </div>
    </GameWindowPosition>);
  }
}

export default ShakeBody;