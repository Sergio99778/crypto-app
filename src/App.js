import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import img from "./img/crypto.png";
import axios from "axios";

//Components
import Form from "./components/Form";
import Cotization from "./components/Cotization";
import Spinner from "./components/Spinner";

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
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {
  const [coin, setCoin] = useState("");
  const [crypto, setCrypto] = useState("");
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (coin === "") return;

    //Consult api
    const getData = async () => {
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`;
      const response = await axios.get(url);

      //show Spinner
      setLoading(true);

      setTimeout(() => {
        //Remove Spinner
        setLoading(false);
        //Save data
        setResult(response.data.DISPLAY[crypto][coin]);
      }, 30);
    };
    getData();
  }, [coin, crypto]);

  const componente = loading ? <Spinner /> : <Cotization result={result} />;

  return (
    <Container>
      <div>
        <Img src={img} alt="Crypto image" />
      </div>
      <div>
        <Heading>Cotize your Crypto </Heading>
        <Form setCoin={setCoin} setCrypto={setCrypto} />
        {componente}
      </div>
    </Container>
  );
}

export default App;
