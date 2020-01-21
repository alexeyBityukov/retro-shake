import React from 'react';
import Row from '../Row';
import Pixel, { PIXEL_COLORS } from '../Pixel';

const testBody = <>
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
</>;

const testBodyVertical = <>
  <Row>
    <Pixel color={PIXEL_COLORS.textRegular} /> 
    <Pixel color={PIXEL_COLORS.textRegular} /> 
  </Row>
  <Row>
    <Pixel color={PIXEL_COLORS.textRegular} /> 
    <Pixel color={PIXEL_COLORS.textRegular} /> 
  </Row>
  <Row>
    <Pixel color={PIXEL_COLORS.textRegular} /> 
    <Pixel color={PIXEL_COLORS.textRegular} /> 
  </Row>
  <Row>
    <Pixel color={PIXEL_COLORS.textRegular} /> 
    <Pixel color={PIXEL_COLORS.textRegular} /> 
  </Row>
</>;

export {
  testBody,
  testBodyVertical
};
