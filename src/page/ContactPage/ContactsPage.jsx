import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';

import { fetchContacts } from 'redux/contacts/contactOperations';

import ContactForm from 'components/Form/Form';
import Filter from 'components/Filter';
import ContactList from 'components/ListContacts/ListContacts';

import {
  Loader,
  Message,
  TitleH2,
  Contacts,
  TitleBook,
} from './ContactPage.styled';
import { useContacts } from 'hooks/useContacts';
import { notify } from 'services/phoneBookApi';
import { MyThreeDots } from 'components/Loaders/MyThreeDots';

export const ContactsPage = () => {
  const { contacts, loading, error } = useContacts();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (!error) return;
    notify(error);
  }, [error]);

  return (
    <Contacts>
      <TitleBook>Phonebook</TitleBook>
      <>
        <ContactForm />
        {loading && (
          <Loader>
            <MyThreeDots />
          </Loader>
        )}
        <TitleH2>Your contacts</TitleH2>
        {contacts.length === 0 ? (
          <Message>Your phone book is empty, add a contact</Message>
        ) : (
          <>
            <Filter />
            <ContactList />
          </>
        )}
      </>
    </Contacts>
  );
};

export default ContactsPage;
