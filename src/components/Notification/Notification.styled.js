import styled from '@emotion/styled';

export const NotificationTitle = styled.h2`
  text-align: center;
  margin-top: ${props => props.theme.space[0]}px;
  margin-bottom: ${props => props.theme.space[0]}px;
  color: ${props => props.theme.colors.border};
  font-size: ${props => props.theme.fontSizes.l};
`;
