import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue, getContacts } from '../redux/selectors';
import { setFilterValue } from '../redux/filterSlice';
import {
  addContactValue,
  deleteContactValue,
  selectContacts,
} from '../redux/contactsSlice';

import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import ContactForm from './ContactForm/ContactForm';

const contactsArray = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);
  const contacts = useSelector(getContacts);

  const handleFilter = evt => {
    dispatch(setFilterValue(evt.target.value));
  };
  const pattern = filter.toLowerCase().trim();
  const filteredValue = contacts.filter(({ name }) =>
    name.toLowerCase().includes(pattern)
  );

  const addContact = newContact => {
    dispatch(addContactValue(newContact));
  };

  const deleteContact = contactId => {
    dispatch(deleteContactValue(contactId));
  };

  useEffect(() => {
    const savedContacts = window.localStorage.getItem('saved-contacts');

    if (savedContacts == null) {
      dispatch(selectContacts(contactsArray));
    } else {
      if (JSON.parse(savedContacts).length > 0 && contacts.length === 0) {
        dispatch(selectContacts(JSON.parse(savedContacts)));
      }
    }

    window.localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox onChange={handleFilter} />
      <ContactList contacts={filteredValue} onDelete={deleteContact} />
    </div>
  );
}

export default App;
