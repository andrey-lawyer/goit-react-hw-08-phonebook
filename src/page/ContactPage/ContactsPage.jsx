import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';
import { ThreeDots } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';

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

export const ContactsPage = () => {
  const { contacts, loading, error } = useContacts();

  const notify = error =>
    toast(`${error}! Something went wrong...`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

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
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />
        <ContactForm />
        {loading && (
          <Loader>
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#4fa94d"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
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
