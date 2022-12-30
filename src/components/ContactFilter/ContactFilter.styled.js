import styled from '@emotion/styled';

export const FindText = styled.label`
  padding-bottom: ${props => props.theme.space[3]}px;
  color: ${props => props.theme.colors.mainText};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.text};
`;

export const FindValue = styled.input`
  margin-left: ${props => props.theme.space[3]}px;
  color: ${props => props.theme.colors.mainText};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.text};
`;
