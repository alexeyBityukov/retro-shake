import React from 'react';
import Row from '../Row';
import styles from '../../common.scss';
import Pixel, { PIXEL_COLORS } from '../Pixel';

class ShakeBody extends React.PureComponent {
    render() {
        return (<div className={styles.displayInlineBlock}>
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
        </div>);
    }
}

export default ShakeBody;