import { useSelector, useDispatch } from 'react-redux';
import { getContactsNames, getFilter } from '../../redux/selectors';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from '../../redux/operations';
import { List, ListItem, Name, PhoneNumber, DeleteBtn } from './styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContactsNames);
  const queryFilter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(queryFilter?.toLowerCase())
  );

  const contactsForRender = queryFilter ? filteredContacts : items;

  return (
    <List>
      {isLoading && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
      {contactsForRender.map(({ name, id, phone }) => {
        return (
          <ListItem key={id}>
            <Name>
              {name}: <PhoneNumber>{phone}</PhoneNumber>
            </Name>
            <DeleteBtn
              id={id}
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              Delete
            </DeleteBtn>
          </ListItem>
        );
      })}
    </List>
  );
};
