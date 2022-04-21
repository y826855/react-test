import { useState } from "react";

function App() {

  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event)=> setToDo(event.target.value);
  const onSubmit = (event)=>
  {
    event.preventDefault();
    if(toDo === "") return;

    // ...array 하면 배열의 원소들을 반환해줌
    setToDos((prevArray)=> [...prevArray, toDo]);
    setToDo("");

    //console.log(toDos);
  }

  console.log(toDos);


  return (
    <div>
      <h1>MY TODOS </h1>

      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} 
          value={toDo} 
          type="text" 
          placeholder="Write your to do.."
        />

        <button>Add To Do</button>
      </form> 

      <hr/>
      <ul>
        {toDos.map((item, index)=> <li key={index}>{item}</li>)}
        {/*toDos.map((item)=> item.toUpperCase())*/}
        {/*key 값을 지정하지 않으면 콘솔에서 에러 나타남*/}
        {/*array.map은 배열의 요소에 하나하나 접근할수 있음. 마치 foreach it 같음*/}
      </ul>  
    </div>
  );
}

export default App;
