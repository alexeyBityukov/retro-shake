import React from 'react';
import Row from '../Row';
import styles from '../../common.scss';
import Pixel, { PIXEL_COLORS } from '../Pixel';
import GameWindowPosition from '../GameWindowPosition';

const shakeBodyWidth = 4;
const shakeBodyHeight = 2;

class ShakeBody extends React.PureComponent {
  render() {
    const { ...props } = this.props;

    return (<GameWindowPosition
      {...props}
      width={shakeBodyWidth}
      height={shakeBodyHeight}
      >
        <div className={styles.displayInlineBlock}>
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
        </div>
    </GameWindowPosition>);
  }
}

export default ShakeBody;