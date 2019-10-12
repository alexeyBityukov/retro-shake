import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_SCORE } from '../default';
import ScoreBar from '../ScoreBar';
import GameWindow from '../GameWindow';
import {
  DIRECTIONS,
  TICK_INTERVAL
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
      headPositionX: MIN_X,
      headPositionY: MIN_Y,
      shakeDirection: DIRECTIONS.right
    };

    componentDidMount() {
      setInterval(this.tick, TICK_INTERVAL);
    }

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
          />
        </>
      );
    }
}

export default Controller;
