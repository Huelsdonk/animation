import React from 'react';
import Home from "./components/Home"
import Scroll from "./components/Scroll"
import DragUni from "./components/DragUni"
import { Switch, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/scroll">
            
            <Scroll />
          </Route>
          <Route exact path="/dragUni">
            <DragUni/>
          </Route>
        </Switch>
       
    </div>
  );
}

export default App;
