import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filters);

  const filteredContacts = contacts.filter((contact) => {
    if (contact && contact.name) {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    } else {
      return false;
    }
  });

  return (
    <div>
      {filteredContacts.length > 0 ?(<ul>
        {filteredContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>) : <p>No contacts found</p> }
      
    </div>
  );
};

export default ContactList;
