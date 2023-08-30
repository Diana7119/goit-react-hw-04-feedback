import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { NotificationMessage } from './NotificationMessage/NotificationMessage';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { useState } from 'react';

const App = () => {
  const [options, setOptions] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = evt => {
    const option = Object.keys(options).find(el => el === evt.target.name);

    setOptions({ ...options, [option]: options[option] + 1 });
  };

  const countTotalFeedback = options => {
    const values = Object.values(options);
    let total = 0;
    for (let el of values) {
      total += el;
    }
    return total;
  };

  const countPositiveFeedbackPercentage = (good, total) => {
    return (good * 100) / total;
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback(options) ? (
          <Statistics
            options={options}
            total={countTotalFeedback(options)}
            positivePercentage={countPositiveFeedbackPercentage(
              options.good,
              countTotalFeedback(options)
            )}
          />
        ) : (
          <NotificationMessage />
        )}
      </Section>
    </div>
  );
};

export default App;