import styled from 'styled-components';

export const FormRegister = styled.form`
  width: 320px;
  margin: 0 auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
  font-size: 18px;
`;

export const InputRegister = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: 2px solid #DA70D6;
  border-radius: 3px;
  margin-top: 3px;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
    font: inherit;
    font-size: 16px;
  }
`;

export const Button = styled.button`
  // display: inline-block;
  font: inherit;
  width: 100%;
  height: 35px;
  border: 2px solid #DA70D6;
  border-radius: 3px;
  background-color: #DA70D6;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    background-color: #FFA500;
    color: #ffff;
    border: 2px solid #FFA500;
  }
`;