import React from "react";
import {
  CryptoContainer,
  CryptoRank,
  CryptoImg,
  CryptoName,
  CryptoSymbol,
  CryptoPrice,
  CryptoPriceChange,
  CryptoVolume,
  CryptoMktCap,
  CryptoPrincipal,
  CryptoData,
} from "./CryptoElements";

const Crypto = ({ id, crypto }) => {
  return (
    <CryptoContainer>
      <CryptoPrincipal>
        <CryptoRank>{crypto.market_cap_rank}</CryptoRank>
        <CryptoImg src={crypto.image}></CryptoImg>
        <CryptoName>{crypto.name}</CryptoName>
        <CryptoSymbol>{crypto.symbol}</CryptoSymbol>
      </CryptoPrincipal>
      <CryptoData>
        <CryptoPrice>${crypto.current_price}</CryptoPrice>
        <CryptoPriceChange price={crypto.price_change_percentage_24h}>
          {crypto.price_change_percentage_24h.toFixed(2)}%
        </CryptoPriceChange>
        <CryptoVolume>${crypto.total_volume}</CryptoVolume>
        <CryptoMktCap>Mkt Cap: ${crypto.market_cap}</CryptoMktCap>
      </CryptoData>
    </CryptoContainer>
  );
};

export default Crypto;
