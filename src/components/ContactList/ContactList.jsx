import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(item => {
        return (
          <li className={css.contactBox} key={item.id}>
            <Contact contactItem={item} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
