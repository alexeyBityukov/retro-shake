import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';
import Bird from '../Primitives/Bird';
import {
  DEFAULT_SCORE,
  SCORE_STR_LENGTH,
  DEFAULT_BIRD_SCORE,
  BIRD_SCORE_STR_LENGTH,
} from '../default';


class ScoreBar extends PureComponent {
    scoreFormatter = (score, strLenght) => score.toString().padStart(strLenght, 0);

    scoreStr = () => this.scoreFormatter(this.props.score, SCORE_STR_LENGTH);

    birdScoreStr = () => this.scoreFormatter(this.props.birdScore, BIRD_SCORE_STR_LENGTH);

    render() {
      return (
        <div className={styles.root}>
          <div>{this.scoreStr()}</div>
          <div>
            <Bird className={styles.bird} />
            {this.birdScoreStr()}
          </div>
        </div>
      );
    }
}

ScoreBar.propTypes = {
  score: PropTypes.number,
  birdScore: PropTypes.number,
};

ScoreBar.defaultProps = {
  score: DEFAULT_SCORE,
  birdScore: DEFAULT_BIRD_SCORE,
};

export default ScoreBar;
