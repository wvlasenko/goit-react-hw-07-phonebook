import {
  fetchContacts,
  addContact,
  removeContact,
} from './contacts-operations';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  filterContacts,
} from './contacts-actions';

import {
  getContacts,
  getFilter,
  getLoader,
  getError,
  getVisibleContacts,
} from './contacts-selectors';

// eslint-disable-next-line import/no-anonymous-default-export
export {
  fetchContacts,
  addContact,
  removeContact,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  filterContacts,
  getContacts,
  getFilter,
  getLoader,
  getError,
  getVisibleContacts,
};
