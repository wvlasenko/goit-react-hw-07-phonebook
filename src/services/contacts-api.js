import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

export async function fetchContacts() {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
}

export async function addContact(contact) {
  return axios.post('/contacts', contact).then(({ data }) => data);
}

export const deleteContact = contactId => {
  return axios.delete(`/contacts/${contactId}`);
};
