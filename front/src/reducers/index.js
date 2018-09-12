import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';
import itemsReducer from './items';
import test from './test'

const allReducers = combineReducers({
  items: itemsReducer,
  form: formReducer,
  test,
});

export default allReducers;