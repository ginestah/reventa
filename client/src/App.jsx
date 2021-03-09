import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'

import Products from "../src/screens/Products/Products"

function App() {
  return (
    <div className="App">
              <Route exact path="/products">
          <Products  />
        </Route>
    </div>
  );
}

export default App;
