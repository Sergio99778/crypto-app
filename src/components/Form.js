import React from 'react';
import styled from '@emotion/styled';

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
  return (
    <InnerForm>
      <Button type="submit">Cotize crypto</Button>
    </InnerForm>
  );
};

export default Form;
