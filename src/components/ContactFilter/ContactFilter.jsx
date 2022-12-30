import React from 'react';
import { FindText, FindValue } from './ContactFilter.styled';

export function ContactFilter({ value, onChange }) {
  return (
    <FindText>
      Find contacts by name
      <FindValue value={value} onChange={onChange}></FindValue>
    </FindText>
  );
}
