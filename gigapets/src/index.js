import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router } from 'react-router-dom'
// import reducer from './reducer/reducer';
// import { Provider } from 'react-redux';

// const store = createStore (reducer)

// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

ReactDOM.render(<Router>
    <App />
</Router>, document.getElementById('root'));
