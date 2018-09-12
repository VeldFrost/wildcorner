import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {addElement} from '../actions';


class Page1 extends Component {

  constructor(props){
      super(props);
      this.state = {
        valueText:''
      }
  }

  render() {
    
    const {tab, addElement} = this.props;
    return (
      <div className="Page1">
        Test Reducers
        {
          tab.map( (x, i) => {
            return <p key={i}>{x}</p>
          })
        }
        <input type='text' name="test" ref="element"/>
        <button onClick={() => addElement(this.refs.element.value)}>Ajouter</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    tab : state.test
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addElement}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Page1);