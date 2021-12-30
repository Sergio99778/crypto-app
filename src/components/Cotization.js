import React from "react";
import styled from "@emotion/styled";

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
  if (Object.keys(result) === 0) return;
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

export default Cotization;
