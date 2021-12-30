import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

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

export const useCrypto = (label = 'Options', listCrypto) => {
  const [crypto, setCrypto] = useState('');

  const handleChange = (e) => {
    setCrypto(e.target.value);
  };

  const SelectCrypto = () => (
    <Fragment>
      <Label htmlFor="">{label}</Label>
      <Select onChange={handleChange} value={crypto} name="" id="">
        {listCrypto.map((crypto) => (
          <option key={crypto.CoinInfo.Id} value={crypto.CoinInfo.Name}>
            {crypto.CoinInfo.FullName}
          </option>
        ))}
      </Select>
    </Fragment>
  );

  return [crypto, SelectCrypto];
};

useCrypto.propTypes = {
  label: PropTypes.string,
  listCrypto: PropTypes.object.isRequired
}
