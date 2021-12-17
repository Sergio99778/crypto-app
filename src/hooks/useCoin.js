import React, { Fragment, useState } from 'react';

export const useCoin = (label = 'Options', coinsNames = ['USD']) => {
  const [coin, setCoin] = useState('');

  const handleChange = (e) => {
    setCoin(e.target.value);
  };

  const SelectCoin = () => (
    <Fragment>
      <label htmlFor="">{label}</label>
      <select onChange={handleChange} value={coin} name="" id="">
        {coinsNames.map((coin) => (
          <option key={coin} value={coin}>
            {coin}
          </option>
        ))}
      </select>
    </Fragment>
  );

  return [coin, setCoin, SelectCoin];
};
