// import { useState, useEffect } from "react";


import Clothes from "./Components/Clothes/Clothes";
import Cover from "./Components/Cover/Cover";
import Electronics from "./Components/Electronics/Electronics";
import Navbar from "./Components/Navbar/Navbar";
// import Selling from "./Components/Selling/Selling";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Product from "./Components/Product/Product";
import Furniture from "./Components/Furnitures/Furniture";
import Home from "./Home";
import Cart from "./Components/Cart/Cart";
import MainElectronics from "./Components/M-Electronics/M-electronics";

function App() {
  return (
    <Router>

      <div className="App">
        {/* navbar */}
        <Navbar />
        {/* cover top */}

        <Switch>
          <Route exact path="/">
            {/* cover*/}
            {/* Home products containing top selling, electronics,furnitures and clothing */}
            <Cover />
            <Home />
          </Route>

          <Route path="/electronics" component={MainElectronics}/>
          <Route path="/clothes" component={Clothes} />
          <Route path="/furniture" component={Furniture} />
          <Route path="/cart" component={Cart} />
          <Route path="/product/:id" component={Product} />
          <Route path="/electronics" component={MainElectronics} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
