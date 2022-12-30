import styled from '@emotion/styled';

export const SectionWrapper = styled.div`
  text-align: center;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  margin-top: ${props => props.theme.space[0]}px;
  margin-bottom: ${props => props.theme.space[0]}px;
  color: ${props => props.theme.colors.mainText};
  font-size: ${props => props.theme.space[6]}px;
`;
