import styled from 'styled-components';

export const List = styled.ul`
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Name = styled.p`
  font-weight: 500;
  margin: 0;
`;

export const PhoneNumber = styled.span`
  font-size: 14px;
`;

export const DeleteBtn = styled.button`
  padding: 5px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  border: 1px solid red;
  backgroumd-color: #8e8e8e;
  color: red;
  outline: none;
  transition: color 250ms linear, background-color 250ms linear;
  :hover {
    background-color: red;
    color: #fff;
  }
`;
