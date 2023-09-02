import { Button, ButtonWrapper, ButtonsBar } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsBar>
      {options.length &&
        options.map(option => (
          <ButtonWrapper key={option}>
            <Button
              option={option}
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </Button>
          </ButtonWrapper>
        ))}
    </ButtonsBar>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
