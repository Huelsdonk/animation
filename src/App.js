import React from 'react';
import Anim1 from "./components/Anim1"
import Home from "./components/Home"
import Scroll from "./components/Scroll"
import DragUni from "./components/DragUni"
import { Switch, Route} from "react-router-dom"
import { bunchOfUnicorns } from "./components/Scroll/bunchOfUnicorns"
import { bunchMoreUnicorns } from "./components/Scroll/bunchMoreUnicorns"


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
