import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  
  
  useEffect(()=> 
  {//url로 부터 데이터 비동기 받기
    fetch("https://api.coinpaprika.com/v1/tickers").then(
      (response)=> response.json()
    ).then(json => 
      {
        setCoins(json);
        setLoading(false);
      });
  },[]);

  //https://api.coinpaprika.com/v1/tickers


  return (
    <div>
      <h1>THE COINS! {loading? "": `(${coins.length})`}</h1>
      {loading ? <strong>LOADING...</strong> : 
        <select>
          {coins.map((coin) => 
            <option key={coin.rank}>{coin.name} ({coin.symbol} : ${coin.quotes.USD.price} USD)</option>)}
        </select>
      }
    </div>
  );
}

export default App;
