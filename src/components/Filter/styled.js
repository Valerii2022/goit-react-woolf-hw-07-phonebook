import styled from 'styled-components';

export const Form = styled.form`
  margin-left: 15px;
  margin-bottom: 30px;
  width: 330px;
`;

export const FindLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 18px;
  font-weight: 500;
`;

export const FindInput = styled.input`
  font-size: 16px;
  width: 300px;
  padding: 5px;
  color: #8e8e8e;
  border: 1px solid #8e8e8e;
  outline: none;
  border-radius: 3px;
  transition: box-shadow 250ms linear;
  :focus {
    box-shadow: 0px 0px 8px #0070ba;
`;
