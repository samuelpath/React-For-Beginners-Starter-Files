import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {
  render() {
    const { fishes, order } = this.props;

    const obj = Object
      .keys(order)
      .map(key => fishes[key].price * order[key]);
    console.log("order: " + JSON.stringify(order));
    console.log("fishes: " + JSON.stringify(fishes));
    console.log("obj: " + obj);

    return (
      <div>
        <h2>Order</h2>
        <ul className="order">
          {
            Object
              .keys(order)
              .map(key => <p>{fishes[key].name}, {order[key]} lbs, {formatPrice(fishes[key].price * order[key])}</p>)
          }
        </ul>
        <h2>Total: </h2>
      </div>
    )
  }
}

export default Order;