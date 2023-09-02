import { StatisticsList, StatisticsText } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <li>
        <StatisticsText>Good: {good}</StatisticsText>
      </li>
      <li>
        <StatisticsText>Neutral: {neutral}</StatisticsText>
      </li>
      <li>
        <StatisticsText>Bad: {bad}</StatisticsText>
      </li>
      <li>
        <StatisticsText>Total: {total}</StatisticsText>
      </li>
      <li>
        <StatisticsText>
          Positive feeedback: {positivePercentage} %
        </StatisticsText>
      </li>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
