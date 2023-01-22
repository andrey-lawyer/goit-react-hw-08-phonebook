import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export async function getContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function postContact(newContact) {
  const { data } = await axios.post('/contacts', newContact);
  return data;
}

export async function deleteContact(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
}

export async function updateContact({ id, name, number }) {
  const { data } = await axios.patch(`/contacts/${id}`, { name, number });
  return data;
}

export const notify = error =>
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
