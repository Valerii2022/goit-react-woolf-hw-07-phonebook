import styled from 'styled-components';

export const Form = styled.form`
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #0070ba;
  border-radius: 5px;
  padding: 15px;
`;

export const AddContactBtn = styled.button`
  margin-top: 10px;
  font-weight: 700;
  cursor: pointer;
  padding: 5px;
  width: 100px;
  border-radius: 5px;
  border: 1px solid #0070ba;
  backgroumd-color: #8e8e8e;
  color: #0070ba;
  outline: none;
  transition: color 250ms linear, background-color 250ms linear;
  :hover {
    background-color: #0070ba;
    color: #fff;
  }
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 18px;
  font-weight: 500;
`;

export const FormInput = styled.input`
  width: 300px;
  font-size: 16px;
  padding: 5px;
  color: #8e8e8e;
  border: 1px solid #8e8e8e;
  outline: none;
  border-radius: 3px;
  transition: box-shadow 250ms linear;
  :focus {
    box-shadow: 0px 0px 8px #0070ba;
  }
`;
