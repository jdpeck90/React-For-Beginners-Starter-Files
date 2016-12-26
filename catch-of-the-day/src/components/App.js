import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';


class App extends React.Component {
  render() {
    console.log(this)
    return (

        <div className="catch-of-the-day">
        <div className="menu">
        <Header tagline="This seafood is off the Hook!"/>
          </div>
          <Order />
          <Inventory />
          </div>


      )
  }
}

export default App;
