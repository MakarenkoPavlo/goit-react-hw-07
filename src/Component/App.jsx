import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchForm from './SearchForm/SearchForm';

export default function App() {
  return (
    <div>
     
        <h1>Phonebook</h1>
      <ContactForm />
      <SearchForm />
      <ContactList />
   
      
    </div>
  );
}