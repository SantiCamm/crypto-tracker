import React from "react";
import Crypto from "../Crypto";
import {CryptoListContainer} from './CryptoListElements'

const CryptoList = ({ cryptos }) => {
  return (
    <CryptoListContainer>
        {cryptos.map((crypto) => {
          return <Crypto key={crypto.id} crypto={crypto} />;
        })}
    </CryptoListContainer>
  );
};

export default CryptoList;
