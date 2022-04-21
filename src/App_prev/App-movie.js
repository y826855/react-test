import
{
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Detail from "./routes/Detail";

import Home from "./routes/Home"

function App() {
  return <Router>
    <Switch>
      <Route path="/movie/:id">
        <Detail/>
      </Route>
      <Route path="/">
        <Home/>
      </Route>
    </Switch>

  </Router>;
}

//npm i react-router-dom@5.3.0
//현재 react 6 버전임. 6에서는 Switch => Routes로 변경됨
//https://nomadcoders.co/react-for-beginners/lectures/3291
export default App;
