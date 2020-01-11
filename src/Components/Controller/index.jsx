import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_SCORE, DEFAULT_SHAKE_LENGHT } from '../default';
import ScoreBar from '../ScoreBar';
import GameWindow from '../GameWindow';
import {
  DIRECTIONS,
  TICK_INTERVAL,
  KEYS,
} from './const';
import {
  MIN_X,
  MIN_Y,
  MAX_Y,
  MAX_X
} from '../const';

class Controller extends PureComponent {
    state = {
      score: DEFAULT_SCORE,
      headPositionX: 10,
      headPositionY: 10,
      shakeDirection: DIRECTIONS.right,
      shakeLenght: DEFAULT_SHAKE_LENGHT
    };

    componentDidMount() {
      const ticker = setInterval(this.tick, TICK_INTERVAL);
      document.addEventListener('keydown', this.onKeyDown);

      this.setState({ticker});
    }

    stopGame = () => {
      const { ticker } = this.state;
      clearInterval(ticker);
      this.setState({ ticker: undefined });
    }

    onKeyDown = ({ key }) => {
      event.stopPropagation();
      let direction = this.state.shakeDirection;

      switch(key) {
        case KEYS.arrowDown: direction = DIRECTIONS.bottom; break;
        case KEYS.arrowUp: direction = DIRECTIONS.top; break;
        case KEYS.arrowRight: direction = DIRECTIONS.right; break;
        case KEYS.arrowLeft: direction = DIRECTIONS.left; break;
      }
      
      this.setState({ shakeDirection: direction });
    };

    tick = () => {
      const {
        shakeDirection: direction,
        headPositionX,
        headPositionY
      } = this.state;
      let x = headPositionX, y = headPositionY;
      
      switch(direction) {
        case DIRECTIONS.top: y > MIN_Y && y--; break;
        case DIRECTIONS.bottom: y < MAX_Y && y++; break;
        case DIRECTIONS.left: x > MIN_X && x--; break;
        case DIRECTIONS.right: x < MAX_X && x++; break;
      };

      this.setState({
        headPositionX: x,
        headPositionY: y
      });
    }

    render() {
      const {
        score,
        ...state
      } = this.state;

      return (
        <>
          <ScoreBar />
          <GameWindow 
            {...state}
            stopGame={this.stopGame}
          />
        </>
      );
    }
}

export default Controller;
