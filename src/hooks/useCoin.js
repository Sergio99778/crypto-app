import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.1rem;
`;

export const useCoin = (label = 'Options', coinsNames = ['USD']) => {
  const [coin, setCoin] = useState('');

  const handleChange = (e) => {
    setCoin(e.target.value);
  };

  const SelectCoin = () => (
    <Fragment>
      <Label htmlFor="">{label}</Label>
      <Select onChange={handleChange} value={coin} name="" id="">
        {coinsNames.map((coin) => (
          <option key={coin} value={coin}>
            {coin}
          </option>
        ))}
      </Select>
    </Fragment>
  );

  return [coin, SelectCoin];
};
