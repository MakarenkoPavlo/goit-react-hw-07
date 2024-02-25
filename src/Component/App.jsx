import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchForm from './SearchForm/SearchForm';
import { selectLoading, selectError } from '../redux/selectors'
import { fetchContacts } from '../redux/operations'

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
    <div>
     
        <h1>Phonebook</h1>
      <ContactForm />
      <SearchForm />
       {loading && !error && <b>Request in progress...</b>}
      <ContactList />
      {error && <p>Failed to fetch contacts</p>}
   
      
    </div>
  );
}