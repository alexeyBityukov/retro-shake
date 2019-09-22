import React, { PureComponent } from 'react';
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

export default Row;