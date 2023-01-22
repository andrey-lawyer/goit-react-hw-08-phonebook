import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectLoading,
} from 'redux/contacts/contactsSelectors';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  return { contacts, loading, error };
};
