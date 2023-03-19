import { AiOutlineContacts } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  min-height: calc(100vh - 50px);
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 48;
  text-align: center;
  color: #663399;
  gap: 100px;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Home() {
  return (
    <Container>
      <Title>
        Phone Contacts{' '}
        <IconContext.Provider value={{ color: '#DA70D6', size: 200 }}>
          <Icon>
            <AiOutlineContacts />
          </Icon>
        </IconContext.Provider>
      </Title>
    </Container>
  );
}