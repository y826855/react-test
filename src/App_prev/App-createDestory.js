import { useState, useEffect } from "react";
//import react  from "react";

function App() {

  const [showing, setShowing] = useState(false);

  const onToggle = ()=> setShowing((prev)=> !prev);

  function Hello()
  {
    function hiFn()
    {
      console.log("Hi :)"); 
      return byFn;
    }
    function byFn()
    {
      console.log("bye :(");
    }

    useEffect(hiFn,[]);

    return <h1>hi</h1>;
  }

  return (
    <div>
      <button onClick={onToggle}>hi</button>
      {showing? <Hello/> : null}
    </div>
  );
}

export default App;
