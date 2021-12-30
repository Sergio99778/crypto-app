import React, {useState} from 'react';
import styled from '@emotion/styled';
import img from './img/crypto.png';

//Components
import Form from './components/Form';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 10px;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Img = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {

  const [coin,setCoin] = useState('')
  const [crypto,setCrypto] = useState('')

  return (
    <Container>
      <div>
        <Img src={img} alt="Crypto image" />
      </div>
      <div>
        <Heading>Cotize your Crypto </Heading>
        <Form setCoin={setCoin} setCrypto={setCrypto} />
      </div>
    </Container>
  );
}

export default App;
