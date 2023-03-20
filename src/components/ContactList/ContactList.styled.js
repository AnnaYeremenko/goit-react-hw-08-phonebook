import styled from 'styled-components';

export const ListContact = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  margin-left: 20px;
  max-width: 500px;
  padding: 5px;
`;
export const ButtonDelete = styled.button`
  margin-top: 10px;
  margin-bottom: 5px;
  padding: 0 16px 0 16px;
  background-color: white;
  border: none;
  border-radius: 15px;
  font-family: inherit;
  font-size: 20px;
  height: 40px;
  max-width: 100px;
  color: black;
  cursor: pointer;
  :hover {
    color: #ffff;
    background-color: #800080;
    cursor: pointer; }
`;
export const ContactItem = styled.li`
  display: flex;
  font-size: 20px;
  align-items: center;
  gap: 20px;
  justify-content: space-around; 
  color: #800080;
`;
export const WrapperIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;