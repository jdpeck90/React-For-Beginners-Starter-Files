import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  render() {
    return (
      <div>
    <h1>Inventory</h1>
    <AddFishForm addFish={this.props.addFish} />
      </div>
      )
  }
}

export default Inventory;
