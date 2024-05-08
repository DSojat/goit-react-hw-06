import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectNameFilter, selectContacts } from '../redux/selectors';
import { fetchContacts } from '../redux/contactsSlice';

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
  const contacts = useSelector(selectContacts);

  const filter = useSelector(selectNameFilter);
  const pattern = filter.toLowerCase().trim();
  const filteredValue = contacts.filter(({ name }) =>
    name.toLowerCase().includes(pattern)
  );

  useEffect(() => {
    const savedContacts = window.localStorage.getItem('saved-contacts');

    if (savedContacts == null) {
      dispatch(fetchContacts(contactsArray));
    } else {
      if (JSON.parse(savedContacts).length > 0 && contacts.length === 0) {
        dispatch(fetchContacts(JSON.parse(savedContacts)));
      }
    }

    window.localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={filteredValue} />
    </div>
  );
}

export default App;
