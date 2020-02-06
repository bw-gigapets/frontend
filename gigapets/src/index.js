import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { userReducer } from './reducer/user_reducer';
import { Provider } from 'react-redux';

const store = createStore (userReducer)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, document.getElementById('root'));
