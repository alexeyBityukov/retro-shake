import React, { PureComponent } from 'react';
import styles from './index.scss';

class App extends PureComponent {
    render() {
        return (
            <div className={styles.root}>
                <div className={styles.gameWindow}></div>
            </div>
        )
    }
}

export default App;
