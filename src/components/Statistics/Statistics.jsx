import PropTypes from 'prop-types';
import {
  StatisticsWrapper,
  StatisticsTitle,
  StatisticsItem,
  StatisticsList,
  StatisticsValueText,
  StatisticsValueTotal,
  StatisticsValuePercentage,
} from './Statistics.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <StatisticsWrapper>
      <StatisticsTitle>Statistics</StatisticsTitle>
      <StatisticsList>
        <StatisticsItem>
          Good: <StatisticsValueText>{good}</StatisticsValueText>
        </StatisticsItem>
        <StatisticsItem>
          Neutral: <StatisticsValueText>{neutral}</StatisticsValueText>
        </StatisticsItem>
        <StatisticsItem>
          Bad: <StatisticsValueText>{bad}</StatisticsValueText>
        </StatisticsItem>
        <StatisticsItem>
          Total: <StatisticsValueTotal>{total}</StatisticsValueTotal>
        </StatisticsItem>
        <StatisticsItem>
          PositivePercentage:{' '}
          <StatisticsValuePercentage>
            {positivePercentage}%
          </StatisticsValuePercentage>
        </StatisticsItem>
      </StatisticsList>
    </StatisticsWrapper>
  );
}

Statistics.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
