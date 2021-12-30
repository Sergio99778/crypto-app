import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';

//Hooks
import { useCoin } from '../hooks/useCoin';
import { useCrypto } from '../hooks/useCrypto';

//Components
import ErrorMessage from './Error'

const InnerForm = styled.form``;

const Button = styled.button`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;
  text-transform: uppercase;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Form = () => {

  const [error,setError] = useState(false)

  const coins = ['USD', 'MXN', 'EUR', 'GBP', 'COD'];

  const [listCrypto, setListCrypto] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

      const result = await axios.get(url);

      setListCrypto(result.data.Data);
    };
    getData();
  }, []);

  //Creating SelectCoin
  const [coin, setCoin, SelectCoin] = useCoin('Select your coin', coins);
  //Crea
  const [crypto, setCrypto, SelectCrypto] = useCrypto('Select your crypto', listCrypto);

  const handleSubmit = (e) => {
    e.preventDefault();
    //validate
    if(coin === '' || crypto === ''){
      setError(true)
      return
    }

    //Pass data to App component
    setError(false)
  };

  return (
    <InnerForm onSubmit={handleSubmit}>
      { error ? <ErrorMessage message={'Fill the required fields'} />  :null}
      <SelectCoin />
      <SelectCrypto />
      <Button type="submit">Cotize crypto</Button>
    </InnerForm>
  );
};

export default Form;
