import React from "react";
import styled from "@emotion/styled";
import PropTypes from 'prop-types';

const ResultContainer = styled.div`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
`;

const Paragraph = styled.p`
  font-size: 18px;

  span {
    font-weight: bold;
  }
`;

const Price = styled.p`
  font-size: 30px;

  span {
    font-weight: bold;
  }
`;

const Cotization = ({ result }) => {
  if (Object.keys(result).length === 0) {
    return null;
  }
  return (
    <ResultContainer>
      <Price>
        Price: <span>{result.PRICE}</span>
      </Price>
      <Paragraph>
        Max: <span>{result.HIGHDAY}</span>
      </Paragraph>
      <Paragraph>
        Min: <span>{result.LOWDAY}</span>
      </Paragraph>
      <Paragraph>
        Last 24h: <span>{result.CHANGEPCT24HOUR}</span>
      </Paragraph>
      <Paragraph>
        Last price update: <span>{result.LASTUPDATE}</span>
      </Paragraph>
    </ResultContainer>
  );
};

Cotization.propTypes = {
  result: PropTypes.object.isRequired
}

export default Cotization;
