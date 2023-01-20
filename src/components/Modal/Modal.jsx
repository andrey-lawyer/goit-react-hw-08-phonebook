import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import {
  Overlay,
  ModalWindow,
  Form,
  Label,
  Input,
  Button,
  Paragraph,
} from './Modal.styled';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { updateContact } from '../../redux/contacts/contactOperations';
const loginInputIdName = nanoid();
const loginInputIdNumber = nanoid();

const Modal = ({ contact: { name, number, id }, onClickContact }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const onClickEscape = e => {
      if (e.code === 'Escape') {
        onClickContact();
      }
    };
    document.addEventListener('keydown', onClickEscape);
    return () => {
      document.removeEventListener('keydown', onClickEscape);
    };
  }, [onClickContact]);

  const handleBackdrop = event => {
    if (event.target === event.currentTarget) {
      onClickContact();
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const contact = { id, name, number };
    dispatch(updateContact(contact));
    onClickContact();
  };

  return ReactDOM.createPortal(
    <Overlay onClick={handleBackdrop}>
      <ModalWindow>
        <Form onSubmit={handleSubmit}>
          <Paragraph>Changing a contact's information {name}</Paragraph>
          <Label htmlFor={loginInputIdName}>Name</Label>
          <Input
            id={loginInputIdName}
            defaultValue={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <Label htmlFor={loginInputIdNumber}>Number</Label>
          <Input
            id={loginInputIdNumber}
            defaultValue={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <Button type="submit">Ok</Button>
        </Form>
      </ModalWindow>
    </Overlay>,
    document.body
  );
};

export default Modal;
