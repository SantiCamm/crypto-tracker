import axios from "axios";
import { useEffect, useState } from "react";

import Banner from './components/ui/Banner'
import Search from "./components/ui/Search";
import CryptoList from "./components/CryptoList";

function App() {
  const [cryptos, setCryptos] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCryptos(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredCryptos = cryptos.filter((crypto) => {
    return crypto.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div>
      <Banner />
      <Search getQuery={(q) => setQuery(q)} />
      <CryptoList cryptos={filteredCryptos} />
    </div>
  );
}

export default App;
