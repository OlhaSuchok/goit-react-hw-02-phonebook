import styled from '@emotion/styled';

export const StatisticsWrapper = styled.div`
  text-align: center;
`;

export const StatisticsTitle = styled.h2`
  margin-top: ${props => props.theme.space[0]}px;
  margin-bottom: ${props => props.theme.space[5]}px;
  color: ${props => props.theme.colors.mainText};
  font-size: ${props => props.theme.fontSizes.l};
`;

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  margin-top: ${props => props.theme.space[0]}px;
  margin-bottom: ${props => props.theme.space[0]}px;
  padding-left: ${props => props.theme.space[6]}px;
`;

export const StatisticsItem = styled.li`
  color: ${props => props.theme.colors.mainText};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.text};

  &:not(:last-child) {
    margin-bottom: ${props => props.theme.space[3]}px;
  }
`;

export const StatisticsValueText = styled.span`
  color: ${props => props.theme.colors.blue};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.text};
`;

export const StatisticsValueTotal = styled.span`
  color: ${props => props.theme.colors.red};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.text};
`;
export const StatisticsValuePercentage = styled.span`
  color: ${props => props.theme.colors.pink};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.text};
`;
