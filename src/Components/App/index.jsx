import React, { PureComponent } from 'react';
import styles from './index.scss';
import Controller from '../Controller';

class App extends PureComponent {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.gameWindow}>
          <Controller />
        </div>
      </div>
    );
  }
}

export default App;
