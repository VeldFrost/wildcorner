import React, { Component } from 'react';
import FormItemSearch from './FormItemSearch';
import { connect } from 'react-redux';
import { fetchItems, searchItem } from '../actions/items';

class Search extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchItems());
  }

  submitForm(values) {
    this.props.dispatch(searchItem(values));
  }

  render() {
    return (
      <div className="Home">

        <FormItemSearch onSubmit={this.submitForm}/>

      </div>
    );
  }
}

const mstp = ({ items }) => ({
  items: items.list
});

export default connect(mstp)(Search);




