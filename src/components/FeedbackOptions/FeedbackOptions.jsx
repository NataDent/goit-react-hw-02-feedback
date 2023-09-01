import { Button, ButtonsBar } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsBar>
      {options.length &&
        options.map(option => (
          <li key={option}>
            <Button
              name={option}
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </Button>
          </li>
        ))}
    </ButtonsBar>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
