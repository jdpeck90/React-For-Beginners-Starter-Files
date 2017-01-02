import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  constructor() {
    super()
    this.renderInventory = this.renderInventory.bind(this);
  }

  handleChange(e, key) {
    const fish = this.props.fishes[key];
    //take a cioy of that fish and update it with the new data

    const updatedFish = {
      ...fish,
      [e.target.name]: e.target.value
    }
      this.props.updateFish(key, updatedFish);
  }

renderInventory(key) {
      const fish = this.props.fishes[key];
  return (
      <div className="fish-edit" key={key}>
          <input type="text" name="name" value={fish.name} placeholder="Fish Name" onChange={(e) => this.handleChange(e,  key)}/>
          <input type="text" name="price"  value={fish.price} placeholder="Fish Price" onChange={(e) => this.handleChange(e, key)} />
        <select type="text" name="status" value={fish.status} placeholder="Fish Status" onChange={(e) => this.handleChange(e, key)} >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
          <textarea type="text" name="desc" value={fish.desc} placeholder="Fish Desc" onChange={(e) => this.handleChange(e, key)} />
          <input type="text" name="image" value={fish.image} placeholder="Fish Images" onChange={(e) => this.handleChange(e, key)} />
          <button onClick={() => this.props.removeFish(key )}>Remove Fish</button>
      </div>
    )
}

  render() {
    return (
      <div>
        <h1>Inventory</h1>
        {Object.keys(this.props.fishes).map(this.renderInventory)}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSamples}>LoadSample Fishes</button>
      </div>
      )
  }
}

export default Inventory;
