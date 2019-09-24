import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

class Row extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div className={styles.root}>
        { children }
      </div>
    );
  }
}

Row.propTypes =  {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]).isRequired
};

export default Row;
