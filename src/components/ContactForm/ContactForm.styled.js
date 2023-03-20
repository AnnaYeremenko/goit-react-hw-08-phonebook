import styled from 'styled-components';

export const FormContact = styled.form`
display: flex;
flex-direction: column;
padding: 5px;
collor: red;
`;

export const InputTitle = styled.label`
display: block;
font-weight: bold;
font-size: 24px;
margin-bottom: 10px;
color: pink;
`;
export const InputText = styled.input`
font-size: 20px;
min-width: 300px;
min-height: 40px;
color: #800080;
border-radius: 10px;
margin-bottom: 10px;
`;
export const Button = styled.button`
display: block;
margin-top: 20px;
margin-bottom: 10px;
padding: 0 16px 0 16px;
height: 40px;
border-radius: 15px;
color: black;
background-color: white;
font-size: 20px;
cursor: pointer;
:hover {
  color: #ffff;
  background-color: #800080;
  cursor: pointer; }
`;