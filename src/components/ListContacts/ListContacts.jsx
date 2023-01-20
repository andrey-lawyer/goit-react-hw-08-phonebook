import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectGetVisibleContacts } from '../../redux/selectors/selectors';
import { deleteContact } from '../../redux/contacts/contactOperations';
import Modal from '../Modal/Modal';
import {
  ButtonDel,
  ButtonEdit,
  ItemContact,
  NameUser,
  ListContacts,
  Phone,
  Buttons,
} from './ListContacts.styled';
import { useEffect } from 'react';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);
  const visibleContacts = useSelector(selectGetVisibleContacts);
  const [contact, setContact] = useState(null);
  const onClickModal = contactModal => {
    setContact(contactModal);
  };

  const onClickContact = () => {
    setContact(null);
  };

  return (
    <>
      <ListContacts>
        {visibleContacts.map(({ name, number, id }) => (
          <ItemContact key={id}>
            <NameUser>{name}:</NameUser>
            <Phone>{number}</Phone>
            <Buttons>
              <ButtonEdit
                type="button"
                onClick={() => onClickModal({ name, number, id })}
              >
                Edit
              </ButtonEdit>
              <ButtonDel
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </ButtonDel>
            </Buttons>
          </ItemContact>
        ))}
      </ListContacts>
      {contact && <Modal contact={contact} onClickContact={onClickContact} />}
    </>
  );
};

export default ContactList;
