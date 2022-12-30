import React, { Component } from 'react';
import { FindText, FindValue } from './ContactFilter.styled';

class ContactFilter extends Component {
  state = {
    name: '',
    number: '',
    filter: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onHandleSubmit(this.state);
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <FindText>
        Find contacts by name
        <FindValue></FindValue>
      </FindText>
    );
  }
}

export default ContactFilter;

//     const { filter } = this.state;
// <FindValue value={this.state.filter}></FindValue>;
