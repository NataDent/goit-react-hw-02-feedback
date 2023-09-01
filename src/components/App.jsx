import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
    this.countTotalFeedback();
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, el) => acc + el);

  countPositivePercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              options={Object.keys(this.state)}
              onLeaveFeedback={this.onLeaveFeedback}
              countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedbackPercentage={this.countPositivePercentage}
            />
          ) : (
            <Notification text="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
