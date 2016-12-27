import React from 'react';
import { formatPrice } from '../helpers'

class Fish extends React.Component {
  render() {
    //ES6 Destructuring
    const { details, index } = this.props;
    // const { details } = this.props;
    const isAvailable = details.status === 'available';
    const buttonText = isAvailable ? 'Add to Order' : 'Sold Out';
    return (
      <li className="menu-fish">
        <img src={details.image} alt={details.name} />
          <h3 className="fish-name">
            {details.name}
            <span className="price">{formatPrice(details.price)}</span>
          </h3>
            <p>{details.desc}</p>
          <button onClick={() => this.props.addToOrder(index)} disabled={!isAvailable}>{buttonText}</button>
      </li>
      )
  }
}
// onClick={this.props.addToOrder.bind(null,'fish-1')}

export default Fish;
