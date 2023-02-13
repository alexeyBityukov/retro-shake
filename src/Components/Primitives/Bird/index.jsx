import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from '../../common.module.scss';
import Pixel, { PIXEL_COLORS } from '../Pixel';
import Row from '../Row';

class Bird extends PureComponent {
  render() {
    const { className } = this.props;
    const rootClassNames = cx(styles.displayInlineBlock, className);

    const TransparentPixel = <Pixel color={PIXEL_COLORS.transparent} />;
    const RegularPixel = <Pixel color={PIXEL_COLORS.textRegular} />;

    return (
      <div className={rootClassNames}>
        <Row>
          { TransparentPixel }
          { TransparentPixel }
          { RegularPixel }
          { RegularPixel }
          { TransparentPixel }
          { TransparentPixel }
          { TransparentPixel }
        </Row>
        <Row>
          { TransparentPixel }
          { RegularPixel }
          { TransparentPixel }
          { RegularPixel }
          { RegularPixel }
          { TransparentPixel }
          { RegularPixel }
        </Row>
        <Row>
          { RegularPixel }
          { RegularPixel }
          { RegularPixel }
          { RegularPixel }
          { RegularPixel }
          { RegularPixel }
          { RegularPixel }
        </Row>
        <Row>
          { TransparentPixel }
          { TransparentPixel }
          { RegularPixel }
          { RegularPixel }
          { RegularPixel }
          { RegularPixel }
          { TransparentPixel }
        </Row>
      </div>
    );
  }
}

Bird.propTypes = {
  className: PropTypes.string
};

export default Bird;
