import React from 'react';
import Row from '../Row';
import Pixel, { PIXEL_COLORS } from '../Pixel';

const turnedRight = <>
    <Row>
      <Pixel color={PIXEL_COLORS.transparent} /> 
      <Pixel color={PIXEL_COLORS.transparent} /> 
      <Pixel color={PIXEL_COLORS.textRegular} /> 
      <Pixel color={PIXEL_COLORS.transparent} /> 
      <Pixel color={PIXEL_COLORS.transparent} /> 
    </Row>
    <Row>
      <Pixel color={PIXEL_COLORS.transparent} /> 
      <Pixel color={PIXEL_COLORS.textRegular} /> 
      <Pixel color={PIXEL_COLORS.transparent} /> 
      <Pixel color={PIXEL_COLORS.textRegular} /> 
      <Pixel color={PIXEL_COLORS.textRegular} /> 
    </Row>
    <Row>
      <Pixel color={PIXEL_COLORS.textRegular} /> 
      <Pixel color={PIXEL_COLORS.textRegular} /> 
      <Pixel color={PIXEL_COLORS.textRegular} /> 
      <Pixel color={PIXEL_COLORS.textRegular} /> 
      <Pixel color={PIXEL_COLORS.textRegular} /> 
    </Row>
  </>;

const turnedBottom =  <>
    <Row>
      <Pixel color={PIXEL_COLORS.transparent} /> 
      <Pixel color={PIXEL_COLORS.transparent} /> 
      <Pixel color={PIXEL_COLORS.textRegular} /> 
    </Row>
    <Row>
      <Pixel color={PIXEL_COLORS.transparent} /> 
      <Pixel color={PIXEL_COLORS.textRegular} /> 
      <Pixel color={PIXEL_COLORS.textRegular} /> 
    </Row>
    <Row> 
      <Pixel color={PIXEL_COLORS.textRegular} /> 
      <Pixel color={PIXEL_COLORS.transparent} />
      <Pixel color={PIXEL_COLORS.textRegular} /> 
    </Row>
    <Row> 
      <Pixel color={PIXEL_COLORS.transparent} /> 
      <Pixel color={PIXEL_COLORS.textRegular} />
      <Pixel color={PIXEL_COLORS.textRegular} /> 
    </Row>
    <Row> 
      <Pixel color={PIXEL_COLORS.transparent} /> 
      <Pixel color={PIXEL_COLORS.textRegular} />
      <Pixel color={PIXEL_COLORS.textRegular} /> 
    </Row>
  </>;

const turnedTop = <>
    <Row> 
      <Pixel color={PIXEL_COLORS.transparent} /> 
      <Pixel color={PIXEL_COLORS.textRegular} />
      <Pixel color={PIXEL_COLORS.textRegular} /> 
    </Row>
    <Row> 
      <Pixel color={PIXEL_COLORS.transparent} /> 
      <Pixel color={PIXEL_COLORS.textRegular} />
      <Pixel color={PIXEL_COLORS.textRegular} /> 
    </Row>
    <Row> 
      <Pixel color={PIXEL_COLORS.textRegular} /> 
      <Pixel color={PIXEL_COLORS.transparent} />
      <Pixel color={PIXEL_COLORS.textRegular} /> 
    </Row>
    <Row>
      <Pixel color={PIXEL_COLORS.transparent} /> 
      <Pixel color={PIXEL_COLORS.textRegular} /> 
      <Pixel color={PIXEL_COLORS.textRegular} /> 
    </Row>
    <Row>
      <Pixel color={PIXEL_COLORS.transparent} /> 
      <Pixel color={PIXEL_COLORS.transparent} /> 
      <Pixel color={PIXEL_COLORS.textRegular} /> 
    </Row>
  </>;

const turnedLeft = <>
    <Row>
      <Pixel color={PIXEL_COLORS.transparent} /> 
      <Pixel color={PIXEL_COLORS.transparent} /> 
      <Pixel color={PIXEL_COLORS.textRegular} /> 
      <Pixel color={PIXEL_COLORS.transparent} /> 
      <Pixel color={PIXEL_COLORS.transparent} /> 
    </Row>
    <Row>
      <Pixel color={PIXEL_COLORS.textRegular} /> 
      <Pixel color={PIXEL_COLORS.textRegular} /> 
      <Pixel color={PIXEL_COLORS.transparent} /> 
      <Pixel color={PIXEL_COLORS.textRegular} /> 
      <Pixel color={PIXEL_COLORS.transparent} /> 
    </Row>
    <Row>
      <Pixel color={PIXEL_COLORS.textRegular} /> 
      <Pixel color={PIXEL_COLORS.textRegular} /> 
      <Pixel color={PIXEL_COLORS.textRegular} /> 
      <Pixel color={PIXEL_COLORS.textRegular} /> 
      <Pixel color={PIXEL_COLORS.textRegular} /> 
    </Row>
  </>;

 export {
  turnedRight,
  turnedLeft,
  turnedTop,
  turnedBottom,
 };
