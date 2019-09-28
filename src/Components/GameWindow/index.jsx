import React, { PureComponent } from 'react';
import styles from './index.scss';
import ShakeBody from '../Primitives/ShakeBody';

class GameWindow extends PureComponent {
  render() {
    return (
      <div className={styles.root}>
        <ShakeBody />
        <ShakeBody />
        <ShakeBody />
      </div>
    );
  }
}

export default GameWindow;
