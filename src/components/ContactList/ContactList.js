import { useDispatch, useSelector } from 'react-redux';
import { IconContext } from 'react-icons';
import { MdPermContactCalendar } from 'react-icons/md';
import {
  ButtonDelete,
  ContactItem,
  ListContact,
  WrapperIcon,
} from './ContactList.styled';
import { selectContacts } from '../../redux/contacts/contactsSlice';
import { selectFilters } from 'redux/contacts/filtersSlice';
import { deleteContact } from 'redux/contacts/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);
  const contacts = useSelector(selectContacts);
  // console.log(contacts);

  const getVizibleContact = () => {
    return filter
      ? contacts.filter(contact => contact.name.toLowerCase().includes(filter))
      : contacts;
  };
  const vizibleContact = getVizibleContact();
  // console.log(vizibleContact);

  return (
    <ListContact>
      {vizibleContact.map(contact => (
        <ContactItem key={contact.id}>
          <WrapperIcon>
            <IconContext.Provider value={{ color: '#DA70D6', size: 30 }}>
              <MdPermContactCalendar />
            </IconContext.Provider>
            {contact.name}: {contact.number}
          </WrapperIcon>

          <ButtonDelete
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </ButtonDelete>
        </ContactItem>
      ))}
    </ListContact>
  );
};