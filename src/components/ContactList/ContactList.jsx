import { useSelector, useDispatch } from 'react-redux';
import {
  selectError,
  selectContacts,
  selectLoading,
} from '../../redux/selectors';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from '../../redux/operations';
import { List, ListItem, Name, PhoneNumber, DeleteBtn } from './styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List>
      {isLoading && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
      {contacts.map(({ name, id, phone }) => {
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
