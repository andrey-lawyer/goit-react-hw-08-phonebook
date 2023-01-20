import { createSelector } from '@reduxjs/toolkit';

import { selectFilter } from './../../redux/filter/selectFilter';
import { selectContacts } from './../../redux/contacts/selectContacts';

export const selectGetVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
