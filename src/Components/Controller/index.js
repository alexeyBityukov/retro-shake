import React, { PureComponent } from 'react';
import { DEFAULT_SCORE } from '../default';
import ScoreBar from '../ScoreBar'

class Controller extends PureComponent {
    state = {
        score: DEFAULT_SCORE
    };

    render() {
        const { children } = this.props;
        
        return (
            <>
                <ScoreBar />
            </>
        );
    }
}

export default Controller;