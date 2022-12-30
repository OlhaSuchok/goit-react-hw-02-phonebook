import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  margin-top: 0;
`;

export const ContactListItem = styled.li`
  margin-bottom: ${props => props.theme.space[3]}px;
  color: ${props => props.theme.colors.mainText};
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.text};
`;
