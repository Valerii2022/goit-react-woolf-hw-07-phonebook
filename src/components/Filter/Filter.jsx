import { useDispatch, useSelector } from 'react-redux';
import { FindLabel, Form, FindInput } from './styled';
import { getFilter } from '../../redux/selectors';
import { filter } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const queryFilter = useSelector(getFilter);

  return (
    <Form>
      <FindLabel>
        Find contacts by name
        <FindInput
          type="text"
          name="searchName"
          value={queryFilter ?? ''}
          onChange={e => dispatch(filter(e.target.value))}
        />
      </FindLabel>
    </Form>
  );
};
