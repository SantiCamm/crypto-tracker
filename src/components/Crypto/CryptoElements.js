import styled from "styled-components";

export const CryptoContainer = styled.li`
  display: flex;
  padding: 15px 15px;
  margin: 8px 0;
  max-width: 1100px;
  background: white;
  border-radius: 5px;
  color: #3d3d3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  /* flex-wrap: wrap; */


  :hover {
    transform: scale(1.01);
  }
`;

export const CryptoPrincipal = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
  min-width: 400px;
`;

export const CryptoData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 100px;
`;

export const CryptoRank = styled.p`
  width: 70px;
`;

export const CryptoImg = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 18px;
`;

export const CryptoName = styled.h3`
  width: 200px;
`;

export const CryptoSymbol = styled.p`
  text-transform: uppercase;
`;

export const CryptoPrice = styled.p`
  width: 120px;
`;

export const CryptoPriceChange = styled.p`
  color: ${({ price }) => (price > 0 ? "green" : "red")};
  width: 100px;
`;

export const CryptoVolume = styled.p`
  width: 150px;
`;
export const CryptoMktCap = styled.p`
  width: 240px;
`;
