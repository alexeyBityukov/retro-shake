import PropTypes from 'prop-types';
import {
  MIN_X,
  MAX_X,
  MIN_Y,
  MAX_Y
} from './const';

const windowMinMaxValidator = {
  x: PropTypes.oneOf([...new Array(MAX_X + 1).keys()]).isRequired,
  y: PropTypes.oneOf([...new Array(MAX_Y + 1).keys()]).isRequired
};

const windowMinMaxDefault = {
  x: MIN_X,
  y: MIN_Y
};

export {
  windowMinMaxValidator,
  windowMinMaxDefault,
  MIN_X,
  MAX_X,
  MIN_Y,
  MAX_Y
};