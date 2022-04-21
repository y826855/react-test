import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState(0);
  const [selectionCoin, setSelectionCoin] = useState("");
  
  function InputDollar(input)
  {
    setDollar(input.target.value);
  }
  function coinSelection(select)
  {
    const coin = coins[select.target.value];
    setSelectionCoin(coin);
  }

  function YourCoin()
  {
    if(selectionCoin === "") return null;
    else console.log(dollar / selectionCoin.quotes.USD.price);
    const calced = dollar / parseFloat(selectionCoin.quotes.USD.price);
    return <div>your {selectionCoin.symbol} : {calced}</div>;
  }

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

  //console.log(<selct></selct>)

  let idx = 0;

  return (
    <div>
      <h1>THE COINS! {loading? "": `(${coins.length})`}</h1>
      {loading ? <strong>LOADING...</strong> : 
        <select onChange={coinSelection}>
          {
            coins.map((coin) => 
              <option value={idx++} key={coin.id}>{coin.name} ({coin.symbol} : ${coin.quotes.USD.price} USD)</option>)
          }
        </select>
      }

      <hr/>
      <input 
        value={dollar} 
        onChange={InputDollar}
        tpye="text" 
        placeholder="input dallor"
      />
      <YourCoin/>

    </div>
  );
}

export default App;
