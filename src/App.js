import React from 'react';
import Anim1 from "./components/Anim1"
import Home from "./components/Home"
import Scroll from "./components/Scroll"
import { Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/scroll">
            <Scroll/>
          </Route>
        </Switch>
       
    </div>
  );
}

export default App;
