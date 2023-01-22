import { createSelector } from '@reduxjs/toolkit';

import { selectFilter } from '../filter/filterSelectors';
import { selectContacts } from '../contacts/contactsSelectors';

export const selectGetVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
