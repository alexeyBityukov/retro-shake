import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './index.scss';

export const PIXEL_COLORS = {
    transparent: 0,
    textRegular: 1
};

class Pixel extends PureComponent {
    render() {
        const { color: currentColor } = this.props;

        const rootClassNames = cx(
            styles.root, {
            [styles.transparent]: currentColor === PIXEL_COLORS.transparent,
            [styles.textRegular]: currentColor === PIXEL_COLORS.textRegular,
        });

        return (
            <div className={rootClassNames} />
        );
    }
}

Pixel.propTypes = {
    color: PropTypes.oneOf([
        PIXEL_COLORS.textRegular,
        PIXEL_COLORS.transparent
    ])
};

Pixel.defaultProps = {
    color: PIXEL_COLORS.textRegular
};

export default Pixel;