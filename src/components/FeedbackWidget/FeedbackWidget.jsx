import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { WidgetWrapper } from './FeedbackWidget.styled';

export const FeedbackWidget = ({
  good,
  neutral,
  bad,
  options,
  onClick,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <WidgetWrapper>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={options} onClick={onClick} />
      </Section>
      {countTotalFeedback() ? (
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </WidgetWrapper>
  );
};
