import React, { Component } from 'react';

import FormItem from './FormItem';

import { connect } from 'react-redux';
import { fetchItems, addItem } from '../actions/items';

class Userpage extends Component {

  // constructor(props) {
  //   super(props);
  //   this.submitForm = this.submitForm.bind(this);
  // }

  componentDidMount() {
    this.props.dispatch(fetchItems());
  }

  componentWillUpdate() {
    this.props.dispatch(fetchItems());
  }

  // submitForm(values) {
  //   this.props.dispatch(addItem(values));
  // }

  render() {
    return (
      <div className="UserItem">
        {this.props.items.map(item => (
          <div key={item.id}><img src={item.photo} height="50px" width="50px" />{item.title} / <img src="arrow.svg" height="20px" width="20px" /> {item.location} / {item.price}€ / {item.type}<hr />
          </div>
        ))
        }
        <FormItem />
      </div>
    );
  }
}

const mstp = ({ items }) => ({
  items: items.list
});

export default connect(mstp)(Userpage);