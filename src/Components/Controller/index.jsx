import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_SCORE } from '../default';
import ScoreBar from '../ScoreBar';
import GameWindow from '../GameWindow';

class Controller extends PureComponent {
    state = {
      score: DEFAULT_SCORE,
    };

    render() {
      return (
        <>
          <ScoreBar />
          <GameWindow />
        </>
      );
    }
}

export default Controller;
