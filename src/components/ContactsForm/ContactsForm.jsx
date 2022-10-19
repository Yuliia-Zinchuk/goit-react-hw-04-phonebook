import PropTypes from 'prop-types';
import { useState } from 'react';
//import React, { Component } from 'react';
import css from './ContactsForm.module.css';

// export class ContactsForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

export const ContactsForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // const handleChange = e => {
  //   const { name, value } = e.target;

  //   this.setState({
  //     [name]: value,
  //   });
  // };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }

    // if (e.target.name === 'name') {
    //   setName(e.target.value);
    // }
    // if (e.target.name === 'number') {
    //   setNumber(e.target.value);
    // }
  };

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   this.props.onSubmit(this.state);
  //   this.reset();
  // };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ name, number });
    console.log(name);
    console.log(number);
    reset();
  };

  // const reset = () => {
  //   this.setState({ name: '', number: '' });
  // };

  const reset = () => {
    setName('');
    setNumber('');
    //  this.setState({ name: '', number: '' });
  };

  // render() {
  // const {
  //   state: { name, number },
  //   handleChange,
  // } = this;
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.inputForm}>
        <span>Name</span>
        <input
          className={css.input}
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className={css.inputForm}>
        <span>Number</span>
        <input
          className={css.input}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
        />
      </label>

      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
//}

ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
