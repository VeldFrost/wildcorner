import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchItems } from '../actions/items';

class Itempage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchItems());
  }

  render() {
    return (
      <div className="Itempage">
        {
          this.props.items.map(item => (
            <div key={item.id}><img src={item.photo} height="50px" width="50px" />{item.title} / <img src="arrow.svg" height="20px" width="20px" /> {item.location} / {item.price}€ / {item.type}<hr />
            </div>
          ))
        }
      </div>
    );
  }
}

const mstp = ({ items }) => ({
  items: items.list
});

export default connect(mstp)(Itempage);