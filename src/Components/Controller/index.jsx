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
import { SHAKE_HEAD_WIDTH } from '../Primitives/ShakeHead';
import { SHAKE_BODY_WIDTH } from '../Primitives/ShakeBody';

class Controller extends PureComponent {
    state = {
      score: DEFAULT_SCORE,
      headPositionX: 0,
      headPositionY: 0,
      shakeDirection: DIRECTIONS.right,
      shakeLenght: DEFAULT_SHAKE_LENGHT,
      shakePixelLenght: SHAKE_HEAD_WIDTH + DEFAULT_SHAKE_LENGHT,
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
      const { shakeDirection, headPositionX, headPositionY } = this.state;
      let direction = shakeDirection;
      let x = headPositionX;
      let y = headPositionY;

      switch(key) {
        case KEYS.arrowDown: direction = DIRECTIONS.bottom; break;
        case KEYS.arrowUp: direction = DIRECTIONS.top; break;
        case KEYS.arrowRight: direction = DIRECTIONS.right; break;
        case KEYS.arrowLeft: direction = DIRECTIONS.left; break;
      }

      const isSameDirection = shakeDirection === direction;
      const isArrowUp = key === KEYS.arrowUp;
      const isArrowDown = key === KEYS.arrowDown;
      const isArrowRight = key === KEYS.arrowRight;
      const isArrowLeft = key === KEYS.arrowLeft;
      const isBackOnTop = shakeDirection === DIRECTIONS.top && isArrowDown;
      const isBackOnBottom = shakeDirection === DIRECTIONS.bottom && isArrowUp;
      const isBackOnLeft = shakeDirection === DIRECTIONS.left && isArrowRight;
      const isBackOnRight = shakeDirection === DIRECTIONS.right && isArrowLeft;

      if (!(isSameDirection || isBackOnTop || isBackOnBottom || isBackOnLeft || isBackOnRight)) {
        switch(shakeDirection) {
          case DIRECTIONS.right: if (isArrowUp) {
            y-=4;
            x--;
          } else if (isArrowDown) {
            y+=1;
            x--;
          } break;
          case DIRECTIONS.top: if (isArrowRight) {
            y+=4;
            x++;
          } else if (isArrowLeft) {
            y+=4;
            x-=4;
          } break;
          case DIRECTIONS.left: if (isArrowUp) {
            y-=4;
            x+=4;
          } else if (isArrowDown) {
            y+=1;
            x+=4;
          } break;
          case DIRECTIONS.bottom: if (isArrowRight) {
            y--;
            x++;
          } else if (isArrowLeft) {
            y--;
            x-=4;
          } break;
        }
        
        this.setState({
          shakeDirection: direction,
          headPositionX: x,
          headPositionY: y
        });
      }
    };

    tick = () => {
      const {
        shakeDirection: direction,
        headPositionX,
        headPositionY,
        shakeLenght
      } = this.state;
      let x = headPositionX, y = headPositionY;
      
      switch(direction) {
        case DIRECTIONS.top: y > MIN_Y && y--; break;
        case DIRECTIONS.bottom: y < MAX_Y && y++; break;
        case DIRECTIONS.left: x > MIN_X && x--; break;
        case DIRECTIONS.right: x < MAX_X && x++; break;
      };

      const shakePixelLenght = SHAKE_HEAD_WIDTH + shakeLenght * SHAKE_BODY_WIDTH;

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
