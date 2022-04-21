import Button from "../Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react";
//import react  from "react";

function App() {

  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] =useState("");
  const [showing, setShowing] = useState(false);

  const onToggle = ()=> setShowing((prev)=> !prev);
  const onClick = ()=> setCounter((prev)=> prev+1);
  const onChange= (event)=> setKeyword(event.target.value);
  console.log("i run all the time");

  function Hello()
  {
    useEffect(()=>{
      console.log("created :)");
      return ()=> console.log("destroyed :(");
    },[])
    return <h1>hello</h1>;
  }

  //state에 의해 다시 랜더되더라도 한번만 실행됨
  useEffect(()=>
  {
    console.log("call the api");
  //}, []);    
  }, [counter]);
  
  //'keyword' 상태가 변할때만 실행됨
  useEffect(()=>
  {
    if(keyword !== "" && keyword.length > 6)
      console.log("serch for", keyword);
  },[keyword]);
  //keyword 나 counter 가 바뀔때 실행됨
  useEffect(()=>
  {
    console.log("use both");
  },[keyword, counter]);

  return (
    <div>
      <input 
        tpye="text" 
        placeholder="Search here..."
        value={keyword}
        onChange={onChange}
      />


      <h1 className={styles.title}>Welcom to REACT!</h1>
      <h1 className={styles.title}>THIS IS MODULE STYLE</h1>
      <Button text={"Continue"} clicked={onClick} />
      <button onClick={onToggle}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello/> : null}
      <h1>{counter}</h1>
    </div>
  );
}

export default App;
