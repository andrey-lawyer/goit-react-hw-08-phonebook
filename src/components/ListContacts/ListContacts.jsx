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
  Email,
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
        {visibleContacts.map(({ name, phone, email, _id }) => (
          <ItemContact key={name}>
            <NameUser>{name}:</NameUser>
            <Phone>{phone}</Phone>
            <Email>{email}</Email>

            <Buttons>
              <ButtonEdit
                type="button"
                onClick={() => onClickModal({ name, phone, email, _id })}
              >
                Edit
              </ButtonEdit>
              <ButtonDel
                type="button"
                onClick={() => dispatch(deleteContact(_id))}
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
