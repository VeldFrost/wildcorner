import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux';
import rootReducer from './reducers';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Note: this API requires redux@>=3.1.0
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
  <App />
</BrowserRouter>
</Provider>
, 
document.getElementById('root'));
registerServiceWorker();
